import { lazy } from "react";
const HomeForm = lazy(() => import("./components/HomeForm"));
const Layout = lazy(() => import("./Layout"));
const App = () => {
  return (
    <Layout>
      <HomeForm />
    </Layout>
  );
};

export default App;
