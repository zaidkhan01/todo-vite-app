import jwt_decode from "jwt-decode";

interface UserInfo {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

export const getLoginInfo = (): UserInfo | null => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const userInfo: UserInfo = jwt_decode(token);
      return userInfo;
    } catch (error) {
      console.error("Invalid token:", error);
      return null;
    }
  }
  return null;
};
