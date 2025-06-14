'use client'

import {
    Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, FloatingLabel, Button
} from 'flowbite-react';
import { useEffect, useState } from 'react';
import type { Paciente } from '@/types/paciente';
import { pageSize } from '@/utils/constants';
import Pagination from '@/components/Pagination';

function Patients() {
    const [pacientes, setPacientes] = useState<Paciente[]>([]);
    const [busca, setBusca] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalRecords, setTotalRecords] = useState(1);

    useEffect(() => {
        async function fetchPacientes() {
            const params = new URLSearchParams({
                page: currentPage.toString(),
                query: busca,
            });

            try {
                const res = await fetch(`/api/pacientes?${params.toString()}`);
                const json = await res.json();
                setPacientes(json.data);
                setTotalRecords(json.totalCount);
            } catch (err) {
                console.error('Erro ao buscar pacientes:', err);
                setPacientes([]);
                setTotalRecords(1);
            }
        }

        fetchPacientes();
    }, [currentPage, busca]);

    return (
        <div>
            <header>
                <div className="flex flex-row justify-between items-center pt-2 pb-2">
                    <h1 className="text-xl font-bold">Pacientes</h1>
                    <Button color="green" pill>
                        Novo
                    </Button>
                </div>
            </header>

            <main>
                <div className="overflow-x-auto space-y-4">
                    <FloatingLabel
                        variant="filled"
                        label="Buscar"
                        type="text"
                        value={busca}
                        onChange={(e) => {
                            setBusca(e.target.value);
                            setCurrentPage(1); // Resetar para a página 1 ao buscar
                        }}
                    />
                    <Table hoverable>
                        <TableHead>
                            <TableRow>
                                <TableHeadCell>Nome</TableHeadCell>
                                <TableHeadCell>CPF</TableHeadCell>
                                <TableHeadCell>Telefone</TableHeadCell>
                                <TableHeadCell>Sexo</TableHeadCell>
                                <TableHeadCell>Nascimento</TableHeadCell>
                                <TableHeadCell>Endereço</TableHeadCell>
                                <TableHeadCell><span className="sr-only">Editar</span></TableHeadCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="divide-y">
                            {pacientes.map((paciente) => (
                                <TableRow key={paciente.id}>
                                    <TableCell>{paciente.nome}</TableCell>
                                    <TableCell>{paciente.cpf}</TableCell>
                                    <TableCell>{paciente.telefone}</TableCell>
                                    <TableCell>{paciente.sexo}</TableCell>
                                    <TableCell>{new Date(paciente.nascimento).toLocaleDateString()}</TableCell>
                                    <TableCell>{paciente.endereco}</TableCell>
                                    <TableCell>
                                        <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Editar</a>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </main>

            <footer>
                <Pagination
                    currentPage={currentPage}
                    totalRecords={totalRecords}
                    onPageChange={setCurrentPage}
                />
            </footer>
        </div>
    );
}

export default Patients;
