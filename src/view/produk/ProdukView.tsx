import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export interface ProdukType {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
}

const ProdukView = () => {
  const [produk, setProduk] = useState([]);
  const [isLoding, setIsLoding] = useState(false);
  console.log("rp", produk);
  const getProduk = async () => {
    try {
      const response = await axios.get("/api/products");
      setIsLoding(true);
      setProduk(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduk();
  }, []);

  return (
    <div>
      <h1 className="text-center mt-5 font-bold text-2xl">Produk View</h1>

      <div className="flex justify-center items-center mt-5">
        <div className=" p-5 rounded-sm shadow-sm w[250px] h-auto flex gap-6">
          {isLoding ? (
            produk.map((item: ProdukType) => (
              <Link href={`/produk/${item.id}`} key={item.name}>
                <img
                  className="rounded-sm w-52 h-52"
                  src={item.image}
                  alt={item.name}
                />
                <h1 className="font-bold text-l">{item.name}</h1>
                <p className="text-sm my-2 text-gray-500">{item.category}</p>
                <p className="font-bold ">RP.{item.price}</p>
              </Link>
            ))
          ) : (
            <div>
              <h1>Loading...</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProdukView;
