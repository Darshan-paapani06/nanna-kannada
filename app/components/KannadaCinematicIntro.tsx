"use client";

import { useEffect, useState } from "react";

type IntroState = "takeover" | "nannaKannada" | "nannaKarnataka" | "zoomOut" | "complete";

const sequence: Array<[IntroState, number]> = [
  ["nannaKannada", 250], ["nannaKarnataka", 1350], ["zoomOut", 2450], ["complete", 3750],
];

export function KannadaCinematicIntro({ replayKey = 0 }: { replayKey?: number }) {
  const [state, setState] = useState<IntroState>("takeover");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (replayKey === 0 && sessionStorage.getItem("nanna-kannada-intro") === "seen") {
      const seenTimer=window.setTimeout(()=>{setState("complete");setVisible(false)},0);
      return ()=>window.clearTimeout(seenTimer);
    }
    document.documentElement.classList.add("intro-locked");
    const steps = reduceMotion ? [["complete", 120] as [IntroState, number]] : sequence;
    const timers = steps.map(([next, delay]) => window.setTimeout(() => {
      setState(next);
      if (next === "complete") {
        sessionStorage.setItem("nanna-kannada-intro", "seen");
        document.documentElement.classList.remove("intro-locked");
        window.setTimeout(() => setVisible(false), reduceMotion ? 0 : 220);
      }
    }, delay));
    return () => { timers.forEach(window.clearTimeout); document.documentElement.classList.remove("intro-locked"); };
  }, [replayKey]);

  function skip() {
    setState("complete"); sessionStorage.setItem("nanna-kannada-intro", "seen");
    document.documentElement.classList.remove("intro-locked"); window.setTimeout(() => setVisible(false), 120);
  }

  if (!visible) return null;
  const word = state === "nannaKannada" || state === "takeover" ? "ಕನ್ನಡ" : "ಕರ್ನಾಟಕ";
  return (
    <div className={`cinematic-intro cinematic-intro--${state}`} aria-label="ನನ್ನ ಕನ್ನಡದ ಸಿನಿಮಾಟಿಕ್ ಪ್ರವೇಶ">
      <div className="intro-grain" aria-hidden="true" /><div className="intro-rays" aria-hidden="true" />
      <p className="intro-eyebrow">ಮಣ್ಣಿನ ಪ್ರೀತಿ · ನುಡಿಯ ಗತ್ತು</p>
      <div className="intro-lockup" aria-live="polite"><span className="intro-red">ನನ್ನ</span>{" "}<span className="intro-yellow">{word}</span></div>
      <p className="intro-oath">ನನ್ನ ನೆಲ. ನನ್ನ ನುಡಿ. ನನ್ನ ಸ್ವಾಭಿಮಾನ.</p>
      <button className="intro-skip" type="button" onClick={skip}>ಮುಂದೆ ಹೋಗೋಣ <span aria-hidden="true">→</span></button>
    </div>
  );
}
