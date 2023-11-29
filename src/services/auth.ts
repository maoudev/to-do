import * as jwt from "jsonwebtoken";
import { config } from "dotenv";
import type { Credentials, User } from "../types/api";
config();

const apiUrl = process.env.API_URL;

export async function UserLogin(data: Credentials) {
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

export async function UserRegister(data: User) {
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
  return jwt.decode(token) as jwt.JwtPayload;
}

export function isLoggedIn(token: string, key: string): boolean {
  jwt.verify(token, key, function (error, decode) {
    if (error) {
      return false;
    }

    const data = decode as jwt.JwtPayload;

    const exp = data.exp as number;
    const currentDate = Date.now() / 1000;

    if (exp < currentDate) {
      return false;
    }
  });

  return true;
}
