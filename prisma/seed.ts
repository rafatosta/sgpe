import { seedPacientes } from './seed/pacientes.js';

async function main() {
    await seedPacientes();
}

main().catch((e) => {
    console.error('Erro ao executar seed:', e);
    process.exit(1);
});
