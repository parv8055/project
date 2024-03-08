import { lazy } from "react";
const Sidebar = lazy(() => import("./components/Sidebar"));
const Header = lazy(() => import("./components/Header"));

const Layout = ({ children }) => {
  return (
    <main className="relative flex flex-col min-h-screen bg-background font-display">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="w-full bg-base">
          <div className="w-11/12 md:w-10/12 mx-auto">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
