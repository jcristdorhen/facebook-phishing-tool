import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Facebook",
  description: "Facebook login page",
  icons: {
    icon: '/facebook.ico',
  }
}

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