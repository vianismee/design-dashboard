-- CreateTable
CREATE TABLE "Packaging" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Packaging_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Label" (
    "id" SERIAL NOT NULL,
    "width" DOUBLE PRECISION NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "shape" TEXT NOT NULL,
    "labelType" TEXT NOT NULL,
    "packagingId" INTEGER NOT NULL,

    CONSTRAINT "Label_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Label" ADD CONSTRAINT "Label_packagingId_fkey" FOREIGN KEY ("packagingId") REFERENCES "Packaging"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
