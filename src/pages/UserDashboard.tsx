// import {
//     Sheet,
//     SheetContent,
//     SheetDescription,
//     SheetHeader,
//     SheetTrigger,
//   } from "@/components/ui/sheet"

//   import {
//     Avatar,
//     AvatarFallback,
//     AvatarImage,
//   } from "@/components/ui/avatar"
  


// const UserDashboard = () => {
//     return ( 
//         <>
//       <nav className="p-5 bg-white shadow bg-cyan-400 md:flex md:items-center md:justify-between">
//       <div>
//         <span className="text-2xl font-[Poppins] curser-pointer"></span>
     
//         </div>
//       <ul>
//         <li>
//         {/* <Avatar>
//       <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
//       <AvatarFallback>CN</AvatarFallback>
      
//     </Avatar> */}
//         <Sheet>
//   <SheetTrigger>
//   <Avatar>
//       <AvatarImage src="https://images.alphacoders.com/845/thumbbig-84573.webp" alt="@shadcn" />
//       <AvatarFallback>CN</AvatarFallback>
//       </Avatar> 
//   </SheetTrigger>
//   <SheetContent>
//     <SheetHeader>
//       {/* <SheetTitle>
//         <div className="bg-white border rounded-lg overflow-hidden">
//             <img className="h-64 w-full object-cover"  src="https://images6.alphacoders.com/132/thumbbig-1328675.webp" alt=""></img>
//         </div>
       
//         </SheetTitle>
//       */}
      
// {/* //dashboard */}

//       <SheetDescription>
//       <div className="">

     
//         <ul className="text-3xl text-grey-800 font-[Poppins] mx-15 my-10 md:my-0  font-bold top-100 left-100 md:flex py-4  mr-100 pt-2">
//           MENU
//         </ul>
      
//       </div>
 

     

//       <div>
//       <ul className="md:flex md:items-center md:my-0 md:ml-70 text-xl md:my-5 my-30">
//           <li className="text-black-400 md:static ">Add new Project</li>
//         </ul>
       
//       </div>

//       <div>
//       <ul className="md:flex md:items-center md:my-0 md:ml-70 text-xl md:my-5 my-30">
//           <li className="text-black-400 md:static ">My projects</li>
//         </ul>
       
//       </div>
       
       
        
//       </SheetDescription>
    
     
//     </SheetHeader>
//   </SheetContent>
// </Sheet>
//         </li>
//       </ul>
//       </nav>
     
//         </>
//      );
// }
 
// export default UserDashboard

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import {
  Card}from "@/components/ui/card"
 

const MyProjectPage = () => {
  return ( 
      <>

<nav
  className="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
  <div className="flex w-full flex-wrap items-center justify-between px-3">
    <a
      className="ml-2 text-xl text-neutral-800 dark:text-neutral-200"
      href="#"
    >  My Projects</a>
    
     <div className="ml-5 flex w-[40%] items-center justify-between" >
      <input
        type="search"
        className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none motion-reduce:transition-none dark:border-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon2" />

      {/* <!--Search icon--> */}
      <span
        className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
        id="basic-addon2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5">
          <path
            fill-rule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clip-rule="evenodd" />
        </svg>
      </span>
    </div>
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  </div>
</nav>
<div className="grid grid-cols-10"> 
<Card className="w-[700px]  mx-1 my-5 bg-gray-400 rounded-xl">
<h1>sjhdjs</h1>
<h1>sjhdjs</h1>
<h1>sjhdjs</h1>
<h1>sjhdjs</h1>
<h1>sjhdjs</h1>
<h1>sjhdjs</h1>
<h1>sjhdjs</h1>
<h1>sjhdjs</h1>
<h1>sjhdjs</h1>
<h1>sjhdjs</h1>
<h1>sjhdjs</h1>
<h1>sjhdjs</h1>
<h1>sjhdjs</h1>
</Card>
</div>


      </>
   );
}

export default MyProjectPage;





