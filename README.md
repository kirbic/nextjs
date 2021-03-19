# nextjs-kirbic

Create a Dynamic API Route handler at `/pages/api/auth/[...auth0].js`

```js
import { handle_auth } from "@kirbic/nextjs";
export default handle_auth();
```

## Environment variables

```env
KIRBIC_SECRET=<a_random_string>
KIRBIC_BASE_URL=http://localhost:3000
KIRBIC_CLIENT_ID=<your_kirbic_client_id>
KIRBIC_CLIENT_SECRET=<your_kirbic_client_secret>
```
