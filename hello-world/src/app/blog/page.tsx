import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog", //Overrides the parent segment title
  },
  description: "Best coder/developer in the world",
};

const Blog = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Intentional delay");
    }, 2000);
  });

  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
};

export default Blog;
