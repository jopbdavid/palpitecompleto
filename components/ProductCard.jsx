import React from "react";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const { id, sku, image, name, category, price } = product;
  return (
    <Link
      key={id}
      href={`/product/${id}`}
      className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
    >
      <figure className="px-2 pt-2">
        <img
          src={image}
          alt={name}
          className="rounded-xl w-full object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <p className="text-small">{sku}</p>
        <h2 className="card-title capitalize tracking-wider text-sm">{name}</h2>
        <span className="text-secondary">{price} €</span>
      </div>
    </Link>
  );
};

export default ProductCard;
