import React from "react";

const ProductsContainer = ({ products }) => {
  if (products.length === 0)
    return <h4 className="text-lg">No products found...</h4>;
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductsContainer;
