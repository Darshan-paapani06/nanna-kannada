# ವ್ಯವಸ್ಥಾ ವಿನ್ಯಾಸ

React client modules → App Router pages → server route handlers → Cloudflare D1. Static verified seed content lives in `app/data/content.ts`; user submissions live only in D1. Browser APIs handle speech synthesis, microphone recording and printing; recordings never leave the device. Sites builds an ESM Cloudflare Worker through Vinext.
