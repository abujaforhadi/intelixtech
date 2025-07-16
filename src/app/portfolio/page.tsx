import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
};
import Portfolios from "@/components/Portfolios/PortfolioPages";

const page = () => {
  return (
    <div>
      <Portfolios />
    </div>
  );
};

export default page;
