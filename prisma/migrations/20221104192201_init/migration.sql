-- CreateTable
CREATE TABLE "Download" (
    "id" SERIAL NOT NULL,
    "videoId" TEXT NOT NULL,
    "timesDownloaded" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Download_pkey" PRIMARY KEY ("id")
);
