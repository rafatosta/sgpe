import type { Endereco } from './endereco';
import type { Telefone } from './telefone';

export type PacienteInput = {
  nome: string;
  nomeSocial?: string;
  email?: string;
  cpf: string;
  telefones: { numero: string }[]; // normalmente só o número é necessário no input
  endereco?: Omit<Endereco, 'id' | 'pacienteId'>; // remove campos automáticos
};
