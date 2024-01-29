"use client";
import React, { useState } from "react";
import ProductsContainer from "@/components/ProductsContainer";
import { getAllProducts } from "@/utils/actions";
import Pagination from "@/components/Pagination";
import {
  HydrationBoundary,
  dehydrate,
  QueryClient,
} from "@tanstack/react-query";

const Products = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["products", ""],
    queryFn: () => getAllProducts(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <h1>Products</h1>
      <ProductsContainer products={data} />
      <Pagination />
    </HydrationBoundary>
  );
};

export default Products;
