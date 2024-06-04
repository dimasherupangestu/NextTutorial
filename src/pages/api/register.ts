// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { signUp } from "@/utils/db/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  massage: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("Request body:", req.body); // Tambahkan log untuk debugging

  if (req.method === "POST") {
    await signUp(req.body, ({ status, massage }: any) => {
      if (status) {
        res.status(200).json({ status, massage });
      } else {
        res.status(400).json({ status, massage });
      }
    });
  } else {
    res.status(405).json({ status: false, massage: "method not allowed" });
  }
}
