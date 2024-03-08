import { lazy } from "react";
const Sidebar = lazy(() => import("./components/Sidebar"));
const Header = lazy(() => import("./components/Header"));

const Layout = ({ children }) => {
  return (
    <main className="flex flex-col min-h-screen bg-background font-display">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="mx-auto w-11/12 md:w-9s/12 p-4 md:p-8">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
