'use client'

import { FloatingLabel } from 'flowbite-react';
import { useEffect, useState } from 'react';
import type { Paciente } from '@/types/paciente';
import Pagination from '@/components/Pagination';
import Header from '@/components/Header';
import Table from '@/components/Table';

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

    const columns = [
        {
            header: 'Nome',
            accessor: (data: Paciente) => data.nome,
        },
        {
            header: 'Telefone',
            accessor: (data: Paciente) => data.telefone
        },
        {
            header: '',
            accessor: (data: Paciente) => (
                <a className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Visualizar
                </a>
            )
        }
    ]

    return (
        <div>
            <Header title="Pacientes" buttonLabel="Novo" onButtonClick={() => null} />
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

                    <Table data={pacientes} columns={columns} keyExtractor={(data: Paciente) => data.id} />

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
