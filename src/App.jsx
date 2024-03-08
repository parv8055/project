import { lazy } from "react";
const Form = lazy(() => import("./components/Form"));
const Layout = lazy(() => import("./Layout"));
const App = () => {
  return (
    <Layout>
      <Form />
    </Layout>
  );
};

export default App;
