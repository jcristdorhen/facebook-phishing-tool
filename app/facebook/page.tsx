"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Eye, EyeOff } from "lucide-react"
import Image from "next/image"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({ email: "", password: "" })
  const [language, setLanguage] = useState("English (US)")
  const [showLanguageSelector, setShowLanguageSelector] = useState(false)

  // Validate email format
  const validateEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase()) || /^\d{10}$/.test(email) // Simple validation for email or 10-digit phone
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (errors.email) {
      setErrors({ ...errors, email: "" })
    }
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    if (errors.password) {
      setErrors({ ...errors, password: "" })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Validate form
    const newErrors = { email: "", password: "" }
    let isValid = true
    if (!email) {
      newErrors.email = "Email or mobile number is required"
      isValid = false
    } else if (!validateEmail(email) && !email.includes("@")) {
      newErrors.email = "Please enter a valid email or mobile number"
      isValid = false
    }
    if (!password) {
      newErrors.password = "Password is required"
      isValid = false
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
      isValid = false
    }
    setErrors(newErrors)
    if (isValid) {
      setIsLoading(true)
      // Simulate API call
      setTimeout(() => {
        console.log("Login attempt with:", { email, password })
        setIsLoading(false)
        // Here you would normally redirect or update UI based on login success
      }, 1500)
    }
  }

  const languages = [
    "English (US)",
    "Español",
    "Français",
    "Português",
    "Deutsch",
    "Italiano",
    "日本語",
    "한국어",
    "中文(简体)",
    "العربية",
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      {/* Language selector */}
      <div className="w-full flex justify-center p-4">
        <div className="relative text-gray-500 text-sm">
          <button
            onClick={() => setShowLanguageSelector(!showLanguageSelector)}
            className="hover:underline focus:outline-none transition-colors text-sm"
          >
            {language}
          </button>
          <AnimatePresence>
            {showLanguageSelector && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
              >
                {languages.map((lang) => (
                  <button
                    key={lang}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setLanguage(lang)
                      setShowLanguageSelector(false)
                    }}
                  >
                    {lang}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Top section with logo */}
      <div className="w-full flex justify-center mt-20">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <Image
            src="/facebook.webp"
            alt="Facebook Logo"
            width={240}
            height={96}
            priority
            className="w-60 h-16 object-contain"
          />
        </motion.div>
      </div>

      {/* Main content with form */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-[396px] flex flex-col items-center px-4">
          {/* Login form */}
          <div className="w-full">
            <form className="w-full space-y-4" onSubmit={handleSubmit}>
              <div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Mobile number or email"
                    className={`w-full px-4 py-3 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-md text-gray-600 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <AnimatePresence>
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className={`w-full px-4 py-3 border ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    } rounded-md text-gray-600 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-10`}
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                  <AnimatePresence>
                    {errors.password && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.password}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-blue-600 text-white rounded-full py-3 text-xl font-medium relative overflow-hidden hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.005 }}
                whileTap={{ scale: 0.995 }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Logging in...</span>
                  </div>
                ) : (
                  "Log in"
                )}
              </motion.button>
            </form>

            <div className="mt-4 mb-8 text-center">
              <Link href="#" className="text-gray-600 text-[18px] font-medium hover:underline transition-colors">
                Forgot password?
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full flex flex-col items-center py-8">
        <div className="w-full max-w-[396px] px-4">
          <motion.button
            type="button"
            className="w-full border-2 border-blue-300 rounded-full py-3 text-blue-600 text-lg font-medium hover:bg-blue-50 transition-colors mb-0"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Create new account
          </motion.button>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <Image
            src="/meta-seeklogo.svg"
            alt="Meta Logo"
            width={100}
            height={32}
            priority
            className="opacity-60"
          />
          <div className="flex space-x-4 text-gray-500 text-sm">
            <Link href="#" className="hover:underline">About</Link>
            <Link href="#" className="hover:underline">Help</Link>
            <Link href="#" className="hover:underline">More</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

