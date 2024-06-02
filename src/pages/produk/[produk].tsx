import { ProdukType } from "@/view/produk/ProdukView";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function DetailProduk() {
  const { query } = useRouter();
  const [item, setItem] = React.useState<ProdukType>([]);

  const GetIdProduk = async () => {
    try {
      const response = await axios.get(`/api/products/${query.produk}`);
      console.log("response", response.data);
      setItem(response.data.data);
    } catch (error) {
      console.log("errorId", error);
    }
  };

  useEffect(() => {
    if (!query.produk) return;

    GetIdProduk();
  }, [query]);
  return (
    <div className="mx-auto mt-4 w-full flex justify-center items-center flex-col">
      <h1 className="font-bold text-l text-xl mb-5">Detail Produk</h1>
      {query.produk && (
        <div key={item?.name}>
          <img
            className="rounded-sm w-52 h-52"
            src={item.image}
            alt={item.name}
          />
          <h1 className="font-bold text-l">{item.name}</h1>
          <p className="text-sm my-2 text-gray-500">{item.category}</p>
          <p className="font-bold ">RP.{item.price}</p>
        </div>
      )}
    </div>
  );
}

export default DetailProduk;
