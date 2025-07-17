import HomePage from "@/components/Home/HomePage";
import HeroSection from "@/components/Home/HeroSection";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Intelix Tech Limited | Home",
};
export default function Home() {
  return (
    <div>
    <HeroSection/>
    <HomePage />


    </div>

  );
}
