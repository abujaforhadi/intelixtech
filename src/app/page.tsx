import HomePage from "@/components/Home/HomePage";
import HeroSection from "@/components/Home/HeroSection";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home | Intelix Tech Limited",
};
export default function Home() {
  return (
    <div>
    <HeroSection/>
    <HomePage />


    </div>

  );
}
