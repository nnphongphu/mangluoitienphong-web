import { getUpdates } from "../utils/api";
import { useQuery } from "react-query";
import toast from "react-hot-toast";

export const useGetUpdates = () => {
  return useQuery(["posts", "activities", "updates"], getUpdates, {
    onError: (error) => {
      toast.error("Không tải được cập nhật. Vui lòng thử lại");
    },
  });
};

export default useGetUpdates;
