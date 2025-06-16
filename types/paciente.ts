// types/paciente.ts
import type { Paciente as PrismaPaciente, Telefone, Endereco } from '@/generated/prisma';

export type Paciente = {
  id: number;
  nome: string;
  nomeSocial?: string;
  email?: string;
  cpf: string;
  telefones: Telefone[];
  endereco?: Endereco | null;
};
