"use client";

import { useRouter } from "next/navigation";
import { startTransition, useReducer } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div>
      <button onClick={reload}> Tr again</button>
      <p>Error in reviewId {error.message}</p>
    </div>
  );
}
