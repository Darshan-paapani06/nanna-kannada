"use client";
/* eslint-disable @next/next/no-html-link-for-pages -- full document navigation is intentional for Vinext reliability */

import { useState } from "react";
import { KannadaCinematicIntro } from "./KannadaCinematicIntro";

const pillars = [
  { mark: "ಅ", title: "ಕನ್ನಡ ಕಲ್ತ್ಕೋ", text: "ದಿನನಿತ್ಯದ ಮಾತಿನಿಂದ ಧೈರ್ಯವಾಗಿ ಆರಂಭಿಸು.", href: "/learn" },
  { mark: "ಊ", title: "ಊರಿಗೊಂದು ಕನ್ನಡ", text: "ಪ್ರದೇಶದ ಸೊಗಡನ್ನು ಮೂಲಸಹಿತ ಹೋಲಿಸಿ ನೋಡು.", href: "/dialects" },
  { mark: "ಕಾ", title: "ಕಾಲದ ಕನ್ನಡ", text: "ರಾಜವಂಶ, ಚಳವಳಿ ಮತ್ತು ಪರಂಪರೆಯ ಕಾಲರೇಖೆ.", href: "/history" },
];

export function HomeExperience() {
  const [replayKey, setReplayKey] = useState(0);
  function replay() { sessionStorage.removeItem("nanna-kannada-intro"); setReplayKey((value) => value + 1); }
  return <>
    <KannadaCinematicIntro replayKey={replayKey} />
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#ಮನೆ" aria-label="ನನ್ನ ಕನ್ನಡ — ಮುಖಪುಟ"><span>ನನ್ನ</span> ಕನ್ನಡ</a>
        <nav aria-label="ಮುಖ್ಯ ಸಂಚರಣೆ"><a href="/learn">ಕಲಿಕೆ</a><a href="/karnataka">ಕರ್ನಾಟಕ</a><a href="/dialects">ಊರ ಮಾತು</a><a href="/history">ಇತಿಹಾಸ</a></nav>
        <a className="header-action" href="/challenge">ಕನ್ನಡ ಕದನ</a>
      </header>
      <main id="ಮನೆ">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="kicker"><span /> ಕನ್ನಡದ ಗತ್ತು · ನಾಡಿನ ಹೆಮ್ಮೆ</p>
            <h1 id="hero-title">ಇದು ನನ್ನ ನೆಲ!<br />ಇದು ನನ್ನ ನುಡಿ!<br /><strong>ಇದು ನನ್ನ ಕನ್ನಡ!</strong></h1>
            <p className="hero-lede">ಊರಿಗೊಂದು ಸೊಗಡು. ಮಾತಿಗೊಂದು ಗತ್ತು. ಕನ್ನಡ ಕಲಿತು, ಕರ್ನಾಟಕದ ಜೊತೆ ಮನಸ್ಸು ಬೆಸೆದುಕೋ!</p>
            <div className="hero-actions"><a className="button button-primary" href="/learn">ಕನ್ನಡ ಕಲಿಯಲು ಬಾ <span>→</span></a><a className="button button-ghost" href="/karnataka">ನಮ್ಮ ಕರ್ನಾಟಕ ನೋಡು</a></div>
            <div className="trust-row" aria-label="ವೇದಿಕೆಯ ಮುಖ್ಯ ವೈಶಿಷ್ಟ್ಯಗಳು"><span><b>೩೦+</b> ದಾಖಲೀಕೃತ ಮಾತುಗಳು</span><span><b>೬</b> ಕಲಿಕಾ ಪಯಣಗಳು</span><span><b>೧೦೦%</b> ಕನ್ನಡ-ಮೊದಲ</span></div>
          </div>
          <div className="hero-art" aria-label="ಕರ್ನಾಟಕದ ಸಂಸ್ಕೃತಿಯ ದೃಶ್ಯ ಸಂಯೋಜನೆ">
            <div className="sun-disc" /><div className="land-stamp"><span>ಕರ್ನಾಟಕ</span><small>ಒಂದು ರಾಜ್ಯ · ಹಲವು ಸೊಗಡು</small></div>
            <div className="heritage-card card-hampi"><span>ಹಂಪಿ</span><small>ಕಲ್ಲಲ್ಲೂ ಕಾವ್ಯ</small></div><div className="heritage-card card-mysuru"><span>ಮೈಸೂರು</span><small>ಪರಂಪರೆಯ ಹೊಳಪು</small></div><div className="hero-number">೦೧</div>
          </div>
        </section>
        <section className="manifesto" aria-label="ನಮ್ಮ ಸಂಕಲ್ಪ"><p>ಭಾಷೆ ಒಂದು ಪಾಠವಲ್ಲ.</p><h2>ಅದು ಜನರನ್ನು ಜೋಡಿಸುವ <em>ಸೇತುವೆ.</em></h2><span>ಕನ್ನಡಕ್ಕೆ ಗೌರವ ಕೊಡು. ಕನ್ನಡಿಗರ ಪ್ರೀತಿ ಪಡೆ!</span></section>
        <section className="pillar-grid" aria-labelledby="start-title"><div className="section-heading"><p>ನಿನ್ನ ಪಯಣ ಇಲ್ಲಿಂದ</p><h2 id="start-title">ಕನ್ನಡದೊಳಗೆ ಹೆಜ್ಜೆ ಇಡು</h2></div><div className="cards">{pillars.map((pillar, index) => <a href={pillar.href} className="pillar-card" key={pillar.title}><span className="pillar-index">೦{index + 1}</span><b className="pillar-mark">{pillar.mark}</b><h3>{pillar.title}</h3><p>{pillar.text}</p><span className="card-link">ತೆರೆದು ನೋಡು →</span></a>)}</div></section>
      </main>
      <footer><p>ಮಣ್ಣಿನ ಪ್ರೀತಿ. ನುಡಿಯ ಗತ್ತು. ಕನ್ನಡದ ಸ್ವಾಭಿಮಾನ.</p><button type="button" onClick={replay}>ಮತ್ತೊಮ್ಮೆ ಗರ್ಜನೆ ನೋಡು</button></footer>
    </div>
  </>;
}
