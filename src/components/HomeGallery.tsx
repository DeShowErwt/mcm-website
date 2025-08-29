import type HomeModel from "../lib/models/HomeModel";
import HomeService from "../services/HomeService";

// Optional: adding showCount prop to the component
export default function HomeGallery() {
    const homes : HomeModel[] = HomeService.getHouses() 

    return (
        <div className="justify-center mx-32 space-x-4 grid grid-cols-4 gap-4">
            {homes.map((house, index) => {
                return (
                    <div key={index} className="overflow-hidden flex flex-col min-w-64 items-center justify-center bg-white rounded-lg">
                        <div 
                            // TODO: Look into getting the image dynamically
                            className="bg-[url(/placeholder.png))] bg-cover bg-center h-48 w-full rounded-t-lg"
                        ></div>
                        <div className="p-4">
                            <h2 className="text-xl font-bold">{house.name}</h2>
                            <p className="text-xl">{house.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}