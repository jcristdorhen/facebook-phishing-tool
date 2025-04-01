"use client"

import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"

export default function FacebookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
        disableTransitionOnChange
        storageKey="ui-theme"
      >
        {children}
      </ThemeProvider>
    </div>
  )
}