import { notFound, redirect } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error loading review");
  }
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
