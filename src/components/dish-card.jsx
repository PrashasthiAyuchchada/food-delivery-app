'use client';

export default function DishCard({ name = "Dish Name", price = "Rs 450" }) {
  return (
    <div className="w-[300px] h-[130px] border border-black rounded overflow-hidden flex bg-white">
      {/* Left: Dish image placeholder */}
      <div className="w-[100px] h-full bg-slate-500"></div>

      {/* Right: Dish info */}
      <div className="flex flex-col justify-center px-2 flex-grow bg-gray-100">
        <span className="text-sm font-medium text-black">{name}</span>
        <span className="text-xs text-gray-600">{price}</span>
      </div>
    </div>
  );
}