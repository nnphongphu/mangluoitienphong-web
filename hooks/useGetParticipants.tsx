import { useQuery } from "react-query";
import toast from "react-hot-toast";
import { getParticipants } from "../utils/api";

export const useGetParticipants = () => {
  return useQuery("participant", getParticipants, {
    onError: (error) => {
      toast.error("Không tải được dữ liệu. Vui lòng thử lại");
    },
  });
};

export default useGetParticipants;
