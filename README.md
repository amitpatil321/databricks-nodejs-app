# databricks-nodejs-app

## Run locally

1. Create a `.env` file in the project root and set `DATABASE_URL` to your pooled PostgreSQL connection URL and `DATABASE_URL_UNPOOLED` to the direct (non-pooled) connection URL. Prisma uses the pooled URL for app queries and the direct URL for migrations. Keep this file private; it is ignored by Git.
2. Install dependencies with `npm install`.
3. Start the app with `npm start`. Startup applies pending Prisma migrations before starting the server.
4. Open `http://localhost:8000/tasks` to retrieve the tasks as JSON.

The first migration creates the `tasks` table and inserts three sample tasks. Subsequent starts do not insert duplicates.

## Deploy to Databricks Apps

Configure both `DATABASE_URL` (pooled) and `DATABASE_URL_UNPOOLED` (direct) as app environment variables using the PostgreSQL connection URLs and authentication details provided for your Databricks database. Do not commit credentials or put them in source control. The app's start command is `npm start`; it applies pending migrations using the direct connection and then starts the Express server on the port supplied by the environment.

The API exposes `GET /tasks`, which returns tasks ordered newest first.
