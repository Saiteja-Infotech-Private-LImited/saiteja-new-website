# Docker — Saiteja Infotech Website

Run the existing React/Vite frontend, Spring Boot backend, and MySQL 8 together with Docker Compose. The browser talks to nginx; nginx serves the SPA and reverse-proxies `/api/` to the backend.

## Architecture

```text
Browser
  |
  |  http://localhost  (port 80)
  v
frontend (nginx)
  |-- static files from Vite `dist/`
  |-- React Router SPA fallback
  |
  |  /api/*  -->  http://backend:8080/api/*
  v
backend (Spring Boot, Java 21)
  |
  |  JDBC  -->  mysql:3306 / saiteja_website
  v
mysql (MySQL 8)
  |
  v
volume: mysql_data
```

Compose services share the `saiteja` bridge network. The browser never uses the Docker hostname `backend`; it only calls `http://localhost/api/...`.

## Prerequisites

- Docker Engine with Compose v2 (`docker compose`)
- A `.env` file in the repository root (see below)
- Ports **80** and **8080** free on the host

## Environment variables

Copy the example file and set placeholders. Do not commit `.env`.

```bat
copy .env.example .env
```

PowerShell:

```powershell
Copy-Item .env.example .env
```

| Variable | Required | Purpose |
|---|---|---|
| `MYSQL_ROOT_PASSWORD` | Yes | Root password for the MySQL 8 container (`MYSQL_DATABASE` is `saiteja_website`) |
| `SPRING_DATASOURCE_USERNAME` | Yes (example uses `root`) | JDBC user; matches the local app default `root` |
| `SPRING_DATASOURCE_PASSWORD` | Yes | JDBC password; must match `MYSQL_ROOT_PASSWORD` when using `root` |
| `SPRING_DATASOURCE_URL` | No | Override JDBC URL. Default host is Compose service `mysql`, database `saiteja_website` |
| `CORS_ALLOWED_ORIGINS` | No | Comma-separated origins. Default is `http://localhost:5173` for Vite |

The database name is **`saiteja_website`** (existing project name). Compose sets `MYSQL_DATABASE=saiteja_website`. Hibernate `ddl-auto=update` still creates/updates `quotations` and `contact_messages`.

## Build and run

From the repository root:

```bat
docker compose up --build
```

Detached:

```bat
docker compose up --build -d
```

First backend image build downloads Maven dependencies and can take several minutes.

## URLs

| What | URL |
|---|---|
| Website (nginx) | http://localhost |
| Health via nginx proxy | http://localhost/api/health |
| Health via backend port | http://localhost:8080/api/health |
| Contact API | `POST` http://localhost/api/contact |
| Quotation API | `POST` http://localhost/api/quotations |

Expected health body:

```text
Saiteja website backend is running
```

## Health checks

- **MySQL:** `mysqladmin ping` until the container is healthy. The backend service uses `depends_on: mysql` with `condition: service_healthy`.
- **Backend:** after startup, `GET /api/health` as above.
- **Frontend:** open http://localhost and confirm pages load. React Router paths (for example `/contact`) should not 404.

```bat
docker compose ps
docker compose logs -f backend
```

## Local development without Docker

Frontend still uses relative `/api` paths. `vite.config.js` proxies `/api` to `http://localhost:8080` so `npm run dev` keeps working.

For a local MySQL on the host, override the JDBC URL (default Docker host is `mysql`):

```properties
SPRING_DATASOURCE_URL=jdbc:mysql://localhost:3306/saiteja_website?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC
SPRING_DATASOURCE_PASSWORD=your-local-mysql-password
```

## Troubleshooting

**Backend cannot connect to MySQL**

- Confirm `.env` has `MYSQL_ROOT_PASSWORD` and `SPRING_DATASOURCE_PASSWORD` set to the same value.
- Wait until `mysql` is `healthy` (`docker compose ps`).
- JDBC host must be `mysql`, not `localhost`, inside Compose.

**Port 80 already in use**

- Stop the process using host port 80, or change the frontend ports mapping in `compose.yaml`.

**Contact/Quotation form fails in Docker**

- Use the site at http://localhost (nginx), not a leftover Vite URL, unless you also run the backend locally.
- Check `docker compose logs frontend` and `docker compose logs backend`.

**CORS errors**

- Browser → nginx `/api` is same-origin; CORS should not apply.
- Vite on port 5173 still needs `CORS_ALLOWED_ORIGINS=http://localhost:5173` (the default).

**Frontend image missing `dist`**

- Rebuild: `docker compose build --no-cache frontend`.

## Stopping and removing containers

Stop (keep the MySQL volume):

```bat
docker compose down
```

Stop and remove the named volume **`mysql_data`** (deletes stored quotations and contact messages):

```bat
docker compose down -v
```

## Persistent database volume

Compose defines volume `mysql_data`, mounted at `/var/lib/mysql` in the MySQL container.

- `docker compose down` does **not** delete it.
- `docker compose down -v` **does** delete it.
- Data survives image rebuilds as long as the volume is kept.

Inspect:

```bat
docker volume ls
docker volume inspect saiteja-new-website_mysql_data
```

The exact volume name is prefixed with the Compose project name (usually the directory name).
