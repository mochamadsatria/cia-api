-- CreateTable
CREATE TABLE `SBCTeam` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `university` VARCHAR(191) NOT NULL,
    `team_name` VARCHAR(191) NOT NULL,
    `bridge_name` VARCHAR(191) NOT NULL,
    `university_address` VARCHAR(191) NOT NULL,
    `study_address` VARCHAR(191) NOT NULL,
    `lecturer_id` INTEGER NOT NULL,
    `payment_proof_id` INTEGER NOT NULL,
    `truth_statement` BOOLEAN NOT NULL,
    `stc_statement` BOOLEAN NOT NULL,
    `finalized_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `SBCTeam_lecturer_id_key`(`lecturer_id`),
    UNIQUE INDEX `SBCTeam_payment_proof_id_key`(`payment_proof_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SBCMember` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `student_id` VARCHAR(191) NOT NULL,
    `study_major` VARCHAR(191) NOT NULL,
    `semester` INTEGER NOT NULL,
    `address` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `whatsapp` VARCHAR(191) NOT NULL,
    `line_id` VARCHAR(191) NOT NULL,
    `student_card` VARCHAR(191) NOT NULL,
    `student_proof` VARCHAR(191) NOT NULL,
    `photo` VARCHAR(191) NOT NULL,
    `is_leader` BOOLEAN NOT NULL,
    `team_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SBCLecturer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `profession_id` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `whatsapp` VARCHAR(191) NOT NULL,
    `photo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `proof` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FCECMember` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `whatsapp` VARCHAR(191) NOT NULL,
    `line_id` VARCHAR(191) NOT NULL,
    `student_card` VARCHAR(191) NOT NULL,
    `student_proof` VARCHAR(191) NOT NULL,
    `twibbon_proof` VARCHAR(191) NOT NULL,
    `photo` VARCHAR(191) NOT NULL,
    `is_leader` BOOLEAN NOT NULL,
    `team_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FCECTeam` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `school` VARCHAR(191) NOT NULL,
    `lecturer_name` VARCHAR(191) NOT NULL,
    `abstract_title` VARCHAR(191) NOT NULL,
    `team_name` VARCHAR(191) NOT NULL,
    `originality_letter` VARCHAR(191) NOT NULL,
    `abstract` VARCHAR(191) NOT NULL,
    `finalized_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CICMember` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `whatsapp` VARCHAR(191) NOT NULL,
    `line_id` VARCHAR(191) NOT NULL,
    `student_card` VARCHAR(191) NOT NULL,
    `student_proof` VARCHAR(191) NOT NULL,
    `photo` VARCHAR(191) NOT NULL,
    `study_major` VARCHAR(191) NOT NULL,
    `generation` VARCHAR(191) NOT NULL,
    `is_leader` BOOLEAN NOT NULL,
    `team_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CICTeam` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `team_name` VARCHAR(191) NOT NULL,
    `university` VARCHAR(191) NOT NULL,
    `payment_proof_id` INTEGER NOT NULL,
    `truth_statement` BOOLEAN NOT NULL,
    `stc_statement` BOOLEAN NOT NULL,
    `finalized_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `CICTeam_payment_proof_id_key`(`payment_proof_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Announcement` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `event` VARCHAR(191) NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `published_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Service` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `service` VARCHAR(191) NOT NULL,
    `active` BOOLEAN NOT NULL,

    UNIQUE INDEX `Service_service_key`(`service`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SBCTeam` ADD CONSTRAINT `SBCTeam_lecturer_id_fkey` FOREIGN KEY (`lecturer_id`) REFERENCES `SBCLecturer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SBCTeam` ADD CONSTRAINT `SBCTeam_payment_proof_id_fkey` FOREIGN KEY (`payment_proof_id`) REFERENCES `Payment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SBCMember` ADD CONSTRAINT `SBCMember_team_id_fkey` FOREIGN KEY (`team_id`) REFERENCES `SBCTeam`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FCECMember` ADD CONSTRAINT `FCECMember_team_id_fkey` FOREIGN KEY (`team_id`) REFERENCES `FCECTeam`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CICMember` ADD CONSTRAINT `CICMember_team_id_fkey` FOREIGN KEY (`team_id`) REFERENCES `CICTeam`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CICTeam` ADD CONSTRAINT `CICTeam_payment_proof_id_fkey` FOREIGN KEY (`payment_proof_id`) REFERENCES `Payment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
