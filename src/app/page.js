
import DishGrid from "@/components/dish-grid";
import Hero from "@/components/hero";
import Menubar from "@/components/menu-bar";
import PopularRestaurantSection from "@/components/popular-restaurant-section";



export default function Home() {
  return (
   <>
    <div className="bg-white w-full min-h-screen flex flex-col items-center">
      <Hero/>
      <Menubar/>
      <PopularRestaurantSection/>
      <DishGrid/>
    </div>
   
   </>
  );
}
