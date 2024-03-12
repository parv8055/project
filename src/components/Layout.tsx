import { ReactNode, lazy } from "react";
import Header from "./Header";
import { Sidebar } from "./Sidebar";


const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex flex-col min-h-screen font-display">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="mx-auto md:w-10/12 p-2 md:p-8">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
