/*
  Warnings:

  - You are about to drop the column `endereco` on the `pacientes` table. All the data in the column will be lost.
  - You are about to drop the column `nascimento` on the `pacientes` table. All the data in the column will be lost.
  - You are about to drop the column `sexo` on the `pacientes` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `pacientes` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Telefone" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "numero" TEXT NOT NULL,
    "pacienteId" INTEGER NOT NULL,
    CONSTRAINT "Telefone_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "pacientes" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Endereco" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "endereco" TEXT NOT NULL,
    "complemento" TEXT,
    "estado" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "pacienteId" INTEGER NOT NULL,
    CONSTRAINT "Endereco_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "pacientes" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_pacientes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "nomeSocial" TEXT,
    "email" TEXT,
    "cpf" TEXT NOT NULL
);
INSERT INTO "new_pacientes" ("cpf", "id", "nome") SELECT "cpf", "id", "nome" FROM "pacientes";
DROP TABLE "pacientes";
ALTER TABLE "new_pacientes" RENAME TO "pacientes";
CREATE UNIQUE INDEX "pacientes_cpf_key" ON "pacientes"("cpf");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Endereco_pacienteId_key" ON "Endereco"("pacienteId");
