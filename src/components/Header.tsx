import { useMyContext } from "../core/Hooks/useMyContext";

function Header() {
  const { count, increment, decrement } = useMyContext();

  return (
    <div className="flex flex-col gap-2">
      <span className="rounded-md border border-gray-400 p-2">{count}</span>
      <button
        className="rounded-xl border  border-gray-400 bg-slate-50 p-2"
        onClick={increment}
      >
        Increase +
      </button>
      <button
        className="rounded-xl border  border-gray-400 bg-slate-50 p-2"
        onClick={decrement}
      >
        Decrease -
      </button>
    </div>
  );
}

export default Header;
