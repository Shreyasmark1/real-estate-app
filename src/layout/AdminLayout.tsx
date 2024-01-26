
import user from "@/assets/user.jpg"
import ScrollToTop from "@/components/ScrollToTop";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { PageContextType } from "@/lib/hooks/usePageName";
import { useAuth } from "@/lib/hooks/useAuth";
import { getDrawerNavigation } from "@/feature/route/DrawerNavigation";
import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const AdminLayout = () => {
    const [pageName, setPageName] = useState("Dashboard");

    const { authority } = useAuth()

    let navigate = useNavigate()

    return (
        <div>
            <ScrollToTop />
            <nav className="flex items-center justify-between py-2 md:py-4 px-4 md:px-8 sticky top-0 bg-white shadow-sm z-10">
                <div className="text-lg md:text-2xl font-semibold">{pageName}</div>
                <div className="flex items-center space-x-4">
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
            <Outlet context={{ pageName: pageName, setPageName: setPageName } satisfies PageContextType} />
        </div>
    )
}

export default AdminLayout;