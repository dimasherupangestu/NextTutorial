import ProdukServeView from "@/view/produk/ProdukServeView";
import { ProdukType } from "@/view/produk/ProdukView";
import axios from "axios";
import React from "react";

function produkServe({ produk }: { produk: ProdukType[] }) {
  return (
    <div>
      <ProdukServeView produk={produk} />
    </div>
  );
}
export const getStaticProps = async () => {
  const res: any = await axios.get("http://localhost:3000/api/products");
  const response = res.data;
  return {
    props: {
      produk: response.data,
    },
  };
};
export default produkServe;
