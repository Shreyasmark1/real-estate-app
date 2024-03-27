import searchBackground from "@/assets/search-background.jpg"
import { BedDoubleIcon, HeartIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";
import { RulerSquareIcon } from "@radix-ui/react-icons";
import { Card, CardContent } from "./ui/card";

const ProjectListCard = () => {




    return (
        <Card className="h-[250px] md:h-[150px] rounded-3xl">
            <CardContent className="flex flex-col sm:flex-row p-2">
                <Link to={"/project"} className="basis-2/6 relative cursor-pointer">
                    <img src={searchBackground} className="h-[150px] w-full md:h-full object-cover rounded-3xl" />
                    <div className="absolute top-2 left-2">
                        <Badge variant="outline" className="text-white bg-green-400 border-green-500">New</Badge>
                    </div>
                </Link>
                <div className="flex w-full flex-col-reverse md:flex-row">
                    <div className="basis-3/6 my-4">
                        <Link to={"/project"}> 3 room, modern apartment</Link>
                        <p> Suratkal </p>
                        <br />
                        <Badge variant="outline" className="hidden md:block gap-1.5 rounded-lg bg-slate-50">
                            <Badge variant="outline" className="border-slate-50 h-8">
                                <BedDoubleIcon className="mr-2" size={16} /> 2
                            </Badge>
                            <Badge variant="outline" className="border-slate-50">
                                <RulerSquareIcon className="mr-2" /> 64 ft<sup>2</sup>
                            </Badge>
                        </Badge>
                    </div>
                    <div className="basis-1/6 flex flex-col justify-between my-6 items-center">
                        <div className="text-lg"> ₹30,00,000</div>
                        <HeartIcon fill="red" stroke="red" />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default ProjectListCard;