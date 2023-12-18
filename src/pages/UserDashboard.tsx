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

//dashboard

                  <SheetDescription>
                    <div className="">


                      <ul className="text-3xl text-grey-800 font-[Poppins] mx-15 my-10 md:my-0  font-bold top-100 left-100 md:flex py-4  mr-100 pt-2">
                        MENU
                      </ul>

                    </div>




                    <div>
                      <ul className="md:flex md:items-center md:my-0 md:ml-70 text-xl md:my-5 my-30">
                        <li className="text-black-400 md:static ">Add new Project</li>
                      </ul>

                    </div>

                    <div>
                      <ul className="md:flex md:items-center md:my-0 md:ml-70 text-xl md:my-5 my-30">
                        <li className="text-black-400 md:static ">My projects</li>
                      </ul>

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

