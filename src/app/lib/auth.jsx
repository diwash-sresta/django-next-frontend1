import { cookies } from "next/headers";

const TOKEN_AGE = 3600;
const TOKEN_NAME = "auth-token";
const TOKEN_REFRESH_NAME = "auth-refresh-token";

// ✅ Always access cookies inside a function
export function getToken() {
  const cookieStore = cookies(); // called inside the function
  return cookieStore.get(TOKEN_NAME)?.value || null;
}

export function getRefreshToken() {
  const cookieStore = cookies();
  return cookieStore.get(TOKEN_REFRESH_NAME)?.value || null;
}

export function setToken(authToken) {
  const cookieStore = cookies();
  cookieStore.set({
    name: TOKEN_NAME,
    value: authToken,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
    maxAge: TOKEN_AGE,
  });
}

export function setRefreshToken(authRefreshToken) {
  const cookieStore = cookies();
  cookieStore.set({
    name: TOKEN_REFRESH_NAME,
    value: authRefreshToken,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
    maxAge: TOKEN_AGE,
  });
}

export function deleteTokens() {
  const cookieStore = cookies();
  cookieStore.delete(TOKEN_NAME);
  cookieStore.delete(TOKEN_REFRESH_NAME);
}
