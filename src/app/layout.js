import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./components/authProvider";
import { ThemeProvider } from "./components/themeProvider";
import BaseLayout from "./components/layout/BaseLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <AuthProvider>
            <BaseLayout className= "flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col bg-muted/40">
            {children}
            </BaseLayout>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
