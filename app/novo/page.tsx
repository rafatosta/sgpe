// app/(admin)/pacientes/novo/page.tsx
'use client';

import FormPaciente from '@/components/FormPaciente';
import { useRouter } from 'next/navigation';

export default function NovoPaciente() {
  const router = useRouter();

  async function handleSubmit(data: any) {
    try {
      const res = await fetch('/api/pacientes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Erro ao salvar paciente');

      router.push('/pacientes');
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Erro ao salvar paciente');
    }
  }

  return (
    <div className="flex flex-col max-w-2xl mx-auto p-6 space-y-6">
      <FormPaciente onSubmit={handleSubmit} />
    </div>
  );
}
