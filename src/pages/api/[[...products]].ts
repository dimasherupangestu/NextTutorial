// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { retrieveData, retrieveDataId } from "@/utils/db/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  massage: string;
  statusCode: number;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.query.products![1]) {
    const data = await retrieveDataId("products", req.query.products![1]);
    res.status(200).json({ massage: "success", statusCode: 200, data: data });
  }
  const data = await retrieveData("products");
  res.status(200).json({ massage: "success", statusCode: 200, data: data });
}
