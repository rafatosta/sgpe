'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  FloatingLabel,
  Button,
  Pagination
} from 'flowbite-react';
import { useEffect, useState } from 'react';

import { Paciente } from '@/types/paciente';


export default function PacientesPage() {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [busca, setBusca] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchPacientes() {
      const res = await fetch('/api/pacientes');
      const data = await res.json();
      setPacientes(data);
    }

    fetchPacientes();
  }, []);

  const pacientesFiltrados = pacientes.filter(p =>
    p.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="p-4">
      <header className="flex justify-between items-center pb-4">
        <h1 className="text-xl font-bold">Pacientes</h1>
        <Button color="green" pill>
          Novo
        </Button>
      </header>

      <FloatingLabel
        variant="filled"
        label="Buscar"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        type="text"
        className="mb-4"
      />

      <div className="overflow-x-auto">
        <Table hoverable>
          <TableHead>
            <TableRow>
              <TableHeadCell>Nome</TableHeadCell>
              <TableHeadCell>CPF</TableHeadCell>
              <TableHeadCell>Telefone</TableHeadCell>
              <TableHeadCell>Sexo</TableHeadCell>
              <TableHeadCell>Nascimento</TableHeadCell>
              <TableHeadCell>Endereço</TableHeadCell>
              <TableHeadCell>
                <span className="sr-only">Editar</span>
              </TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pacientesFiltrados.map((p) => (
              <TableRow key={p.id}>
                <TableCell>{p.nome}</TableCell>
                <TableCell>{p.cpf}</TableCell>
                <TableCell>{p.telefone}</TableCell>
                <TableCell>{p.sexo}</TableCell>
                <TableCell>{new Date(p.nascimento).toLocaleDateString()}</TableCell>
                <TableCell>{p.endereco}</TableCell>
                <TableCell>
                  <a href="#" className="font-medium text-blue-600 hover:underline">
                    Editar
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <footer className="mt-4 flex justify-center">
        <Pagination currentPage={currentPage} totalPages={1} onPageChange={setCurrentPage} />
      </footer>
    </div>
  );
}
