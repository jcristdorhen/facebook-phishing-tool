"use client"

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Eye, EyeOff, Facebook, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion, AnimatePresence } from "framer-motion"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [activeInput, setActiveInput] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleFacebookLogin = async () => {
    // In a real implementation, you would integrate with Facebook SDK
    console.log("Logging in with Facebook")
    router.push("/facebook")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      {/* Firebase-style animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence>
          {isLoaded && (
            <>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.05, scale: 1 }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                className="absolute top-[10%] right-[15%] h-[300px] w-[300px] rounded-full bg-[#FFCA28]"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.05, scale: 1 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.5 }}
                className="absolute bottom-[15%] left-[10%] h-[250px] w-[250px] rounded-full bg-[#FF8F00]"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.05, scale: 1 }}
                transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
                className="absolute top-[40%] left-[20%] h-[200px] w-[200px] rounded-full bg-[#F57C00]"
              />
            </>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md z-10"
      >
        <Card className="overflow-hidden border-none bg-white shadow-xl">
          {/* Firebase-style header gradient */}
          <div className="h-2 w-full bg-gradient-to-r from-[#FFA000] via-[#F57C00] to-[#FFCA28]"></div>

          <CardHeader className="space-y-1 pt-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex justify-center mb-4"
            >
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#FFA000] to-[#F57C00] flex items-center justify-center shadow-lg">
                <Flame className="h-8 w-8 text-white" />
              </div>
            </motion.div>
            <CardTitle className="text-2xl font-bold text-center text-gray-800">Welcome</CardTitle>
            <CardDescription className="text-center text-gray-500">Sign in with Facebook to continue</CardDescription>
          </CardHeader>

          <CardContent className="space-y-6 pt-4">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                console.log("Login with email and password:", { email, password })
                // Here you would handle the email/password authentication
              }}
            >
              <motion.div
                className="space-y-2"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Label
                  htmlFor="email"
                  className={`text-sm font-medium ${activeInput === "email" ? "text-[#F57C00]" : "text-gray-600"}`}
                >
                  Email
                </Label>
                <div
                  className={`relative transition-all duration-300 ${activeInput === "email" ? "scale-[1.02]" : ""}`}
                >
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setActiveInput("email")}
                    onBlur={() => setActiveInput(null)}
                    className="border-gray-200 bg-gray-50 focus:border-[#F57C00] focus:ring-[#F57C00] focus:ring-opacity-20 transition-all duration-300"
                    autoComplete="email"
                    required
                  />
                  {activeInput === "email" && (
                    <motion.div
                      layoutId="activeInput"
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#FFA000] to-[#F57C00] w-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                    />
                  )}
                </div>
              </motion.div>

              <motion.div
                className="space-y-2 mt-4"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Label
                  htmlFor="password"
                  className={`text-sm font-medium ${activeInput === "password" ? "text-[#F57C00]" : "text-gray-600"}`}
                >
                  Password
                </Label>
                <div
                  className={`relative transition-all duration-300 ${activeInput === "password" ? "scale-[1.02]" : ""}`}
                >
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setActiveInput("password")}
                    onBlur={() => setActiveInput(null)}
                    className="border-gray-200 bg-gray-50 pr-10 focus:border-[#F57C00] focus:ring-[#F57C00] focus:ring-opacity-20 transition-all duration-300"
                    autoComplete="current-password"
                    required
                  />
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#F57C00] transition-colors duration-200"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={showPassword ? "eye-off" : "eye"}
                        initial={{ opacity: 0, rotateY: 90 }}
                        animate={{ opacity: 1, rotateY: 0 }}
                        exit={{ opacity: 0, rotateY: -90 }}
                        transition={{ duration: 0.2 }}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </motion.div>
                    </AnimatePresence>
                  </motion.button>
                  {activeInput === "password" && (
                    <motion.div
                      layoutId="activeInput"
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#FFA000] to-[#F57C00] w-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                    />
                  )}
                </div>
              </motion.div>

              <motion.div
                className="mt-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full overflow-hidden rounded-md"
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#FFA000] to-[#F57C00] hover:from-[#FF8F00] hover:to-[#EF6C00] text-white border-0 h-12 text-base font-medium"
                  >
                    Sign In
                  </Button>
                </motion.div>
              </motion.div>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 pb-8">
            <div className="relative w-full flex items-center justify-center my-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative bg-white px-4 text-sm text-gray-500">Or</div>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="w-full"
            >
              <motion.div
                whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.97 }}
                className="w-full overflow-hidden rounded-md"
              >
                <Button
                  onClick={handleFacebookLogin}
                  className="w-full bg-[#1877F2] hover:bg-[#166FE5] text-white border-0 h-12 text-base font-medium"
                >
                  <Facebook className="mr-2 h-5 w-5" />
                  Continue with Facebook
                </Button>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-center text-xs text-gray-500 mt-4"
            >
              By continuing, you agree to our Terms of Service and Privacy Policy.
            </motion.p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}

