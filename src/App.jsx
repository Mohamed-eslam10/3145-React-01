import Counter from "./components/Counter";
import RegisterForm from "./components/RegisterForm";

export default function App() {
  return (
    <div className="p-5 h-screen flex flex-col items-center justify-center">
      <Counter />
      <RegisterForm />
    </div>
  );
}
