import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import { useState } from "react";
import Body from "../../components/Body";
import { useSelector, useDispatch } from "react-redux";
import {
  selectDescription,
  selectId,
  selectImage,
  selectName,
  selectPrice,
} from "../../slices/features/products/productSlice";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { addToBasket } from "../../slices/features/cart/cartSlice";

function product() {
  const id = useSelector(selectId);
  const name = useSelector(selectName);
  const image = useSelector(selectImage);
  const price = useSelector(selectPrice);
  const description = useSelector(selectDescription);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(price);
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    if (amount >= 0) {
      setQuantity(quantity + 1);
      setAmount(amount * quantity);
    } else return;
  };
  const decrease = () => {
    if (amount >= 0) {
      setQuantity(quantity - 1);
      Math.floor(setAmount(amount / quantity));
    } else return;
  };

  const addItemToBasket = () => {
    const product = {
      id,
      name,
      image,
      price,
      description,
      quantity: quantity,
    };
    dispatch(addToBasket(product));
  };
  return (
    <div key={id}>
      <Navbar />
      <div className="flex justify-around w-full flex-col md:flex-row items-center bg-white pt-10 pb-16">
        <div className="w-[50%] flex justify-center items-center">
          <Image
            src={image}
            className="rounded-full"
            width={500}
            height={500}
          />
        </div>
        <div className="flex justify-start w-[100%] md:w-[50%] items-center md:items-start flex-col p-1 md:p-2">
          <p className="text-red-500 text-xl font-mono font-bold py-2">
            {name}
          </p>
          <p className="font-mono font-semibold">₹: {price * quantity}</p>
          <p className="font-semibold py-2 text-[14px] text-center md:text-left w-[80%]">
            {description}
          </p>

          <p className="text-lg font-mono font-semibold">Enter the Quantity</p>
          <div className="flex w-[100px] justify-between items-center ">
            <button
              onClick={decrease}
              className="bg-blue-500 w-6 h-6 text-center text-white text-[16px] p-1 rounded-md"
            >
              -
            </button>
            <p className="text-xs">{quantity}</p>
            <button
              onClick={increase}
              className="bg-blue-500 w-6 h-6 text-center  text-white text-[16px] p-1 rounded-md"
            >
              +
            </button>
          </div>

          <button
            onClick={addItemToBasket}
            className="bg-orange-500 hover:bg-orange-600 mt-5 flex text-white text-xs p-2 rounded-md"
          >
            <ShoppingCartIcon className="w-4 h-4" /> ADD TO CART
          </button>
        </div>
      </div>

      <Body heading={"Order More"} />

      <Footer />
    </div>
  );
}

export default product;
