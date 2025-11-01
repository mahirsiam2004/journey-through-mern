import React from "react";
import useProducts from "../hooks/useProducts";



const Explore = () => {
const { products, loading, error } =useProducts;
console.log(products,loading,error)
  return (
    <section className="mx-auto ">
      <h1 className="text-3xl md:text-6xl font-semibold">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="grid grid-cols-8 bg-amber-300">
        <aside className="bg-gray-700 grid col-span-2 ">
{
            console.log(products)

}        </aside>
        <div className="bg-red-400 grid col-span-6 ">products</div>
      </div>
    </section>
  );
};

export default Explore;
