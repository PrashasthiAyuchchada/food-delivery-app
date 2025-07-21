'use client';

import RestaurantCard from "./restaurant-card";

export default function PopularRestaurantSection(){



  return(
    <div className="w-full h-[130px] flex flex-col items-center justify-center m-2">
            <div className="w-[1000px] h-[30px] flex  justify-between "   >
              <span> Popular Restaurants</span>
              <span>see all</span>
            </div>
            <div className=" w-[1000px] h-[120px] flex  justify-between">
              <RestaurantCard name="La Piazza" style="Italian" />
              <RestaurantCard name="El Toro" style="Mexican" />
              <RestaurantCard name="Sakura Grill" style="Japanese" />
              <RestaurantCard name="Curry House" style="Indian" />
            </div>
          </div>



  )




}