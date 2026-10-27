# GitHub ಸಾರ್ವಜನಿಕ ಪ್ರಕಟಣೆ

## ಪ್ರಸ್ತುತ ಸ್ಥಿತಿ

`gh` CLI is authenticated as `Darshan-paapani06` with repository/workflow scope. Publication is blocked only by the required direct confirmation that the entire local project may be sent to a public external repository.

## ಅನುಮೋದನೆಯ ನಂತರ ನಡೆಯುವ ಕ್ರಮ

```powershell
gh repo create nanna-kannada --public --source=. --remote=origin --push --description "ನನ್ನ ಕನ್ನಡ — Kannada-first regional language explorer, heritage atlas and learning platform"
gh repo view Darshan-paapani06/nanna-kannada --json nameWithOwner,visibility,url
```

Then verify the returned URL in a fresh unauthenticated session. Never add a remote URL containing a token. Repository topics and the deployed homepage URL are added only after successful public deployment.
