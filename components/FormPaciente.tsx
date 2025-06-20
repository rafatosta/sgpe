// components/FormPaciente.tsx
'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { FloatingLabel, Button, Datepicker, Label } from 'flowbite-react';
import { FaArrowLeft, FaTrash } from 'react-icons/fa';
import type { Paciente } from '@/types/paciente';
import { useRouter } from 'next/navigation';


type Endereco = {
    endereco: string;
    complemento: string;
    estado: string;
    cep: string;
    cidade: string;
};

type Props = {
    paciente?: Paciente;
    onSubmit: (data: any) => void;
};

export default function FormPaciente({ paciente, onSubmit }: Props) {

    const router = useRouter();

    const [nome, setNome] = useState(paciente?.nome || '');
    const [nomeSocial, setNomeSocial] = useState(paciente?.nomeSocial || '');
    const [email, setEmail] = useState(paciente?.email || '');
    const [cpf, setCpf] = useState(paciente?.cpf || '');
    const [telefones, setTelefones] = useState<string[]>(paciente?.telefones || ['']);
    const [endereco, setEndereco] = useState<Endereco>(paciente?.endereco || { endereco: '', complemento: '', estado: '', cep: '', cidade: '' });
    const [mostrarEndereco, setMostrarEndereco] = useState(!!paciente?.endereco);
    const [nascimento, setNascimento] = useState<Date | null>(null);

    const handleAddTelefone = () => setTelefones([...telefones, '']);
    const handleRemoveTelefone = (index: number) =>
        setTelefones(telefones.filter((_, i) => i !== index));

    const handleEnderecoChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEndereco((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit({
            nome,
            nomeSocial,
            email,
            cpf,
            telefones: telefones.filter(t => t.trim() !== ''),
            endereco: mostrarEndereco ? endereco : null,
            nascimento,
        });
    };

    return (
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <div className="flex justify-between items-center">
                <Button pill color="gray" onClick={() => router.back()}>
                    <FaArrowLeft className="mr-2 h-4 w-4" /> Voltar
                </Button>

                <Button pill  type="submit">
                    Salvar
                </Button>
            </div>




            <FloatingLabel variant="outlined" label="Nome completo" value={nome} onChange={(e) => setNome(e.target.value)} />
            <FloatingLabel variant="outlined" label="Nome social" value={nomeSocial} onChange={(e) => setNomeSocial(e.target.value)} />
            <FloatingLabel variant="outlined" label="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />
            <FloatingLabel variant="outlined" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

            {telefones.map((tel, index) => (
                <div key={index} className="flex items-center gap-2">
                    <FloatingLabel
                        variant="outlined"
                        label={`Telefone ${index + 1}`}
                        value={tel}
                        onChange={(e) => {
                            const newTels = [...telefones];
                            newTels[index] = e.target.value;
                            setTelefones(newTels);
                        }}
                    />
                    {telefones.length > 1 && index > 0 && (
                        <Button pill outline color="red" onClick={() => handleRemoveTelefone(index)}>
                            <FaTrash className="h-4 w-4" />
                        </Button>
                    )}
                </div>
            ))}
            <Button pill color="light" type="button" onClick={handleAddTelefone}>
                + Adicionar telefone
            </Button>

            {mostrarEndereco && (
                <div className="space-y-2 border p-4 rounded-xl border-gray-300">
                    <h2 className="text-lg font-semibold flex justify-between items-center">
                        Endereço
                        <Button pill outline color="red" size="xs" onClick={() => setMostrarEndereco(false)}>
                            <FaTrash className="h-3 w-3 mr-1" /> Remover endereço
                        </Button>
                    </h2>
                    <FloatingLabel variant="outlined" label="Endereço" name="endereco" value={endereco.endereco} onChange={handleEnderecoChange} />
                    <FloatingLabel variant="outlined" label="Complemento" name="complemento" value={endereco.complemento} onChange={handleEnderecoChange} />
                    <FloatingLabel variant="outlined" label="Estado" name="estado" value={endereco.estado} onChange={handleEnderecoChange} />
                    <FloatingLabel variant="outlined" label="CEP" name="cep" value={endereco.cep} onChange={handleEnderecoChange} />
                    <FloatingLabel variant="outlined" label="Cidade" name="cidade" value={endereco.cidade} onChange={handleEnderecoChange} />
                </div>
            )}

            {!mostrarEndereco && (
                <Button pill color="light" type="button" onClick={() => setMostrarEndereco(true)}>
                    + Adicionar endereço
                </Button>
            )}

            <Label>Data de nascimento</Label>
            <Datepicker
                language="pt-BR"
                labelTodayButton="Hoje"
                labelClearButton="Limpar"
                onSelectedDateChanged={setNascimento}
            />

            <FloatingLabel variant="outlined" label="Observações" />
        </form>
    );
}
