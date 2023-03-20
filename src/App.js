import LoginPage from "./Components/pages/login/LoginPage";
import { Route, Routes } from "react-router-dom";
import OrderPage from "./Components/pages/order/OrderPage";
import ErrorPage from "./Components/pages/error/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/order/:username" element={<OrderPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
