import { jwtDecode } from "jwt-decode";

type TJwtPayload = {
  userId: string;
  email: string;
  name: string;
  role: string;
  iat: number;
  exp: number;
};
export function verifyToken(token: string): TJwtPayload {
  const decoded: TJwtPayload = jwtDecode(token) as TJwtPayload;

  return decoded;
}
