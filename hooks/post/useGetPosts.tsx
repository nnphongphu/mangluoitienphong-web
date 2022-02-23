import { useInfiniteQuery } from "react-query";
import toast from "react-hot-toast";
import { getPosts } from "../../utils/api";

export const useGetPosts = (RTimestamp?: string) => {
  return useInfiniteQuery(
    ["posts", RTimestamp],
    ({ pageParam = undefined }: any) => getPosts(pageParam),
    {
      onError: (error) => {
        if ((error as any).response.data.message)
          toast.error((error as any).response.data.message);
        else toast.error("Lỗi không thể tải bài viết, vui lòng thử lại");
      },
      keepPreviousData: true,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length < 8) return false;
        return lastPage[lastPage.length - 1]?.createdAt;
      },
    }
  );
};

export default useGetPosts;
