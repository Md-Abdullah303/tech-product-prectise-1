import ProductCard from "@/components/UI/ProductCard";
import getAllProducts from "@/lib/productsData/data";

const page = async () => {
  const products = (await getAllProducts()) || [];

  return (
    <div className="w-[90%] md:container mx-auto mt-20 mb-15">
      <h1 className="text-xl md:text-4xl font-bold">All Products</h1>

      {/* all products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        {products.length === 0
          ? "product not found"
          : products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default page;
