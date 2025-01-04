import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />} >
          <Route exact path="/" element={<Home />} />
        </Route>
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;