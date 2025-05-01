import React from "react";

async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return (
    <div>
      <h2>Detail about product {productId}</h2>
    </div>
  );
}

export default ProductDetails;
