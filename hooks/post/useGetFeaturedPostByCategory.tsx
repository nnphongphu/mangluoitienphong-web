import { useQuery } from "react-query";
import toast from "react-hot-toast";
import { getFeaturedPostsByCategory } from "../../utils/api";

export const useGetFeaturedPostsByCategory = (category: string) => {
  return useQuery(
    ["featured posts", category],
    () => getFeaturedPostsByCategory(category),
    {
      onError: (error) => {
        toast.error("Lỗi không thể tải dữ liệu, vui lòng thử lại");
      },
    }
  );
};

export default getFeaturedPostsByCategory;
