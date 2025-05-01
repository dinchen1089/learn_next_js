import React from "react";

async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  return (
    <div>
      <h2>
        Review {reviewId} Product {productId}
      </h2>
    </div>
  );
}

export default ProductReview;
