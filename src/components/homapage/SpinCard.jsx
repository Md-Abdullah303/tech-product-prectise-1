"use client";
import getAllProducts from "@/lib/productsData/data";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import HomePageProductCard from "../UI/HomaPageProductCard";

const SpinCard = () => {
  const [products, setProducts] = useState([]);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await getAllProducts();
      setProducts(data);
      setSpinner(false);
    };

    loadData();
  }, []);

  return (
    <div className=" my-20 border px-4 py-2 ">
      <Marquee pauseOnHover="true">
        {spinner ? (
          <div className="text-2xl font-bold">loding..</div>
        ) : (
          products.map((product) => (
            <HomePageProductCard key={product._id} product={product} />
          ))
        )}
      </Marquee>
    </div>
  );
};

export default SpinCard;
