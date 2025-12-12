"use client"

import Link from "next/link"
import Image from "next/image"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/atoms/form"
import { TLoginRequest, TLoginResponse } from "@/services/auth/types"
import { Input } from "@/components/atoms/input"
import { useState } from "react"
import { Button } from "@/components/atoms/button"
import { Icon } from "@iconify/react"
import { motion } from "framer-motion"

const Login = () => {
  const form = useForm<TLoginRequest & { isRememberMe: boolean }>({
    // defaultValues: {
    //   email: rememberMeParsed?.email || "",
    //   password: rememberMeParsed?.password || "",
    //   isRememberMe: !!rememberMeParsed,
    // },
  })

  const [isOpenConfirmTFADialog, setIsOpenConfirmTFADialog] =
    useState<boolean>(false)
  const [userId, setUserId] = useState<string>("")
  const [loginResponse, setLoginResponse] = useState<TLoginResponse | null>(
    null
  )
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const otherMethods = [
    {
      label: "Google",
      url: "google-new",
    },
  ]
  return (
    <div className="py-15 relative z-20 min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 text-center"
        >
          <div className="mb-4">
            <Link href={"/"} className="flex items-center justify-center">
              {/* <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/assets/logo.svg"
                  alt=""
                  width={480}
                  height={480}
                  className="m-auto h-10 w-auto"
                />
              </motion.div> */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
              >
                <Icon
                  icon="mdi:briefcase"
                  className="w-5 h-5 text-white m-auto "
                />
              </motion.div>
            </Link>
          </div>
          <h6 className="text-foreground text-xl font-bold">Welcome Back!</h6>
        </motion.div>

        <Form {...form}>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            onSubmit={() => {}}
            className="w-full"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white/90 backdrop-blur-md flex flex-col gap-5 rounded-3xl px-8 py-6 shadow-2xl border border-white/20"
            >
              <div className="flex flex-col gap-4">
                <div className="mt-2">
                  <ul className="flex items-center justify-center space-x-1">
                    {otherMethods.map((method, index) => (
                      <motion.div
                        key={method.url}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          // authLoginWithGoogleMutation.mutate();
                        }}
                        className="opacity-100 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-gray-200/80 hover:bg-gray-300/80 backdrop-blur-sm p-2 transition-all duration-300"
                      >
                        <Image
                          alt="login-method"
                          width={20}
                          height={20}
                          src={`/assets/auth/${method.url}.svg`}
                          className="text-white duration-300"
                        />
                        <span className="px-2 text-sm font-medium text-black">
                          Login with {method.label}
                        </span>
                      </motion.div>
                    ))}
                  </ul>
                </div>
                <div className="relative my-1 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="bg-info text-foreground relative px-4 text-sm">
                    or
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">
                          Username/Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            className="text-black bg-gray-200"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">
                          Password
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type={isPasswordVisible ? "text" : "password"}
                              placeholder="Enter your password"
                              {...field}
                              className="pr-10 text-black bg-gray-200"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setIsPasswordVisible((prev) => !prev)
                              }
                              className="text-muted-foreground absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
                              tabIndex={-1}
                            >
                              <Icon
                                icon={
                                  isPasswordVisible ? "mdi:eye-off" : "mdi:eye"
                                }
                                width={20}
                                height={20}
                              />
                            </button>
                          </div>
                        </FormControl>
                        {/* <FormDescription className="text-black">
                          password must be at least 8 characters
                        </FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </motion.div>
            <motion.div className="mt-3 flex flex-col gap-5 py-5">
              <div className="flex items-center justify-between">
                {/* <FormField
              control={form.control}
              name="isRememberMe"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <FormDescription>Ingat Saya</FormDescription>
                  </div>
                </FormItem>
              )}
            /> */}
                <Link
                  href="/forgot-password"
                  className="text-foreground text-sm"
                >
                  Forgot Password?
                </Link>
              </div>
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mb-8"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="default"
                      type="submit"
                      className="w-full"
                      // disabled={authLoginMutation.isPending}
                    >
                      Login
                    </Button>
                  </motion.div>
                </motion.div>
                <div>
                  <p className="text-foreground text-center">
                    Don't have an account?{" "}
                    <Link href="/register" className="text-warning underline">
                      Create Account
                    </Link>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.form>
        </Form>
      </motion.div>
    </div>
  )
}

export default Login
