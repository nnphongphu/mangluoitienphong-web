import { useQuery } from "react-query";
import toast from "react-hot-toast";
import { getCategories } from "../utils/api";

export const useGetCategories = () => {
  return useQuery("categories", getCategories, {
    onError: (error) => {
      toast.error("Không tải được dữ liệu. Vui lòng thử lại");
    },
  });
};

export default useGetCategories;
