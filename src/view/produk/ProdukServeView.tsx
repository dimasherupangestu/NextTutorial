import axios from "axios";
import React, { useEffect, useState } from "react";

interface ProdukType {
  name: string;
  price: number;
  category: string;
  image: string;
}
const ProdukServeView = ({ produk }: { produk: ProdukType[] }) => {
  console.log("rp", produk);
  const [isLoding, setIsLoding] = useState(true);
  return (
    <div>
      <h1 className="text-center mt-5 font-bold text-2xl">Produk View</h1>

      <div className="flex justify-center items-center mt-5">
        <div className=" p-5 rounded-sm shadow-sm w[250px] h-auto flex gap-6">
          {isLoding ? (
            produk.map((item: ProdukType) => (
              <div key={item.name}>
                <img
                  className="rounded-sm w-52 h-52"
                  src={item.image}
                  alt={item.name}
                />
                <h1 className="font-bold text-l">{item.name}</h1>
                <p className="text-sm my-2 text-gray-500">{item.category}</p>
                <p className="font-bold ">RP.{item.price}</p>
              </div>
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

export default ProdukServeView;
