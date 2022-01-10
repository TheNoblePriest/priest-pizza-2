import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../slices/features/cart/cartSlice";
function Items({ name, id, imageSrc, des, price, quantity }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div
      key={id}
      className="mt-2 px-2 cursor-pointer rounded-lg border shadow-lg bg-gray-50"
    >
      <div className="grid h-[80px]  grid-cols-9">
        <div
          onClick={() => router.push(`/products/${id}`)}
          className="cart-items"
        >
          <Image
            className="rounded-full"
            src={imageSrc}
            width={70}
            height={70}
          />
        </div>
        <div className="cart-items col-span-2">
          <p>{name}</p>
        </div>
        <div className="cart-items col-span-2">
          <p className=" truncate text-gray-600 pr-2">{des}</p>
        </div>
        <div className="cart-items">
          <p className="p-2">₹: {price}</p>
        </div>
        <div className="cart-items">
          <p className="p-2">{quantity}</p>
        </div>
        <div className="cart-items">
          <p className="p-2">₹: {price * quantity}</p>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={removeItemFromBasket}
            className="bg-orange-500 hover:bg-orange-600 justify-center items-center flex text-white text-xs p-2 rounded-md"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default Items;
