"use client";
/* eslint-disable @next/next/no-html-link-for-pages -- full document navigation is intentional for Vinext reliability */
import { useState } from "react";

const links = [["/learn","ಕಲಿಕೆ"],["/karnataka","ಕರ್ನಾಟಕ"],["/dialects","ಊರ ಮಾತು"],["/history","ಇತಿಹಾಸ"],["/heritage","ಪರಂಪರೆ"],["/ai","ಕನ್ನಡ ಮಿತ್ರ"]];

export function SiteChrome({children}:{children:React.ReactNode}) {
  const [open,setOpen]=useState(false);
  return <div className="site-shell inner-shell">
    <header className="site-header inner-header"><a className="brand" href="/"><span>ನನ್ನ</span> ಕನ್ನಡ</a>
      <nav aria-label="ಮುಖ್ಯ ಸಂಚರಣೆ">{links.map(([href,label])=><a key={href} href={href}>{label}</a>)}</nav>
      <button className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(!open)}>ಪಟ್ಟಿ</button>
      <a className="header-action" href="/challenge">ಕನ್ನಡ ಕದನ</a>
    </header>
    {open&&<div id="mobile-menu" className="mobile-menu">{links.map(([href,label])=><a key={href} href={href}>{label}</a>)}</div>}
    {children}
    <footer><p>ಮಣ್ಣಿನ ಪ್ರೀತಿ. ನುಡಿಯ ಗತ್ತು. ಕನ್ನಡದ ಸ್ವಾಭಿಮಾನ.</p><div><a href="/about">ನಮ್ಮ ಸಂಕಲ್ಪ</a> · <a href="/contribute">ನಿನ್ನ ಊರಿನ ಮಾತು</a></div></footer>
  </div>;
}
