"use client";
import ProductCard from "./ProductCard";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "@/utils/actions";

const ProductsContainer = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => getAllProducts(),
  });
  console.log(data);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred: {error.message}</div>;
  if (!data) return <div>No data available</div>;
  return (
    <>
      <div>
        <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
          <h4 className="font-medium text-md">
            {data.length} {data.length > 1 ? "Products" : "Product"} found
          </h4>
          <div className="flex gap-x-2">
            {/* <button
              className={setActiveStyles("grid")}
              onClick={() => setLayout("grid")}
            >
              <BsFillGridFill />
            </button>
            <button
              className={setActiveStyles("list")}
              onClick={() => setLayout("list")}
            >
              <BsList />
            </button> */}
          </div>
        </div>
        <div className="pt-12 grid gap-4 md:grid-cols-5 lg:grid-cols-8">
          {data.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ProductsContainer;
