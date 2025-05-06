"use client";

import { useRouter } from "next/navigation";

export default function OrderProductPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
    // router.replace("/");
    // route.forward();
    //router.back()
  };

  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
