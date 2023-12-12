import React, { ReactNode } from "react";
import SideNav from "./components/sidenav";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="bg-zinc-100 min-h-screen flex flex-col items-center">
        <div className="flex flex-1 flex-row justify-end m-20">
          <div className="hidden lg:block">
            <SideNav />
          </div>
          <div className="lg:w-[40vw] m-2 flex-1 px-6 flex flex-col">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
