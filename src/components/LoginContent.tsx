import { useState } from "react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building, Eye, EyeOff, FileText, Lock, Mail, ShieldCheck } from "lucide-react"

const LoginContent = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    dealerCode: "",
    gstNumber: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (error) setError("")
  }

  const handleLogin = (type: "general" | "dealer") => {
    if (!formData.email || !formData.password) {
      setError("Please fill in all required fields")
      return
    }

    if (type === "dealer" && !formData.gstNumber) {
      setError("Please enter your GST number")
      return
    }

    if (type === "dealer" && !formData.dealerCode) {
      setError("Please enter your dealer code")
      return
    }

    setError("")
    alert("Login functionality would be implemented with backend authentication.")
  }

  return (
    <div className="grid gap-5 sm:gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <section className="rounded-[26px] border border-black/6 bg-[#2b2b2b] p-5 text-white shadow-[0_16px_60px_rgba(34,24,16,0.12)] sm:rounded-[32px] sm:p-8">
        <div className="text-[0.72rem] uppercase tracking-[0.24em] text-white/45">Access</div>
        <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">A single gateway for downloads, pricing access, and dealer workflows.</h2>
        <p className="mt-4 text-sm leading-7 text-white/70">
          The login experience now follows the same premium UI language as the rest of the website while still keeping
          the underlying account and dealer flow straightforward.
        </p>

        <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4">
          <div className="rounded-[20px] border border-white/10 bg-white/6 p-4 sm:rounded-[24px] sm:p-5">
            <ShieldCheck className="h-5 w-5 text-[#f7b488]" />
            <div className="mt-3 text-lg font-semibold">General access</div>
            <p className="mt-2 text-sm leading-6 text-white/68">
              Suitable for customers who need catalog downloads, future pricing visibility, and account-linked actions.
            </p>
          </div>
          <div className="rounded-[20px] border border-white/10 bg-white/6 p-4 sm:rounded-[24px] sm:p-5">
            <Building className="h-5 w-5 text-[#f7b488]" />
            <div className="mt-3 text-lg font-semibold">Dealer portal</div>
            <p className="mt-2 text-sm leading-6 text-white/68">
              Designed for approved dealer access, documentation, and future business-specific resource workflows.
            </p>
          </div>
        </div>
      </section>

      <Card className="rounded-[26px] border-black/6 shadow-[0_16px_60px_rgba(34,24,16,0.06)] sm:rounded-[32px]">
        <CardContent className="p-5 sm:p-8">
          <div className="mb-5 sm:mb-6">
            <div className="text-[0.72rem] uppercase tracking-[0.24em] text-[#8b6b52]">Sign In</div>
            <h3 className="mt-2 text-2xl font-semibold text-[#2b2b2b] sm:text-3xl">Welcome to MRM</h3>
            <p className="mt-2 text-sm leading-7 text-[#6e6e6e]">Access your account or your dealer portal from one place.</p>
          </div>

          {error && (
            <Alert variant="destructive" className="mb-6 rounded-2xl">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid h-auto w-full grid-cols-2 gap-1 rounded-[22px] bg-[#fbf8f3] p-1 sm:rounded-full">
              <TabsTrigger value="general" className="rounded-[18px] px-3 py-2 text-xs sm:rounded-full sm:text-sm">
                General Login
              </TabsTrigger>
              <TabsTrigger value="dealer" className="rounded-[18px] px-3 py-2 text-xs sm:rounded-full sm:text-sm">
                Dealer Portal
              </TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="mt-6 space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="h-12 rounded-full border-[#eadfce] bg-[#fbf8f3] pl-11"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <div className="relative mt-2">
                    <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="h-12 rounded-full border-[#eadfce] bg-[#fbf8f3] pl-11 pr-11"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </div>

              <Button className="h-11 w-full rounded-full" variant="primary" onClick={() => handleLogin("general")}>
                Sign In
              </Button>

              <div className="text-center">
                <Button variant="link" className="text-primary hover:text-primary/80">
                  Forgot Password?
                </Button>
              </div>

              <Separator />

              <div className="text-center">
                <p className="mb-4 text-sm text-muted-foreground">Don't have an account?</p>
                <Button variant="outline" className="h-11 w-full rounded-full bg-transparent">
                  Create Account
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="dealer" className="mt-6 space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="dealerCode">Dealer Code</Label>
                  <div className="relative mt-2">
                    <Building className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input
                      id="dealerCode"
                      placeholder="Enter dealer code"
                      className="h-12 rounded-full border-[#eadfce] bg-[#fbf8f3] pl-11"
                      value={formData.dealerCode}
                      onChange={(e) => handleInputChange("dealerCode", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="gstNumber">GST Number *</Label>
                  <div className="relative mt-2">
                    <FileText className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input
                      id="gstNumber"
                      placeholder="Enter your GST number"
                      className="h-12 rounded-full border-[#eadfce] bg-[#fbf8f3] pl-11"
                      value={formData.gstNumber}
                      onChange={(e) => handleInputChange("gstNumber", e.target.value)}
                    />
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">15-digit alphanumeric GST identification number</p>
                </div>

                <div>
                  <Label htmlFor="dealerEmail">Email Address</Label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input
                      id="dealerEmail"
                      type="email"
                      placeholder="Enter your email"
                      className="h-12 rounded-full border-[#eadfce] bg-[#fbf8f3] pl-11"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="dealerPassword">Password</Label>
                  <div className="relative mt-2">
                    <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input
                      id="dealerPassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="h-12 rounded-full border-[#eadfce] bg-[#fbf8f3] pl-11 pr-11"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </div>

              <Button className="h-11 w-full rounded-full" variant="primary" onClick={() => handleLogin("dealer")}>
                Access Dealer Portal
              </Button>

              <div className="text-center">
                <Button variant="link" className="text-primary hover:text-primary/80">
                  Forgot Dealer Credentials?
                </Button>
              </div>

              <Separator />

              <div className="rounded-[20px] bg-[#fbf8f3] p-4 sm:rounded-[24px] sm:p-5">
                <h4 className="text-base font-semibold text-[#2b2b2b] sm:text-lg">Become a Dealer</h4>
                <p className="mt-2 text-sm leading-7 text-[#6e6e6e]">
                  Join our network of authorized dealers and access exclusive benefits.
                </p>
                <Button variant="outline" size="sm" className="mt-4 h-11 w-full rounded-full bg-transparent">
                  Apply for Dealership
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

export default LoginContent
