'use client'

import { FloatingLabel, Tooltip } from 'flowbite-react';
import { useEffect, useState } from 'react';
import type { Paciente } from '@/types/paciente';
import Pagination from '@/components/Pagination';
import Link from 'next/link'
import Table from '@/components/Table';
import CopyableText from '@/components/CopyableText';

export default function Home() {
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
            header: '#',
            accessor: (data: Paciente) => <div>{data.id}</div>,
        },
        {
            header: 'Nome',
            accessor: (data: Paciente) => <CopyableText text={data.nome} />,
        },
        {
            header: 'Email',
            accessor: (data: Paciente) =>
                data.email ? <CopyableText text={data.email} /> : '-',
        },
        {
            header: 'Telefone',
            accessor: (data: Paciente) => {
                const telefones = data.telefones || [];

                if (telefones.length === 0) return '-';

                const [primeiro, ...restantes] = telefones;

                return (
                    <div className="flex items-center gap-1">
                        <CopyableText text={primeiro.numero} />
                        {restantes.length > 0 && (
                            <Tooltip
                                content={restantes.map((tel, i) => (
                                    <div key={i}>
                                        <CopyableText text={tel.numero} />
                                    </div>
                                ))}

                                style="light"
                                placement="top"
                            >
                                <button className="ml-2 px-2 py-0.5 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-100">
                                    +
                                </button>
                            </Tooltip>
                        )}
                    </div>
                );
            },
        },
        {
            header: '',
            accessor: (data: Paciente) => (
                <Link href={`/paciente/${data.id}`} className=" font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Visualizar
                </Link>
            )
        }
    ];


    return (
        <div className="h-screen flex flex-col">
            <header className="flex items-center justify-between h-16 bg-gray-800 text-white px-6 shadow-md z-10">
                <h1 className="text-xl font-semibold">{`Pacientes (${totalRecords})`}</h1>
                <Link href="/novo">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
                        {"Novo"}
                    </button>
                </Link>
            </header>
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
            <main className="flex-1 overflow-y-hidden">
                <Table data={pacientes} columns={columns} keyExtractor={(data: Paciente) => data.id} />
            </main>

            <footer className="">
                <Pagination
                    currentPage={currentPage}
                    totalRecords={totalRecords}
                    onPageChange={setCurrentPage}
                />
            </footer>
        </div>
    );
}