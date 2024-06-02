import React from "react";
import { Navbar } from "./navbar";
import { useRouter } from "next/router";

const disable = ["/auth/login", "/auth/register", "/404"];
const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useRouter();
  return (
    <div>
      {!disable.includes(pathname) && <Navbar />}
      {children}
    </div>
  );
};

export default Layout;
