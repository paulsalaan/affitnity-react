//zod modules
import { z } from "zod";
// // react modules
import { Link, useNavigate } from "react-router-dom";
//import { Input } from "@/components/ui/input";

import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// axios modules

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Invalid email address." })
    .max(80, { message: "Must not exceed beyond 80 characters." }),
  password: z.string().min(1, { message: "Password is required." }),
});

function LoginForm() {
  const navigate = useNavigate();

  const [serverError, setServerError] = useState<string | null>(null);

  //define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // do something
    try {
      // clears any previous server-side error messages
      setServerError(null);
      console.log("Login success", values);

      // navigate to home
      navigate("/home");
    } catch (error: any) {
      // display if the login is error
      setServerError("Something went wrong. Please try again.");
      console.log("Login error", error);
    }
  }

  return (
    <div className="bg-snow-white shadow-md shadow-ash/40 rounded-lg p-6 mt-20 w-[320px] mx-auto">
      {/* title */}
      <h1 className="font-aeonik font-bold text-[23px] mb-[3px] text-center">
        Welcome back,<span className="text-brand ml-1">user</span>
      </h1>
      <div className="text-center font-manrope text-gray-70 text-[11px] mb-3">
        <p>
          Please login your account to proceed
          <br />
          your diet and workout
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {/* username field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-dmsans font-medium text-[14px] text-gray-800">
                  Email
                </FormLabel>
                <FormControl>
                  <div>
                    <Input
                      placeholder="Enter you email"
                      {...field}
                      className="text-[13.5px] font-manrope focus-visible:ring-2 focus-visible:ring-brand"
                    />
                  </div>
                </FormControl>
                {/* <FormDescription>Enter your username.</FormDescription> */}
                <FormMessage className="text-red-600 font-manrope text-xs"></FormMessage>
              </FormItem>
            )}
          />

          {/* password field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-dmsans font-medium text-[14px] mt-2 text-gray-800">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
                    {...field}
                    className="text-[13.5px] font-manrope focus-visible:ring-2 focus-visible:ring-brand"
                  />
                </FormControl>

                {/* <FormDescription>Enter your password.</FormDescription> */}
                <FormMessage className="text-red-600 font-manrope text-xs"></FormMessage>
              </FormItem>
            )}
          />
          {/* forgot password label */}
          <div>
            <p className="text-[12px] text-right text-brand font-manrope mb-5 mt-3">
              Forgot Password?
            </p>
          </div>
          {/* login button */}
          <Button
            type="submit"
            className="bg-brand text-snow-white w-full font-dmsans hover:bg-amber-600"
          >
            Login
          </Button>
        </form>
      </Form>
      {/* or connect with label */}
      <div>
        <p className="text-center text-sm my-3 font-manrope">or connect with</p>
        {/* facebook button*/}
        <div>
          <Button
            type="submit"
            className="bg-facebook-blue text-snow-white w-full font-dmsans hover:bg-blue-900 mb-3"
          >
            Connect with facebook
          </Button>
          <Button
            type="submit"
            className="bg-red-watermelon text-snow-white w-full font-dmsans hover:bg-pink-700"
          >
            Connect with Google
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function LoginTrial() {
  return (
    <>
      <section className="max-w-screen-2xl my-7 mx-6">
        <div className="flex items-center justify-between">
          <h1 className="font-aeonik font-semibold text-[23px]">
            Af<span className="text-brand font-aeonik">fit</span>nity
          </h1>
          {/* login and sign-up button */}
          <div
            className="flex justfify-content items-center gap-4 font-dmsans text-[11px]
          "
          >
            {/* login */}
            <div>
              <Link to="/">Login</Link>
            </div>
            {/* sign up */}
            <div>
              <Link
                to="/"
                className="px-3 py-3 bg-moss-black text-snow-white rounded-lg hover:bg-gray-700"
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>
        <LoginForm />
      </section>
    </>
  );
}
