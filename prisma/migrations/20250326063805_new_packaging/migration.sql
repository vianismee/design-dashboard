/*
  Warnings:

  - You are about to drop the `Label` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `labelKemasan` to the `Packaging` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Label" DROP CONSTRAINT "Label_packagingId_fkey";

-- AlterTable
ALTER TABLE "Packaging" ADD COLUMN     "innerbox" TEXT,
ADD COLUMN     "labelBulat" TEXT,
ADD COLUMN     "labelKemasan" TEXT NOT NULL;

-- DropTable
DROP TABLE "Label";
