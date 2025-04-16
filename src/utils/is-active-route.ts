import { useLocation } from "react-router-dom";

export function isActiveRoute(expectedHash: string) {
  const { hash } = useLocation();
  if (expectedHash === "home") {
    return hash === "#home" || hash === "";
  }
  return hash.includes(expectedHash);
}
