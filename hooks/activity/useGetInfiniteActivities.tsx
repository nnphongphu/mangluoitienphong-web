import { getActivities } from "../../utils/api";
import toast from "react-hot-toast";
import { useInfiniteQuery } from "react-query";

export const useGetInfiniteActivities = (RTimestamp?: string) => {
  return useInfiniteQuery(
    ["activities", "infinite", RTimestamp],
    ({ pageParam = undefined }: any) => getActivities(pageParam),
    {
      onError: (error) => {
        toast.error("Lỗi không thể tải bài viết, vui lòng thử lại");
      },
      keepPreviousData: true,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length < 8) return false;
        return lastPage[lastPage.length - 1]?.createdAt;
      },
    }
  );
};

export default useGetInfiniteActivities;
