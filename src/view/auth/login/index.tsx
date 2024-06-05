import axios from "axios";
import { signIn } from "next-auth/react";
import { headers } from "next/headers";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const LoginView = () => {
  const { push, query } = useRouter();
  const callbackUrl: any = query.callbackUrl || "/";
  const handleRegister = async (event: any) => {
    event.preventDefault();

    try {
      const response = await signIn("credentials", {
        redirect: false,
        email: event.target.email.value,
        password: event.target.password.value,
        callbackUrl,
      });
      event.target.reset();
      console.log("res", response);
      push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-center  align-center w-full h-screen">
        <div className="flex justify-center items-center flex-col">
          <h1 className="font-bold text-2xl mb-3">Login</h1>
          <div className="w-[350px] h-auto bg-slate-800 text-white p-5 rounded-md shadow-md pb-4">
            <form onSubmit={handleRegister}>
              <label htmlFor="email">Email :</label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full my-1 py-1 px-2 rounded-sm text-black mb-3"
                placeholder="email"
              />

              <label htmlFor="password">Password :</label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full my-1 py-1 px-2 rounded-sm text-black mb-3"
                placeholder="password"
              />
              <button
                type="submit"
                className="bg-slate-200 text-black mt-3 font-bold w-full py-1 px-4 rounded-sm">
                Login
              </button>
            </form>
            <p className="text-white mt-3 pb-2 text-center">
              Dont have an account ?
              <Link href={"/auth/register"}>
                <span className="text-blue-500">register</span>
              </Link>
            </p>

            <p className="text-white text-center">Or login with</p>
            <button
              className="bg-green-500 text-black mt-3 font-bold w-full py-1 px-4 rounded-sm"
              onClick={() =>
                signIn("google", { callbackUrl, redirect: false })
              }>
              Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginView;
