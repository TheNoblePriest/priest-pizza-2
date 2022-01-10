import { useSelector } from "react-redux";
import { selectItems } from "../slices/features/cart/cartSlice";
import Items from "./Items";

function CartItems() {
  const items = useSelector(selectItems);
  return (
    <div className="px-2 mx-1 my-2  ">
      <div className="grid gap-2 grid-cols-8">
        <p className="cart-head">Product</p>
        <p className="cart-head col-span-2">Name</p>
        <p className="cart-head col-span-2">Description</p>
        <p className="cart-head">Price</p>
        <p className="cart-head">Quantity</p>
        <p className="cart-head">Total</p>
      </div>
      <div className="overflow-y-scroll h-[450px] mt-4 -ml-2 scrollbar-hide">
        {items.map((item, i) => (
          <Items
            key={i}
            id={item.pId}
            name={item.pName}
            imageSrc={item.pImage}
            price={item.pPrice}
            des={item.pDescription}
            quantity={item.pQuantity}
          />
        ))}
      </div>
    </div>
  );
}

export default CartItems;
