CREATE TABLE "tasks" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "status" TEXT NOT NULL DEFAULT 'todo',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

INSERT INTO "tasks" ("title", "description", "status", "updatedAt")
VALUES
    ('Set up Databricks app', 'Configure the app environment and deployment settings.', 'in_progress', CURRENT_TIMESTAMP),
    ('Connect the PostgreSQL database', 'Verify the app can connect using DATABASE_URL.', 'todo', CURRENT_TIMESTAMP),
    ('Build the tasks API', 'Return tasks from the database at GET /tasks.', 'todo', CURRENT_TIMESTAMP);
