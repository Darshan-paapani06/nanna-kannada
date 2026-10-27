"use client";
export default function ErrorPage({reset}:{reset:()=>void}){return <main className="not-found"><p>ಸ್ವಲ್ಪ ತಾಂತ್ರಿಕ ತೊಂದರೆ ಬಂದಿದೆ ಗುರು.</p><h1>ಗಾಬರಿ ಬೇಡ — ಮತ್ತೆ ಪ್ರಯತ್ನಿಸೋಣ!</h1><button className="button button-primary" onClick={reset}>ಮತ್ತೆ ಪ್ರಯತ್ನಿಸು</button></main>}

