import { Libre_Franklin, Lora } from "next/font/google";
import "./globals.css";

const libra = Libre_Franklin({
  variable: "--font-libra",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata = {
  title: "POMO | Pomodoro Timer",
  description: "Your quiet companion for mindful work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${libra.variable} ${lora.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}