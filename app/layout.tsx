import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ನನ್ನ ಕನ್ನಡ — ಕನ್ನಡದ ಗತ್ತು, ನಾಡಿನ ಹೆಮ್ಮೆ",
  description: "ಕನ್ನಡ ಕಲಿಕೆ, ಪ್ರಾದೇಶಿಕ ಮಾತು ಮತ್ತು ಕರ್ನಾಟಕದ ಪರಂಪರೆಯ ಕನ್ನಡ-ಮೊದಲ ಡಿಜಿಟಲ್ ವೇದಿಕೆ.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kn">
      <body>{children}</body>
    </html>
  );
}
