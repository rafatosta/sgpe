'use client';

import { useState, ChangeEvent } from 'react';
import { FloatingLabel, Button, Datepicker, Label } from 'flowbite-react';
import { FaArrowLeft, FaSave, FaTrash } from 'react-icons/fa';

export default function CadastroContato() {
    const [telefones, setTelefones] = useState<string[]>(['']);
    const [endereco, setEndereco] = useState({
        endereco: '',
        complemento: '',
        estado: '',
        cep: '',
        cidade: ''
    });
    const [mostrarEndereco, setMostrarEndereco] = useState(false);

    const handleAddTelefone = () => setTelefones([...telefones, '']);
    const handleRemoveTelefone = (index: number) =>
        setTelefones(telefones.filter((_, i) => i !== index));

    const handleEnderecoChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEndereco((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="flex flex-col max-w-2xl mx-auto p-6 space-y-6">
            <div className=" flex justify-between items-center">
                <Button pill color="gray">
                    <FaArrowLeft className="mr-2 h-4 w-4" />
                </Button>
                <Button pill color="alternative">
                    <FaSave className="mr-2 h-4 w-4" /> Salvar
                </Button>
            </div>

            <h1 className="text-2xl font-bold">Cadastro de Paciente</h1>

            <div className="flex flex-col space-y-4">
                <FloatingLabel variant="outlined" label="Nome completo" />
                <FloatingLabel variant="outlined" label="Nome social" />
                <FloatingLabel variant="outlined" label="CPF" />
                <FloatingLabel variant="outlined" label="Email" />

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
                <Button pill color="light" onClick={handleAddTelefone}>
                    + Adicionar telefone
                </Button>

                {mostrarEndereco && (
                    <div className="space-y-2 border p-4 rounded-xl border-gray-300">
                        <h2 className="text-lg font-semibold flex justify-between items-center">
                            Endereço
                            <Button
                                pill
                                outline
                                color="red"
                                size="xs"
                                onClick={() => setMostrarEndereco(false)}
                            >
                                <FaTrash className="h-3 w-3 mr-1" /> Remover endereço
                            </Button>
                        </h2>
                        <FloatingLabel
                            variant="outlined"
                            label="Endereço"
                            name="endereco"
                            value={endereco.endereco}
                            onChange={handleEnderecoChange}
                        />
                        <FloatingLabel
                            variant="outlined"
                            label="Complemento"
                            name="complemento"
                            value={endereco.complemento}
                            onChange={handleEnderecoChange}
                        />
                        <FloatingLabel
                            variant="outlined"
                            label="Estado"
                            name="estado"
                            value={endereco.estado}
                            onChange={handleEnderecoChange}
                        />
                        <FloatingLabel
                            variant="outlined"
                            label="CEP"
                            name="cep"
                            value={endereco.cep}
                            onChange={handleEnderecoChange}
                        />
                        <FloatingLabel
                            variant="outlined"
                            label="Cidade"
                            name="cidade"
                            value={endereco.cidade}
                            onChange={handleEnderecoChange}
                        />
                    </div>
                )}

                {!mostrarEndereco && (
                    <Button pill color="light" onClick={() => setMostrarEndereco(true)}>
                        + Adicionar endereço
                    </Button>
                )}

                <Label> Data de nacimento<Datepicker language="pt-BR" labelTodayButton="Hoje" labelClearButton="Limpar" /></Label>


                <FloatingLabel variant="outlined" label="Observações" />
            </div>
        </div>
    );
}
