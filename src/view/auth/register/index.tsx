import axios from "axios";
import { headers } from "next/headers";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const RegisterView = () => {
  const { push } = useRouter();

  const handleRegister = async (event: any) => {
    event.preventDefault();
    const data = {
      fullname: event.target.fullname.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    try {
      const response = await axios.post("/api/register", data);
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
          <h1 className="font-bold text-2xl mb-3">Register Page</h1>
          <div className="w-[350px] h-[330px] bg-slate-800 text-white p-5 rounded-md shadow-md pb-2">
            <form onSubmit={handleRegister}>
              <label htmlFor="fullname">Fullname :</label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                className="w-full my-1 py-1 px-2 rounded-sm text-black mb-3"
                placeholder="Fullname"
              />

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
                Register
              </button>
              <p className="text-white mt-3 pb-2 text-center">
                Already have an account ?{" "}
                <Link href={"/auth/login"}>
                  <span className="text-blue-500">Login</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterView;
