import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import user from "@/assets/user.jpg"
import { PlusIcon, SearchIcon } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const UserLayout = () => {

    return (
        <>
            <nav className="flex items-center justify-between my-5 mx-8 bg-white">
                <div className="text-lg md:text-2xl font-semibold text-black">Dashboard</div>
                <div className="flex items-center space-x-4">
                    <Link to={"/project"}>
                        <Avatar className="overflow-hidden text-gray-500 rounded-full">
                            <SearchIcon className="w-7 h-7 mt-1 mx-2" />
                        </Avatar>
                    </Link>
                    <Link to={"/add-project"}>
                        <Button variant="outline" className="overflow-hidden text-gray-500">
                            <PlusIcon className="w-7 h-7" />
                            New project
                        </Button>
                    </Link>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Avatar className="w-9 h-9 overflow-hidden text-gray-500 rounded-full cursor-pointer">
                                <AvatarImage src={user} alt="@shadcn" />
                                <AvatarFallback> <AvatarImage src={user} alt="@shadcn" /> </AvatarFallback>
                            </Avatar>
                        </SheetTrigger>
                        <SheetContent className="flex flex-col h-full md:w-[300px] items-center">
                            <SheetHeader className="flex">
                                <Avatar className="w-[110px] h-[110px] overflow-hidden text-gray-500 rounded-full">
                                    <AvatarImage src={user} alt="@shadcn" />
                                    <AvatarFallback> <AvatarImage src={user} alt="@shadcn" /> </AvatarFallback>
                                </Avatar>
                                <Button variant="ghost" type="submit">Edit profile</Button>
                            </SheetHeader>
                            <Separator className="mt-2" />
                            <ul className="w-full">
                                <Button className="text-lg w-full" variant="ghost"> Dashboard </Button> <br />
                                <Button className="text-lg w-full" variant="ghost"> Explore </Button> <br />
                                <Button className="text-lg w-full" variant="ghost"> My Projects </Button> <br />
                                <Button className="text-lg w-full" variant="ghost"> Subscription </Button> <br />
                                <Button className="text-lg w-full" variant="ghost"> About </Button> <br />
                            </ul>

                            <div className="flex-grow"></div>
                            <SheetFooter className="self-bottom w-full">
                                <SheetClose asChild>
                                    <Button variant="outline" className="w-full" type="submit">
                                        Logout
                                    </Button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default UserLayout;