import React, { useEffect, useState } from "react";

const useProducts = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(false);
  }, []);
  return <div></div>;
};

export default useProducts;
