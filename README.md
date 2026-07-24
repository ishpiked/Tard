# tard

Tard is a self-hosted web-research application. The Next.js UI calls its own
same-origin Python API at `GET /api/search`; it no longer depends on the
previous deployed API URL.

## Configure

Copy `.env.example` to `.env` and supply at least one server-side LLM provider
key. Keep `.env` private: provider keys must never use a `NEXT_PUBLIC_` prefix.

Deploy the repository as one Vercel project. `vercel.json` routes `/api/*` to
the FastAPI function in `api/server.py`.

To make the API available to external clients, set `SEARCH_API_TOKEN` in Vercel
environment variables. Requests must then include either `X-API-Key: <token>`
or `Authorization: Bearer <token>`:

```sh
curl -H "X-API-Key: your-token" \
  "https://your-project.vercel.app/api/search?q=latest+fusion+research"
```

Landing page for the Tard deep research API. Built with Next.js, Material UI, Tailwind, and Bricolage Grotesque.

## dev

```
npm install
npm run dev
```

## deploy

Push to GitHub, import in Vercel. It's just a Next.js app, Vercel picks it up automatically.
