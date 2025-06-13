// types/paciente.ts
import type { Paciente as PrismaPaciente } from '@/generated/prisma';

export type Paciente = Pick<
  PrismaPaciente,
  'id' | 'nome' | 'cpf' | 'telefone' | 'sexo' | 'nascimento' | 'endereco'
>;
