import { SignInResponseType, SignInResquestType } from "@/types";
import axios from "@/utils/axios";
import { AxiosError } from "axios";

const signin = async (
  body: SignInResquestType,
  callBack: (response: SignInResponseType) => void
): Promise<void> => {
  try {
    const response = await axios.post("/auth/login", body);
    const { status, profile, accessToken } = response.data;
    // Set auth access token.
    localStorage.setItem("accessToken", accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    const extractedResponse: SignInResponseType = {
      username: profile.username,
      phoneNumber: profile.phoneNumber,
    };
    callBack(extractedResponse);
  } catch (e) {
    // console.log("api signin error : " + e);
    if (e instanceof AxiosError) {
      // console.log(e.response?.data);
      const error = e.response?.data.message;
      throw Error(error);
    }
  }
};
// TODO: Refresh token

export { signin };
