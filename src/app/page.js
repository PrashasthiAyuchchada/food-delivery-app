
import DishGrid from "@/components/dish-grid";
import Hero from "@/components/hero";
import Menubar from "@/components/menu-bar";
import PopularRestaurantSection from "@/components/popular-restaurant-section";
import RestaurantNearYou from "@/components/restaurant-near-you";
import Space1 from "@/components/space1";



export default function Home() {
  return (
   <>
    <div className="bg-white w-full min-h-screen flex flex-col items-center">
      <Hero/>
      <Menubar/>
      <PopularRestaurantSection/>
      <Space1/>
      <DishGrid/>
      <Space1/>
      <RestaurantNearYou/>
      <Space1/>
    </div>
   
   </>
  );
}
