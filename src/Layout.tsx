import { ReactNode, lazy } from "react";
import Header from "./components/Header";
import { Sidebar } from "./components/Sidebar";


const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex flex-col min-h-screen font-display">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="mx-auto w-11/12 md:w-10/12 p-4 md:p-8">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
