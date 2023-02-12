/*
  Warnings:

  - You are about to drop the column `address` on the `SBCLecturer` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `SBCMember` table. All the data in the column will be lost.
  - You are about to drop the column `study_address` on the `SBCTeam` table. All the data in the column will be lost.
  - You are about to drop the column `university_address` on the `SBCTeam` table. All the data in the column will be lost.
  - Added the required column `twibbon_proof` to the `SBCMember` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `SBCLecturer` DROP COLUMN `address`;

-- AlterTable
ALTER TABLE `SBCMember` DROP COLUMN `address`,
    ADD COLUMN `twibbon_proof` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `SBCTeam` DROP COLUMN `study_address`,
    DROP COLUMN `university_address`;
