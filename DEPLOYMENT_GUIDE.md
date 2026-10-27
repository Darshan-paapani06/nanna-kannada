# ನಿಯೋಜನೆ

Run lint, typecheck, tests and build. Apply reviewed D1 migrations, configure `DB` through the hosting control plane, and deploy the exact tested commit. Keep secrets in hosting secret storage. Verify every public route without authentication; verify authenticated contribution separately. GitHub Pages is not suitable for the Worker/D1 route architecture.
