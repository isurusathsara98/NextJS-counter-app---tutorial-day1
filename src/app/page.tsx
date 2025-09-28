import CounterAction from "./CounterAction";
import GPTCounter from "./GPTCounter";


export default function Home() {

  return (
    <div className="h-screen w-screen bg-slate-100">
      <CounterAction />
      <GPTCounter />
    </div>
  );
}
