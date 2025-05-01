"use client";
import { usePathname } from "next/navigation";
import React from "react";

function NotFound() {
  const pathName = usePathname();
  const productId = pathName.split("/")[2];
  const reviewId = pathName.split("/")[4];
  return (
    <div>
      <h1>
        Review Not Found {productId} {reviewId}
      </h1>
      <h2>Could not find requested resource</h2>
    </div>
  );
}

export default NotFound;
