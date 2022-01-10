import { useState } from "react";
import {
  PhoneIcon,
  ShoppingCartIcon,
  HomeIcon,
  ShoppingBagIcon,
  ClipboardIcon,
  CalendarIcon,
  CameraIcon,
  ChatAltIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/features/cart/cartSlice";
import { useSession, signOut } from "next-auth/react";

function NavBar() {
  const [select, setSelect] = useState(true);
  const items = useSelector(selectItems);
  const router = useRouter();
  const { data: session } = useSession();

  console.log(session?.user.image);

  const scrolltoProduct = () => {
    window.scrollTo({
      top: 520,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex bg-gradient-to-b from-red-500 to-orange-300 sticky top-0 h-[80px] py-3 z-40 justify-between items-center shadow-xl ">
      <div className="flex justify-around items-center ml-3">
        <div className="bg-white rounded-full flex items-center p-2">
          <PhoneIcon className="w-4 h-4" />
        </div>

        <div className="flex justify-center flex-col">
          <p className=" mx-3 font-bold font-mono text-[12px] text-white">
            ORDER NOW
          </p>
          <p className="mx-3 font-semibold font-mono text-[15px] text-white">
            234-32-121
          </p>
        </div>
      </div>
      <div className="hidden lg:flex justify-between items-center">
        <div className="flex items-center">
          {select ? (
            <p
              onClick={() => router.push("/")}
              className="center-btn text-yellow-200"
            >
              <HomeIcon className="h-3 w-3" />
              Home
            </p>
          ) : (
            <p onClick={() => router.push("/")} className="center-btn">
              <HomeIcon className="h-3 w-3" /> Home
            </p>
          )}
        </div>

        <p onClick={scrolltoProduct} className="center-btn">
          <ShoppingBagIcon className="w-3 h-3" />
          Products
        </p>
        <p className="center-btn">
          <ClipboardIcon className="w-3 h-3" />
          Menu
        </p>
        <p className="center-btn hover:scale-110 bg-black p-2 rounded-lg hover:text-white text-2xl font-bold">
          Priest Pizza
        </p>
        <p className="center-btn ">
          <CalendarIcon className="w-3 h-3" />
          Events
        </p>
        <p onClick={() => router.push("/auth/signin")} className="center-btn">
          <CameraIcon className="w-3 h-3" />
          Login
        </p>
        <p className="center-btn">
          <ChatAltIcon className="w-3 h-3" /> Contact
        </p>
      </div>

      <div className="relative cursor-pointer mr-6 flex justify-center items-center">
        {session ? (
          <h1
            onClick={signOut}
            className="text-[12px] font-mono px-2 hover:text-green-300 text-gray-50 font-bold"
          >
            {session.user.name}
          </h1>
        ) : (
          <h1 className="text-[12px] font-mono px-2 hover:text-green-300 text-gray-50 font-bold"></h1>
        )}

        <ShoppingCartIcon
          onClick={() => router.push(`/cart/Cart`)}
          className="h-7 w-7 text-white"
        />
        <div className="absolute -top-2 p-1 rounded-full h-4 flex items-center bg-white -right-2 animate-pulse ">
          <p className="text-xs text-black">{items.length}</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
