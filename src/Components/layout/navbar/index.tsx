import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

export const Navbar = () => {
  const { data }: any = useSession();
  console.log(data);
  return (
    <>
      <div
        style={{
          backgroundColor: "#222",
          width: "100%",
          height: "45px",
          display: "flex",
          alignItems: "center",
          padding: "5px 5%",
          color: "white",
          flex: "flex",
          justifyContent: "space-between",
        }}>
        <h3>Next Tutorial</h3>

        <div className="flex items-center gap-4">
          {data?.user?.image && (
            <Image
              width={100}
              height={100}
              className="rounded-full w-7 h-7"
              src={data.user?.image}
              alt={data.user?.name}
            />
          )}
          {data?.user && (
            <h3 className="text-white mr-5">{data.user?.fullname}</h3>
          )}

          {data ? (
            <button
              className="bg-red-500 py-1 px-4 rounded-sm"
              onClick={() => signOut()}>
              Logout
            </button>
          ) : (
            <button onClick={() => signIn()}>Login</button>
          )}
        </div>
      </div>
    </>
  );
};
