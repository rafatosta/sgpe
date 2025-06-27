import { FaArrowLeft, FaEnvelope, FaCalendarAlt, FaComments, FaVideo, FaStar, FaTrash, FaEllipsisV, FaBirthdayCake, FaPhone, FaPlus } from 'react-icons/fa';
import { Button } from 'flowbite-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export default async function Page({ params }: { params: { id: string } }) {
    const paciente = await prisma.paciente.findUnique({
        where: { id: Number(params.id) },
        include: {
            telefones: true,
            endereco: true,
        },
    });

    if (!paciente) return notFound();

    return (
        <div className="flex flex-col max-w-2xl mx-auto p-6 space-y-6">
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <Link href="/" >
                        <Button pill color="gray">
                            <FaArrowLeft className="mr-2 h-4 w-4" /> Voltar
                        </Button>
                    </Link>
                    <div className="flex gap-6 items-center">
                        <Button pill color="blue">Editar</Button>
                        <FaTrash className="text-gray-500 cursor-pointer" />
                        <FaEllipsisV className="text-gray-500 cursor-pointer" />
                    </div>
                </div>

                <div className="flex gap-4 items-center">
                    <div className="relative">
                        <div className="w-24 h-24 bg-teal-600 rounded-full flex items-center justify-center text-white text-5xl font-bold">
                            {paciente.nome.charAt(0)}
                        </div>
                        <button className="absolute bottom-0 right-0 w-6 h-6 bg-white border border-gray-300 rounded-full flex items-center justify-center">
                            <FaPlus className="text-blue-600 text-xs" />
                        </button>
                    </div>
                    <h1 className="text-2xl font-medium">{paciente.nome}</h1>
                </div>
            </div>

            {/* Ações */}
            <div className="flex gap-4 items-center">
                <div className="flex flex-col items-center text-sm text-gray-600">
                    <FaVideo className="text-xl" />
                    <span>Nova consulta</span>
                </div>
                <div className="flex flex-col items-center text-sm text-gray-600">
                    <FaEnvelope className="text-xl" />
                    <span>Solicitar exame</span>
                </div>
                <div className="flex flex-col items-center text-sm text-gray-600">
                    <FaCalendarAlt className="text-xl" />
                    <span>Solicitar Atestado</span>
                </div>
                <div className="flex flex-col items-center text-sm text-gray-600">
                    <FaComments className="text-xl" />
                    <span>Gerar receita médica</span>
                </div>
            </div>

            {/* Detalhes e Histórico */}
            <div className="flex gap-8">
                <div className="flex-1 rounded-xl bg-gray-100 p-4 space-y-3">
                    <h2 className="font-semibold text-gray-800">Detalhes do contato</h2>

                    {paciente.email ? (
                        <div className="flex items-center gap-2 text-gray-800">
                            <FaEnvelope /> <span>{paciente.email}</span>
                        </div>
                    ) : (
                        <Link href={`/paciente/editar/${paciente.id}`} className="flex items-center gap-2 text-blue-600">
                            <FaEnvelope /> <span>Adicionar e-mail</span>
                        </Link>
                    )}

                    {paciente.telefones.length > 0 ? (
                        paciente.telefones.map((tel, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-gray-800">
                                <FaPhone /> <span>{tel.numero}</span>
                            </div>
                        ))
                    ) : (
                        <Link href={`/paciente/editar/${paciente.id}`} className="flex items-center gap-2 text-blue-600">
                            <FaPhone /> <span>Adicionar telefone</span>
                        </Link>
                    )}

                    {'dataNascimento' in paciente && paciente.dataNascimento ? (
                        <div className="flex items-center gap-2 text-gray-800">
                            <FaBirthdayCake /> <span>{new Date(paciente.dataNascimento).toLocaleDateString('pt-BR')}</span>
                        </div>
                    ) : (
                        <Link href={`/paciente/editar/${paciente.id}`} className="flex items-center gap-2 text-blue-600">
                            <FaBirthdayCake /> <span>Adicionar data de nascimento</span>
                        </Link>
                    )}

                    {paciente.endereco ? (
                        <div className="text-sm text-gray-700">
                            <p>{paciente.endereco.endereco}</p>
                            {paciente.endereco.complemento && <p>{paciente.endereco.complemento}</p>}
                            <p>{paciente.endereco.cidade} - {paciente.endereco.estado}, {paciente.endereco.cep}</p>
                        </div>
                    ) : (
                        <Link href={`/paciente/editar/${paciente.id}`} className="text-blue-600 text-sm">
                            + Adicionar endereço
                        </Link>
                    )}
                </div>

                <div className="min-w-[200px]">
                    <h2 className="font-semibold text-gray-800">Histórico</h2>
                    <p className="text-sm text-gray-500">Última edição • 21 de jun.</p>
                </div>
            </div>
        </div>
    );
}
