import type { User } from "../models/User";

export function getUser(): User | null {
  const results = JSON.parse(localStorage.getItem("user") || "");
  if (!results) return null;
  return results;
}

export function setUser(user: User) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function removeUser() {
  localStorage.removeItem("user");
}
