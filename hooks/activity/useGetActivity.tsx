import { getActivity } from "../../utils/api";
import { useQuery } from "react-query";
import toast from "react-hot-toast";

export const useGetActivity = (titleKebabCase: string) => {
  return useQuery(
    ["activities", titleKebabCase],
    () => getActivity(titleKebabCase),
    {
      onError: (error) => {
        toast.error("Không tải được bài viết. Vui lòng thử lại");
      },
    }
  );
};

export default useGetActivity;
