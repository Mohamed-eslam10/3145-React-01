import TopNav from "./layout/TopNav";
import { Routes, Route } from "react-router";
import Counter from "./pages/Counter";
import Counter2 from "./pages/Counter2";
import RegisterForm from "./pages/RegisterForm";
import P404 from "./pages/P404";

export default function App() {
  return (
    <div className="h-screen flex flex-col">
      <TopNav />

      <div className="h-full">
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/counter-2" element={<Counter2 />} />
          <Route path="/register" element={<RegisterForm/>} />
          <Route path="*" element={<P404/>} />
        </Routes>
      </div>
    </div>
  );
}
