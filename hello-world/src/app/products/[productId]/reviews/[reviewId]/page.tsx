import { notFound, redirect } from "next/navigation";

async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 100) {
    redirect("/products");
    //  notFound();
  }
  return (
    <div>
      <h2>
        Review {reviewId} Product {productId}
      </h2>
    </div>
  );
}

export default ProductReview;
