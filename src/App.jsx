import TopPart from "./TopPart";
import BottomPart from "./BottomPart";

export default function App() {
  return (
    <div>
      <TopPart></TopPart>

      <div className="border m-4 gap-5 my-5 flex flex-col md:flex-row justify-between align-start content-start">
        <div className="p-sm flex-1 bg-main">A</div>
        <div className="p-lg my-lg flex-1 bg-green-500 hover:bg-red-600 border-8 border-main">B</div>
        <div className="p-xl flex-1 bg-yellow-500 text-main hover:text-purple-700">C</div>
      </div>
      <BottomPart></BottomPart>
    </div>
  );
}
