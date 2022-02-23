import { getFeaturedActivities } from "../../utils/api";
import { useQuery } from "react-query";
import toast from "react-hot-toast";

export const useGetFeaturedActivities = () => {
  return useQuery(["featured activities"], getFeaturedActivities, {
    onError: (error) => {
      toast.error("Không tải được bài viết. Vui lòng thử lại");
    },
  });
};

export default useGetFeaturedActivities;
