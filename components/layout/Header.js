// // this is landing page  responsive design  code

// import { Grid, Menu, MenuItem } from "@mui/material";
// import React, { useState } from "react";

// import Router from "next/router";
// import MenuIcon from "@mui/icons-material/Menu";

// import Account from "../Account";

// export default function Header({ color = false, ...props }) {
//   const [phoneMenuShow, setPhoneMenuShow] = useState(false);
//   const toggleDrawer = (show) => () => {
//     setPhoneMenuShow(show);
//   };
//   const navitem = [
//     { to: "/main", label: "GO TO MAIN APP" },
//     { to: "/whitepaper", label: "WHITE PAPER" },
//   ];
//   return (
//     <>
//       {phoneMenuShow == true ? (
//         <div className="  fixed top-0 w-full font-desc2">
//           <div className="  bg-[url('/images/main/mobileMenuBG.webp')] bg-no-repeat bg-cover h-screen w-full">
//             <div className="  flex flex-row justify-center py-4">
//               <div className=" fixed top-0 right-0 pr-4 py-4">
//                 <img
//                   src="/images/closeIcon.svg"
//                   className="h-5 hover:brightness-200"
//                   onClick={toggleDrawer(false)}
//                 ></img>
//               </div>
//             </div>
//             <div className="pt-24">
//               <div className="flex flex-col items-center text-center">
//                 <div className="text-3xl text-white">HOODYGANG</div>
//                 <img
//                   src="/images/main/mobileTitleBottom.png"
//                   className="mt-5 w-[240px]"
//                 />
//               </div>
//               <div className="   tracking-wider mt-12">
//                 <div className="  flex justify-center">
//                   <div
//                     onClick={() => {
//                       setPhoneMenuShow(!phoneMenuShow);
//                       Router.push("/main");
//                     }}
//                   >
//                     <div className="text-xl text-white py-8">
//                       GO TO MAIN APP
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex justify-center">
//                   <div
//                     onClick={() => {
//                       setPhoneMenuShow(!phoneMenuShow);
//                       Router.push("/whitepaper");
//                     }}
//                   >
//                     <div className="text-xl text-white py-4">WHITE PAPER</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <></>
//         </div>
//       ) : (
//         <div className=" border  mb-20  w-full bg-[#561515]  bg-opacity-95 z-50 p-12  md:bg-transparent tracking-wider font-desc2">
//           <Grid container className="border border-blue-500 m-6 flex justify-between  items-center w-full">
//             <Grid
//               item
//               lg={0}
//               md={0}
//               sm={2}
//               xs={2}
//               sx={{ display: { xs: "block", md: "none" } }}
//             >
//               <div
//                 className="border pr-2 flex justify-center"
//                 onClick={() => {
//                   setPhoneMenuShow(!phoneMenuShow);
//                 }}
//               >
//                 <MenuIcon style={{ color: "white" }} />
//               </div>
//             </Grid>
//             <Grid item lg={2} md={2} sm={8} xs={8}>
//               <div
//                 className=" border cursor-pointer flex justify-center sm:justify-start  text-white"
//                 onClick={() => {
//                   Router.push("/");
//                 }}
//               >
//                 <img
//                   src="/images/logo.png"
//                   className="border hidden md:block w-[70px] md:w-[140px] h-[70px] md:h-[140px]"
//                 />
//                 <div className=" border  md:hidden text-2xl ml-6 -mt-6">HOODYGANG</div>
//               </div>
//             </Grid>

//             <Grid
//               item
//               container
//               lg={10}
//               md={10}
//               sm={2}
//               xs={2}
//               className="border md:bg-[url('/images/landing/vector.png')]   bg-no-repeat bg-cover text-black py-2 h-full w-full"
//             >
//               <Grid
//                 item
//                 lg={9}
//                 md={9}
//                 sm={0}
//                 xs={0}
//                 sx={{ display: { xs: "none", md: "block" } }}
//               >
//                 <div className=" border border-black flex items-center justify-around space-x-2 md:leading-[60px]">
//                   {navitem.map((items, itemIndex) => (
//                     <div
//                       className="cursor-pointer flex justify-center hover:underline"
//                       key={itemIndex}
//                     >
//                       <div
//                         onClick={() => {
//                           Router.push(items.to);
//                         }}
//                         className="py-4"
//                       >
//                         <div className=" border border-black  text-[16.67px] -mt-2.5">
//                           {items?.label ?? ""}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </Grid>
//               <Grid
//                 item
//                 lg={3}
//                 md={3}
//                 sm={0}
//                 xs={0}
//                 sx={{ display: { xs: "none", md: "block" } }}
//               >
//                 <div className=" border border-black flex justify-end mt-4">
//                   <Account />
//                 </div>
//               </Grid>
//               <Grid
//                 item
//                 lg={0}
//                 md={0}
//                 sm={12}
//                 xs={12}
//                 sx={{ display: { xs: "block", md: "none" } }}
//               >
//                 <div className=" border border-black  flex justify-center -mt-2">
//                   <Account />
//                 </div>
//               </Grid>
//             </Grid>
//           </Grid>
//         </div>
//       )}
//     </>
//   );
// }

import { Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import Router from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import Account from "../Account";

export default function Header({ color = false, ...props }) {
  const [phoneMenuShow, setPhoneMenuShow] = useState(false);
  const toggleDrawer = (show) => () => {
    setPhoneMenuShow(show);
  };
  const navitem = [
    { to: "/main", label: "GO TO MAIN APP" },
    { to: "/whitepaper", label: "WHITE PAPER" },
  ];

  return (
    <>
      {phoneMenuShow === true ? (
        <div className="fixed top-0 w-full font-desc2">
          <div className="bg-[url('/images/main/mobileMenuBG.webp')] bg-no-repeat bg-cover h-screen w-full">
            <div className="flex flex-row justify-center py-4">
              <div className="fixed top-0 right-0 pr-4 py-4">
                <img
                  src="/images/closeIcon.svg"
                  className="h-5 hover:brightness-200"
                  onClick={toggleDrawer(false)}
                />
              </div>
            </div>
            <div className="pt-24">
              <div className="flex flex-col items-center text-center">
                <div className="text-3xl text-white">HOODYGANG</div>
                <img
                  src="/images/main/mobileTitleBottom.png"
                  className="mt-5 w-[240px]"
                />
              </div>
              <div className="tracking-wider mt-12">
                {navitem.map((items, itemIndex) => (
                  <div className="flex justify-center" key={itemIndex}>
                    <div
                      onClick={() => {
                        setPhoneMenuShow(!phoneMenuShow);
                        Router.push(items.to);
                      }}
                    >
                      <div
                        className={`text-xl text-white py-4 ${
                          itemIndex === 0 ? "py-8" : "py-4"
                        }`}
                      >
                        {items.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="border mb-20 w-full flex items-center justify-between bg-[#561515] bg-opacity-95 z-50   md:px-5 md:bg-transparent tracking-wider font-desc2">
          <div className="border m-6 gap-9 flex justify-between items-center w-full">
            <div
              className="border pr-2 flex justify-center md:hidden"
              onClick={() => {
                setPhoneMenuShow(!phoneMenuShow);
              }}
            >
              <MenuIcon style={{ color: "white" }} />
            </div>
            <div className="border flex items-center">
              <div
                className="border cursor-pointer flex justify-center sm:justify-start  text-white"
                onClick={() => {
                  Router.push("/");
                }}
              >
                <img
                  src="/images/logo.png"
                  className="border hidden md:block  w-[70px]  md:w-[160px] h-[70px] md:h-[140px] "
                />
                <div className="border md:hidden text-2xl ml-6 -mt-6">
                  HOODYGANG
                </div>
              </div>
            </div>

            {/* navbar pages background */}

            <div className=" border flex justify-between items-start md:bg-[url('/images/landing/vector.png')] bg-no-repeat bg-cover  text-black m-12 w-full">
              <div className=" border border-black  hidden md:flex items-center justify-evenly basis-[1200px] space-x-2 md:leading-[60px]">
                {navitem.map((items, itemIndex) => (
                  <div
                    className="cursor-pointer flex justify-center items-center text-center hover:underline"
                    key={itemIndex}
                  >
                    <div
                      onClick={() => {
                        Router.push(items.to);
                      }}
                      className="py-4 items-center"
                    >
                      <div className="border border-black text-[16.67px] ">
                        {items.label}
                      </div>
                    </div>
                  </div>
                ))}
                <div className="border border-black  hidden md:flex justify-center items-center ">
                  <Account />
                </div>
              </div>

              <div className="md:hidden flex justify-center mt-80">
                <Account />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
