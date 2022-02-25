import Posts from "../../components/Posts";
import { useGetFeaturedPostsByCategory } from "../../hooks/post/useGetFeaturedPostByCategory";
import { useGetPostsByCategory } from "../../hooks/post/useGetPostsByCategory";

export const Opinion = () => {
  return (
    <Posts
      title="Quan điểm"
      useGetFeaturedPosts={useGetFeaturedPostsByCategory("Quan điểm")}
      useGetPosts={useGetPostsByCategory("Quan điểm")}
    />
  );
};

export default Opinion;
