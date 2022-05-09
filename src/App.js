import { BrowserRouter, Redirect } from "react-router-dom";
import { useGlobalState } from "./state";
import Routes from "./routes";
import Layout from "./views/layout";

import "./App.scss";

function App() {
  const [isUserLoggedin] = useGlobalState("isUserLoggedIn");

  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes />
          {isUserLoggedin ? <Redirect to="/" /> : <Redirect to="/login" />}
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
