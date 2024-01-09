import searchBackground from "@/assets/search-background.jpg"
import { BedDoubleIcon, HeartIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";
import { RulerSquareIcon } from "@radix-ui/react-icons";

const ProjectListCard = () => {
    return (
        <div className="w-full bg-white rounded-3xl flex p-3 mt-2 h-[150px] ">
            <Link to={"/project"} className="basis-2/6 relative cursor-pointer">
                <img src={searchBackground} className="h-full object-cover rounded-3xl" />
                <div className="absolute top-2 left-2">
                    <Badge variant="outline" className="text-white bg-green-400 border-green-500">New</Badge>
                </div>
            </Link>
            <div className="basis-3/6 my-4">
                <Link to={"/project"}> 3 room, modern apartment</Link>
                <div> Suratkal </div>
                <br />
                <div className="flex gap-1.5">
                    <Badge variant="outline" className="border-white bg-blue-300 h-8">
                        <BedDoubleIcon className="mr-2" size={16} /> 2
                    </Badge>
                    <Badge variant="outline" className="border-white bg-blue-300 ">
                        <RulerSquareIcon className="mr-2" /> 64 m<sup>2</sup>
                    </Badge>
                </div>
            </div>
            <div className="basis-1/6 flex flex-col justify-between my-6 items-center">
                <div className="text-lg"> ₹30,00,000</div>
                <div>
                    <HeartIcon fill="red" stroke="red" />
                </div>
            </div>
        </div>
    );
}

export default ProjectListCard;