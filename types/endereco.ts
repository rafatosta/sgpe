export type Endereco = {
    id: number;
    logradouro: string;
    complemento?: string | null;
    cidade: string;
    estado: string;
    cep: string;
    pacienteId: number;
};
