"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";

const Filters = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data, isPending } = useQuery({
    queryKey: ["products", searchValue],
    queryFn: () => getAllProducts(searchValue),
  });
  if (isPending) {
    return <span className="loading"></span>;
  }
  return (
    <div>
      <form className="max-w-lg mb-12">
        <div className="join w-full">
          <input
            type="text"
            placeholder="Introduzir nome do produto"
            className="input input-bordered join-item w-full"
            name="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            required
          />
          <button
            className="btn btn-primary join-item"
            type="button"
            disabled={isPending}
            onClick={() => setSearchValue("")}
          >
            {isPending ? "aguarde" : "reset"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filters;
