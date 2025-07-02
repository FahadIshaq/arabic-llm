import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/contexts/AuthContext"
import { AppProvider } from "@/contexts/AppContext"
import { NotificationProvider } from "@/lib/notifications"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ArabicAI - Learn Arabic with AI",
  description:
    "Master Arabic with our AI-powered language learning platform. Interactive lessons, conversation practice, and personalized learning paths.",
  keywords: ["Arabic learning", "AI language learning", "Arabic lessons", "conversation practice"],
  authors: [{ name: "ArabicAI Team" }],
  creator: "ArabicAI",
  publisher: "ArabicAI",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arabicai.com",
    title: "ArabicAI - Learn Arabic with AI",
    description: "Master Arabic with our AI-powered language learning platform",
    siteName: "ArabicAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "ArabicAI - Learn Arabic with AI",
    description: "Master Arabic with our AI-powered language learning platform",
    creator: "@arabicai",
  },
  generator: 'v0.dev'
}

export const viewport = "width=device-width, initial-scale=1, maximum-scale=1"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#a855f7" />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        <AuthProvider>
          <AppProvider>
            <NotificationProvider>
              <div id="root">{children}</div>
            </NotificationProvider>
          </AppProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
