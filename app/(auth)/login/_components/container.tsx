"use client"

import Link from "next/link"
import Image from "next/image"
import { useForm } from "react-hook-form"
import {
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
    <div className="py-15">
      <div className="mb-8 text-center">
        <div className="mb-4">
          <Link href={"/"}>
            <Image
              src="/assets/logo.svg"
              alt=""
              width={480}
              height={480}
              className="m-auto h-10 w-auto"
            />
          </Link>
        </div>
        <h6 className="text-foreground text-xl font-bold">
          Selamat Datang Kembali di TipGG, Platform <br /> tipping bebas drama
        </h6>
      </div>

      {/* <Form {...form}> */}
      <form onSubmit={() => {}}>
        <div className="bg-info flex flex-col gap-5 rounded-3xl px-8 py-6">
          <div className="flex flex-col gap-4">
            <div className="mt-2">
              <ul className="flex items-center justify-center space-x-1">
                {otherMethods.map((method) => (
                  <div
                    key={method.url}
                    onClick={() => {
                      // authLoginWithGoogleMutation.mutate();
                    }}
                    //   className={`${authLoginWithGoogleMutation?.isPending ? "opacity-50" : "opacity-100"} flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-gray-200 p-2`}
                    className={`opacity-100 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-gray-200 p-2`}
                  >
                    <Image
                      alt="login-method"
                      width={20}
                      height={20}
                      src={`/assets/auth/${method.url}.svg`}
                      className="text-white duration-300"
                    />
                    <span className="px-2 text-sm font-medium text-black">
                      Login dengan {method.label}
                    </span>
                  </div>
                ))}
              </ul>
            </div>
            <div className="relative my-1 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="bg-info text-foreground relative px-4 text-sm">
                atau
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
                    <FormLabel className="text-warning">
                      Username/Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Masukkan email anda"
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
                    <FormLabel className="text-warning">Kata Sandi</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={isPasswordVisible ? "text" : "password"}
                          placeholder="Masukkan Kata Sandi anda"
                          {...field}
                          className="pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setIsPasswordVisible((prev) => !prev)}
                          className="text-muted-foreground absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
                          tabIndex={-1}
                        >
                          <Icon
                            icon={isPasswordVisible ? "mdi:eye-off" : "mdi:eye"}
                            width={20}
                            height={20}
                          />
                        </button>
                      </div>
                    </FormControl>
                    <FormDescription>
                      Masukkan kata sandi yang sesuai
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <div className="mt-3 flex flex-col gap-5 py-5">
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
            <Link href="/forgot-password" className="text-foreground text-sm">
              Lupa Kata Sandi?
            </Link>
          </div>
          <div>
            <div className="mb-8">
              <Button
                variant="default"
                type="submit"
                className="w-full"
                // disabled={authLoginMutation.isPending}
              >
                Login
              </Button>
            </div>
            <div>
              <p className="text-foreground text-center">
                Belum punya akun?{" "}
                <Link href="/register" className="text-warning underline">
                  Buat Akun
                </Link>
              </p>
            </div>
          </div>
        </div>
      </form>
      {/* </Form> */}
    </div>
  )
}

export default Login
