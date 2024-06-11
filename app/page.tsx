import '@/style/main.css'
import TypingEffect from "@/components/TypingEffect";
import { phrases } from "@/data/phrases";
import About from "@/components/About";

export default function Home() {

  return (
    <main>
      <TypingEffect phrases={phrases}/>
      <About/>
    </main>
  );
}
