import { getActivities } from "../../utils/api";
import { useQuery } from "react-query";
import toast from "react-hot-toast";

export const useGetActivities = () => {
  return useQuery(["activities"], getActivities, {
    onError: (error) => {
      toast.error("Không tải được bài viết. Vui lòng thử lại");
    },
  });
};

export default useGetActivities;
