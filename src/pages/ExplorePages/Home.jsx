import { Import } from "lucide-react";
import MultiHeroCarousel from "../../Components/MultiHeroCarousel";
import OffersComponent from "../../Components/OffersComponent";
import Quote from "../../Components/Quote";
import Programs from "../../Components/Programs";
export default function Home() {
  return (
    <div>
      <MultiHeroCarousel />
      <OffersComponent />
      <Quote />
      <Programs />
    </div>
  );
}
