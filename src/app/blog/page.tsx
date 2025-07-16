
import { Metadata } from "next";
import Bloges from "@/components/Blog/Blogpage";
export const metadata: Metadata = {
  title: "Blog",
};

const page = () => {
  return (
    <div>
    <Bloges/>
      
    </div>
  );
};

export default page;