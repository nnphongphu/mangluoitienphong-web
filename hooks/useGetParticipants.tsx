import { useQuery } from "react-query";
import toast from "react-hot-toast";
import { getParticipants } from "../utils/api";

export const useGetParticipants = (RTimestamp?: string) => {
  return useQuery("participant", getParticipants, {
    onError: (error) => {
      if ((error as any).response.data.message)
        toast.error((error as any).response.data.message);
      else toast.error("Lỗi bất thường. Vui lòng thử lại sau.");
    },
  });
};

export default useGetParticipants;
