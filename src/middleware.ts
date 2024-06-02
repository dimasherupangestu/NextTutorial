import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
  const islogin = false;
  if (islogin) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/", req.url));
  }
};
export const config = {
  matcher: ["/produk", "/about"],
};
