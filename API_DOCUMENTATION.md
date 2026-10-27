# API

## `POST /api/contributions`

Requires `oai-authenticated-user-id`. JSON: `region` (80), `expression` (120), `context` (600), `source` (300). Empty or malformed data returns Kannada `400`; missing identity `401`; rate limit `429`; unavailable persistence `503`; accepted review item `201`. Content is never auto-published.
