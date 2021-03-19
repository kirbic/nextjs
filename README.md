# Helpers for nextjs ecommerce

## 1. Configure serverless api handlers

Create a Dynamic API Route handler at `/pages/api/auth/[...auth0].js`

```js
import { handle_auth } from "@kirbic/nextjs";
export default handle_auth();
```

## 2. `pages/_app.js` Wrap your app inside kirbic user provider

```js
// pages/_app.js
import React from "react";
import { UserProvider } from "@kirbic/nextjs";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
```

## 3. Setup kirbic config in environment variables

```env
KIRBIC_SECRET=<a_random_string>
KIRBIC_BASE_URL=http://localhost:3000
KIRBIC_CLIENT_ID=<your_kirbic_client_id>
KIRBIC_CLIENT_SECRET=<your_kirbic_client_secret>
```
