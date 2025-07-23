/*
  Warnings:

  - You are about to drop the column `taekwondoBeltSize` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "taekwondoBeltSize",
ADD COLUMN     "beltSize" TEXT;
