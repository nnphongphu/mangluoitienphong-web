import Posts from "../../components/Posts";
import { useGetFeaturedPostsByCategory } from "../../hooks/post/useGetFeaturedPostByCategory";
import { useGetPostsByCategory } from "../../hooks/post/useGetPostsByCategory";

export const Research = () => {
  return (
    <Posts
      title="Nghiên cứu"
      useGetFeaturedPosts={useGetFeaturedPostsByCategory("Nghiên cứu")}
      useGetPosts={useGetPostsByCategory("Nghiên cứu")}
    />
  );
};

export default Research;
