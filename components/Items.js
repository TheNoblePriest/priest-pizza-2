import Image from "next/image";
import { useRouter } from "next/router";
function Items({ name, id, imageSrc, des, price, quantity }) {
  const router = useRouter();
  return (
    <div
      key={id}
      onClick={() => router.push(`/products/${id}`)}
      className="mt-2 px-2 cursor-pointer rounded-lg border shadow-lg bg-gray-50"
    >
      <div className="grid h-[80px]  grid-cols-8">
        <div className="cart-items">
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
      </div>
    </div>
  );
}

export default Items;
