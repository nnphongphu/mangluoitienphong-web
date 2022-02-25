import { useInfiniteQuery } from "react-query";
import toast from "react-hot-toast";
import { getActivitiesByCategory } from "../../utils/api";

export const useGetActivitiesByCategory = (
  category: string,
  RTimestamp?: string
) => {
  return useInfiniteQuery(
    ["activities", category, RTimestamp],
    ({ pageParam = undefined }: any) =>
      getActivitiesByCategory(category, pageParam),
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

export default useGetActivitiesByCategory;
