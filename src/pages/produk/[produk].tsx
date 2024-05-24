import { useRouter } from "next/router";
import React from "react";

function DetailProduk() {
  const { query } = useRouter();
  return (
    <div>
      <h1>DetailProduk: {query.produk} </h1>
    </div>
  );
}

export default DetailProduk;
