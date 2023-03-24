import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import OTP from "./Component/OTP";
import OTPConform from "./Component/OTPConform";
import SignUp from "./Component/SignUp";
const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/OTPConform" element={<OTPConform />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
