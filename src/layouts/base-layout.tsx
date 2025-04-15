import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export function BaseLayout() {
  return (
    <div className="p-3 max-w-300 mx-auto">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <Header />
      <Outlet />
    </div>
  );
}
