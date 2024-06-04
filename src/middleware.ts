import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import withAuth from "./middlewares/withAuth";

export const mainmiddleware = (req: NextRequest) => {
  const res = NextResponse.next();
  return res;
};
export default withAuth(mainmiddleware, ["/produk", "/admin"]);
