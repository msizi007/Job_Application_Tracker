import type { User } from "../models/User";

export function getUser(): User {
  return JSON.parse(localStorage.getItem("user") || "{}");
}

export function setUser(user: User) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function removeUser() {
  localStorage.removeItem("user");
}
