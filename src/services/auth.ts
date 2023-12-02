import { decode, verify, type JwtPayload } from "jsonwebtoken";
import { config } from "dotenv";
import type { Credentials, User } from "../types/api";
config();

export async function UserLogin(data: Credentials, apiUrl: string) {
  const { email, password } = data;
  const response = await fetch(`${apiUrl}/authenticate`, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}

export async function UserRegister(data: User, apiUrl: string) {
  const response = await fetch(`${apiUrl}/user`, {
    method: "POST",
    body: JSON.stringify({
      name: data.name,
      last_name: data.lastName,
      email: data.email,
      password: data.password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}

export function decodeJwt(token: string) {
  return decode(token) as JwtPayload;
}

export function isLoggedIn(token: string, key: string): boolean {
  verify(token, key, (error, decode) => {
    if (error) {
      return false;
    }

    const data = decode as JwtPayload;

    const exp = data.exp as number;
    const currentDate = Date.now() / 1000;

    if (exp < currentDate) {
      return false;
    }
  });

  return true;
}
