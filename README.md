## How-To

### One-Time Installation

1. Install dependencies with `npm install`

### Local Development

1. `npm run start`
2. Visit http://localhost:8787/moon

### Deploy to CloudFlare

1. `npx wrangler login`
2. `npm run deploy`

### Deploy to Yoto

1.

```
export YOTO_CLIENT_ID="<client-id>"
npm run yoto:login
```

2.

```
export WORKER_BASE="https://<worker-domain>.workers.dev"
export YOTO_ACCESS_TOKEN="<access-token-from-step-1>"
npm run yoto:create
```
