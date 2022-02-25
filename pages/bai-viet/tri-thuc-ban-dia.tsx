import Posts from "../../components/Posts";
import { useGetFeaturedPostsByCategory } from "../../hooks/post/useGetFeaturedPostByCategory";
import { useGetPostsByCategory } from "../../hooks/post/useGetPostsByCategory";

export const Library = () => {
  return (
    <Posts
      title="Tri thức bản địa"
      useGetFeaturedPosts={useGetFeaturedPostsByCategory("Tri thức bản địa")}
      useGetPosts={useGetPostsByCategory("Tri thức bản địa")}
    />
  );
};

export default Library;
