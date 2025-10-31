import React from "react";
import useProducts from "../hooks/useProducts";

const Explore = () => {
const {loading,error,products}=useProducts();
  return (
    <section className="mx-auto ">
      <h1 className="text-3xl md:text-6xl font-semibold">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="grid grid-cols-8 bg-amber-300">
        <aside className="bg-gray-700 grid col-span-2 ">
{
            products.map(()=><p>hi</p>)

}        </aside>
        <div className="bg-red-400 grid col-span-6 ">products</div>
      </div>
    </section>
  );
};

export default Explore;
