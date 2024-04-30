import Header from "./components/Header";
import { MyContextProvider } from "./core/Contexts/MyContext";

function App() {
  return (
    <MyContextProvider>
      <div className="flex h-screen w-full flex-col items-center justify-center bg-slate-50">
        <span>react-typescript</span>
        <Header />
      </div>
    </MyContextProvider>
  );
}

export default App;
