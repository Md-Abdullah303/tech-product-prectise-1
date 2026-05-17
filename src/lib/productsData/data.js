const getAllProducts = async () => {
  const res = await fetch("http://localhost:8000/product");
  const data = await res.json();
  return data || [];
};

export const getAddToCartProducts = async () => {
  const res = await fetch("http://localhost:8000/addToCart");
  const data = await res.json();
  return data;
};

export const getProductById = async (productId, token) => {
  const res = await fetch(`http://localhost:8000/product/${productId}`, {
    headers: {
      authorization: `Bearer ${token}` || "",
    },
  });
  const data = await res.json();
  return data;
};

export default getAllProducts;
