import searchBackground from "@/assets/search-background.jpg"
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { BedDoubleIcon, ExpandIcon, HeartIcon, MapPinIcon } from "lucide-react";

const ProjectListCard = () => {

    return (
        <Card className="md:h-full rounded-3xl md:1/3 transition-shadow duration-300 hover:shadow-lg">
            <CardContent className="md:flex md:gap-2 p-2 justify-between">
                <Link to={"/project"} className="relative cursor-pointer h-[150px] md:h-[200px] aspect-square w-full">
                    <img
                        src={searchBackground}
                        className="h-full object-cover rounded-2xl" />
                    <div className="absolute top-2 left-2">
                        <Badge variant="outline" className="text-white bg-green-400 border-green-500">New</Badge>
                    </div>
                    <div className="absolute top-2 right-2">
                        <HeartIcon fill="red" stroke="red" />
                    </div>
                </Link>
                <div className="flex flex-col gap-1 p-1">
                    <div>
                        <Link className="text-xl line-clamp-1 overflow-ellipsis overflow-hidden" to={"/project"}>
                            3 room, modern apartment Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Link>
                        <div className="text-lg font-semibold mt-2"> ₹30,00,000</div>
                        <div className="flex items-center my-2">
                            <MapPinIcon size={18} />
                            <p> Suratkal </p>
                        </div>
                        <p className="line-clamp-2 overflow-ellipsis overflow-hidden">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-start">
                        <Badge variant="outline" className="gap-1 rounded-lg bg-slate-50">
                            <Badge variant="outline" className="border-slate-50">
                                <BedDoubleIcon className="mr-2" size={16} /> 2
                            </Badge>
                            <Badge variant="outline" className="border-slate-50">
                                <ExpandIcon className="basis-1/6 mr-2" /> 64 ft<sup>2</sup>
                            </Badge>
                            <Badge variant="outline" className="border-slate-50">
                                <BedDoubleIcon className="mr-2" size={16} /> other
                            </Badge>
                            <Badge variant="outline" className="border-slate-50">
                                <BedDoubleIcon className="mr-2" size={16} /> other
                            </Badge>
                        </Badge>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default ProjectListCard;