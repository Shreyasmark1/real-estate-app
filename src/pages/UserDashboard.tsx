import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const UserDashboard = () => {
  return (
    <>
      <nav className="p-5 bg-white shadow bg-cyan-400 md:flex md:items-center md:justify-between">
        <div>
          <span className="text-2xl font-[Poppins] curser-pointer"></span>

        </div>
        <ul>
          <li>
            {/* <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
      
    </Avatar> */}
            <Sheet>
              <SheetTrigger>
                <Avatar>
                  <AvatarImage src="https://images.alphacoders.com/845/thumbbig-84573.webp" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  {/* <SheetTitle>
        <div className="bg-white border rounded-lg overflow-hidden">
            <img className="h-64 w-full object-cover"  src="https://images6.alphacoders.com/132/thumbbig-1328675.webp" alt=""></img>
        </div>
       
        </SheetTitle>
      */}
                  <SheetDescription>
                    <div className="bg-white border rounded-lg overflow-hidden">
                      <img className=" bg-white border rounded-lg  min-h-screen   h-15 w-full object-cover" src="https://images6.alphacoders.com/132/thumbbig-1328675.webp" alt=""></img>
                    </div>
                  </SheetDescription>


                </SheetHeader>
              </SheetContent>
            </Sheet>
          </li>
        </ul>
      </nav>

    </>
  );
}

export default UserDashboard

