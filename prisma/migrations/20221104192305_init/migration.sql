/*
  Warnings:

  - A unique constraint covering the columns `[videoId]` on the table `Download` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Download_videoId_key" ON "Download"("videoId");
