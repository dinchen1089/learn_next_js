import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog", //Overrides the parent segment title
  },
  description: "Best coder/developer in the world",
};

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
};

export default Blog;
