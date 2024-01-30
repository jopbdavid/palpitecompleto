import React from "react";
import ProductsContainer from "@/components/ProductsContainer";
import { getAllProducts } from "@/utils/actions";
import Pagination from "@/components/Pagination";

const Products = () => {
  return (
    <>
      <ProductsContainer />
      <Pagination />
    </>
  );
};

export default Products;
