import { getPost } from "../../utils/api";
import { useQuery } from "react-query";
import toast from "react-hot-toast";

export const useGetPost = (titleKebabCase: string) => {
  return useQuery(["posts", titleKebabCase], () => getPost(titleKebabCase), {
    onError: (error) => {
      toast.error("Không tải được bài viết. Vui lòng thử lại");
    },
  });
};

export default useGetPost;
