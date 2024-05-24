import { useRouter } from "next/router";
import React from "react";

const ShopDetail: React.FC = () => {
  const { query } = useRouter();
  console.log(query);
  return (
    <div>
      <h1>shop detail</h1>
      <h2>Ini baju kamu{`${query.slug ? query.slug[0] : ""}`}</h2>
    </div>
  );
};

export default ShopDetail;
