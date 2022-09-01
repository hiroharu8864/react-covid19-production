import { FC, memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NotFound } from "../components/pages/NotFound";

export const Router: FC = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
});
