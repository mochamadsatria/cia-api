/*
  Warnings:

  - You are about to drop the column `photo` on the `CICMember` table. All the data in the column will be lost.
  - Added the required column `twibbon_proof` to the `CICMember` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `CICMember` DROP COLUMN `photo`,
    ADD COLUMN `twibbon_proof` VARCHAR(191) NOT NULL;
