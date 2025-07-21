'use client';

export default function RestaurantCard(props){



    return(
        <div className=" w-[150px] h-[100px] m-2 ">
            <div className=" w-full h-[60px] bg-gray-400 rounded-sm ">

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