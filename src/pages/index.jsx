import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home";
import NotFound from "./NotFound";

export function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}