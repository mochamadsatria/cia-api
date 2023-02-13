/*
  Warnings:

  - Added the required column `voucher_proof` to the `SBCTeam` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `SBCTeam` ADD COLUMN `voucher_proof` VARCHAR(191) NOT NULL;
