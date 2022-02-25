import { useInfiniteQuery } from "react-query";
import toast from "react-hot-toast";
import { getPostsByCategory } from "../../utils/api";

export const useGetPostsByCategory = (
  category: string,
  RTimestamp?: string
) => {
  return useInfiniteQuery(
    ["posts", category, RTimestamp],
    ({ pageParam = undefined }: any) => getPostsByCategory(category, pageParam),
    {
      onError: (error) => {
        toast.error("Lỗi không thể tải dữ liệu, vui lòng thử lại");
      },
      keepPreviousData: true,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length < 8) return false;
        return lastPage[lastPage.length - 1]?.createdAt;
      },
    }
  );
};

export default useGetPostsByCategory;
