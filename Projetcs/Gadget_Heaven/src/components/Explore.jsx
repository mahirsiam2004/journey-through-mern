import React from "react";
import useProducts from "../hooks/useProducts";

const Explore = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products: {error.message}</p>;

  // ✅ Extract unique category names
  const uniqueCategories = [...new Set(products.map((p) => p.category))];

  return (
    <section className="mx-auto">
      <h1 className="text-3xl md:text-6xl font-semibold mb-10">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="grid grid-cols-8 ">
        <aside className=" col-span-2 p-4  text-black ">
          <h2 className="text-xl font-semibold mb-2">Categories</h2>
          {uniqueCategories.map((category, index) => (
            <h3  key={index} className=" px-2 py-3 m-5 bg-gray-100 rounded-2xl cursor-pointer hover:scale-110  ">
              {category}
            </h3>
          ))}

        </aside>

        <div className="bg-red-400 col-span-6 p-4">
  Products Section
  {products.map((product) => (
    <div key={product.id} className="mb-4">
      <img src={product.product_image} alt={product.product_name} />
   
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Explore;
