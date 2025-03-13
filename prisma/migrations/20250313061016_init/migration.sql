-- CreateTable
CREATE TABLE "Tasks" (
    "id" TEXT NOT NULL,
    "task" VARCHAR(50) NOT NULL,
    "descripcion" VARCHAR(200) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("id")
);
