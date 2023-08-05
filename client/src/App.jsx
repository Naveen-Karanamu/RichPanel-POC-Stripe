// Pages
import { Route, Redirect } from "react-router-dom";
import SignUp from "./Components/pages/SignUp";
import SignIn from "./Components/pages/SignIn";
import Plans from "./Components/pages/Plans";
import Payment from "./Components/pages/Payment";

function App() {
  return (
    <>
    <Route path="/" exact>
        <Redirect to="/signup" />
      </Route>
    <Route path="/signup" exact component={SignUp} />
    <Route path="/signin" exact component={SignIn} />
    <Route path="/plans" exact component={Plans} />
    <Route path="/payment" exact component={Payment} />
    </>
  );
}

export default App;
