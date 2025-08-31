// Script returns ACCESS_TOKEN and REFRESH_TOKEN.

const clientId = process.env.YOTO_CLIENT_ID?.trim();
if (!clientId) {
  console.error('Missing YOTO_CLIENT_ID');
  process.exit(1);
}

const form = (o) => new URLSearchParams(o);

// Step 1: device code
const codeRes = await fetch('https://login.yotoplay.com/oauth/device/code', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: form({
    client_id: clientId,
    scope: 'profile offline_access openid',
    audience: 'https://api.yotoplay.com',
  }),
});
if (!codeRes.ok) {
  console.error('Device code failed:', await codeRes.text());
  process.exit(1);
}
const code = await codeRes.json();
console.log('Visit:', code.verification_uri, 'and enter code:', code.user_code);

// Step 2: poll for token (confirm in browser first)
let token;
while (!token) {
  const tRes = await fetch('https://login.yotoplay.com/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: form({
      grant_type: 'urn:ietf:params:oauth:grant-type:device_code',
      device_code: code.device_code,
      client_id: clientId,
      audience: 'https://api.yotoplay.com',
    }),
  });

  if (tRes.ok) {
    token = await tRes.json();
    break;
  }
  const j = await tRes.json();
  if (j.error === 'authorization_pending') {
    await new Promise((r) => setTimeout(r, (code.interval || 5) * 1000));
    continue;
  }
  console.error('Token poll failed:', j);
  process.exit(1);
}

console.log('\nACCESS_TOKEN=', token.access_token);
console.log('REFRESH_TOKEN=', token.refresh_token);
