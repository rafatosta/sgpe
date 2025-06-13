import { NextResponse } from 'next/server';
import { getAllPacientes } from '@/lib/pacientes';

export async function GET() {
  const pacientes = await getAllPacientes();
  return NextResponse.json(pacientes);
}