'use client';

export default function RestaurantCard(props){



    return(
        <div className=" w-[240px] h-[180px] m-0.5 ">
            <div className=" w-full h-[100px] bg-gray-400 rounded-md ">

            </div>
            <div>
                <span className="text-sm text-black font-semibold">
                    {props.name}
                </span>
            <br/>
                <span className="text-xs text-black font-light">
                    {props.style}
                </span>
            </div>

        </div>


    )
}