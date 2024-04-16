import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import user from "@/assets/user.jpg"
import { PlusIcon, SearchIcon } from "lucide-react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { PageContextType } from "@/lib/hooks/usePageName";
import { getDrawerNavigation } from "@/routing/DrawerNavigation";
import ScrollToTop from "@/components/ScrollToTop";
import { useAuth } from "@/lib/hooks/useAuth";

const UserLayout = () => {

    const [pageName, setPageName] = useState("Dashboard");

    const { authority } = useAuth()

    let navigate = useNavigate()

    return (
        <div>
            <ScrollToTop />
            <nav className="flex items-center justify-between py-2 md:py-4 px-4 md:px-8 sticky top-0 bg-white shadow-sm z-10">
                <div className="text-lg md:text-2xl font-semibold">{pageName}</div>
                <div className="flex items-center space-x-4">
                    <Link to={"/search"}>
                        <Avatar className="overflow-hidden text-gray-500 rounded-full">
                            <SearchIcon className="w-7 h-7 mt-1 mx-2" />
                        </Avatar>
                    </Link>
                    <Link to={"/add-property"}>
                        <Button variant="outline" className="overflow-hidden text-gray-500">
                            <PlusIcon className="w-7 h-7" />
                            <span className="hidden md:block">New Property</span>
                        </Button>
                    </Link>
                    <div className="font-semibold">John Doe</div>
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
                            <Separator />
                            <ul className="w-full">
                                {
                                    getDrawerNavigation(authority).map((drawerNav) => (
                                        <SheetClose asChild className="w-full" key={drawerNav.locationName}>
                                            <Link to={drawerNav.url}>
                                                <Button className="text-lg w-full" variant="ghost"> {drawerNav.locationName} </Button> <br />
                                            </Link>
                                        </SheetClose>
                                    ))
                                }
                            </ul>
                            <div className="flex-grow"></div>
                            <SheetFooter className="self-bottom w-full">
                                <SheetClose asChild>
                                    <Button onClick={() => navigate("/logout")} variant="outline" className="w-full" type="submit">
                                        Logout
                                    </Button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
            <div className="h-full">
                <div className="py-2 md:py-5 px-4 md:px-8 bg-gray-100 flex-1">
                    <Outlet context={{ pageName: pageName, setPageName: setPageName } satisfies PageContextType} />
                </div>
            </div>
        </div>
    );
}

export default UserLayout;