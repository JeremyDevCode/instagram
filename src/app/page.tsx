import { Details } from "@/components/Details";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Navbar } from "@/components/Navbar";
import { Navigate } from "@/components/Navigate";
import { Stats } from "@/components/Stats";

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center">
      <main className="flex min-h-screen w-[454px] flex-col items-center justify-center bg-[#ffffff]">
        <Navbar />
        <Header />
        <Details />
        <Stats />
        <Navigate />
        <Main />
        <Footer />
      </main>
    </div>
  );
}
