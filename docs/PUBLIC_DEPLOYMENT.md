# ಸಾರ್ವಜನಿಕ ನಿಯೋಜನೆ

## Sites ಮಾರ್ಗ

1. Production build ಸೃಷ್ಟಿಸಿ ಮತ್ತು D1 migration ಪರಿಶೀಲಿಸಿ.
2. Sites project ರಚಿಸಿ; `project_id` ಮಾತ್ರ `.openai/hosting.json`ನಲ್ಲಿ ಉಳಿಸಿ.
3. D1 binding `DB` ಅನ್ನು provision ಮಾಡಿ ಮತ್ತು `drizzle/` migration ಅನ್ವಯಿಸಿ.
4. ಪರೀಕ್ಷಿಸಿದ Git commit ಅನ್ನು Sites source repositoryಗೆ push ಮಾಡಿ.
5. ಅದೇ commit/build archive ಅನ್ನು version ಆಗಿ ಉಳಿಸಿ ಮತ್ತು deploy ಮಾಡಿ.
6. access mode ಅನ್ನು `public`ಗೆ ಬದಲಿಸುವುದು ಬಳಕೆದಾರರ ಈ briefನಲ್ಲಿ ಸ್ಪಷ್ಟವಾಗಿ ಅನುಮೋದಿಸಲಾಗಿದೆ.
7. fresh unauthenticated browserನಲ್ಲಿ live URL, routes, 404 ಮತ್ತು persistence ಪರಿಶೀಲಿಸಿ.

No production AI secret is required; the grounded fallback is the intended default.
