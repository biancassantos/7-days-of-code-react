import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import NotFound from "./NotFound";

export function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}