import AskGPT from "./components/AskGPT";
import GPTResponse from "./components/GPTResponse";

export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-slate-950 p-4 gap-10 font-mono">
      <AskGPT />

      <GPTResponse />
    </main>
  );
}
