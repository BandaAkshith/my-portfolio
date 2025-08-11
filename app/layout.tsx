import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Akshith Krishna Banda - AI Developer Portfolio",
  description:
    "Aspiring AI Developer specializing in Machine Learning, Deep Learning, and Full-Stack Development. Experienced in TensorFlow, PyTorch, React, and building end-to-end AI solutions.",
  generator: "v0.dev",
  keywords: ["AI Developer", "Machine Learning", "Deep Learning", "React", "Python", "TensorFlow", "PyTorch"],
  authors: [{ name: "Akshith Krishna Banda" }],
  openGraph: {
    title: "Akshith Krishna Banda - AI Developer Portfolio",
    description: "Aspiring AI Developer specializing in Machine Learning, Deep Learning, and Full-Stack Development.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
