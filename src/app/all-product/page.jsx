import ProductCard from "@/components/UI/ProductCard";

const page = async () => {
  const res = await fetch("http://localhost:8000/product");
  const products = await res.json();
  //   console.log(data);

  return (
    <div className="w-[90%] md:container mx-auto mt-20 ">
      <h1 className="text-xl md:text-4xl font-bold">All Products</h1>

      {/* all products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default page;
