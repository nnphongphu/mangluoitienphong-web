import Posts from "../../components/Posts";
import { useGetFeaturedPostsByCategory } from "../../hooks/post/useGetFeaturedPostByCategory";
import { useGetPostsByCategory } from "../../hooks/post/useGetPostsByCategory";

export const News = () => {
  return (
    <Posts
      title="Tin tức"
      useGetFeaturedPosts={useGetFeaturedPostsByCategory("Tin tức")}
      useGetPosts={useGetPostsByCategory("Tin tức")}
    />
  );
};

export default News;
