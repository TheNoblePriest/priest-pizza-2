import CartItems from "../../components/CartItems";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import { selectTotal } from "../../slices/features/cart/cartSlice";

function cart() {
  const subTotal = useSelector(selectTotal);
  return (
    <div>
      <NavBar />
      <div className="grid grid-cols-1 lg:grid-cols-3  m-4">
        <div className=" col-span-2 ">
          <CartItems />
        </div>
        <div className="flex justify-center items-center ">
          <div className="bg-gray-800 w-[400px] shadow-xl rounded-sm italic flex justify-center p-5 items-start flex-col text-white h-[300px]">
            <h2 className="font-bold text-[30px]">CART TOTAL</h2>
            <div className="p-4">
              <p className="text-sm">
                <strong>Subtotal: </strong>
                <small>₹: {subTotal} </small>
              </p>
              <p>
                <strong>Discount: </strong>
                {subTotal ? <small>₹: {-100}</small> : <small>₹: {0}</small>}
              </p>
              <p>
                <strong>Total: </strong>
                {subTotal ? (
                  <small>₹: {subTotal - 100}</small>
                ) : (
                  <small>₹: {0}</small>
                )}
              </p>
            </div>

            <div className="p-1 m-3 bg-white w-[60%] flex justify-center items-center text-red-500 rounded-sm">
              <button className=" text-xs">CHECKOUT NOW!</button>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 grid grid-cols-4 from-indigo-500 ">
        <div className=" w-full">
          <img
            className=" object-cover w-full h-full"
            src="/img/rest.jpeg"
            alt="..."
          />
        </div>
        <div className="flex  text-white justify-center items-center m-5">
          <h2 className="text-xl text-white font-mono font-bold">
            We Have Arrived 10 Million People In Just 2 Years.
          </h2>
        </div>
        <div className="m-2 text-white">
          <h1 className="text-lg font-mono text-orange-500">
            Find Our Resturants
          </h1>
          <p className="text-[12px] hover:text-orange-400 cursor-pointer font-mono font-bold py-3 w-[150px]">
            1654 Phusro, Jharkhand dist: Bokaro,
          </p>
          <p className="text-[12px] hover:text-orange-400 cursor-pointer font-mono font-bold py-3 w-[150px]">
            2356 K. Laquie Rd 8235. NewYork.85022 (602) 867-1011
          </p>
          <p className="text-[12px] hover:text-orange-400 cursor-pointer font-mono font-bold py-3 w-[150px]">
            1614 E. Erwin St 8104. NewYork.85022 (602) 867-1012
          </p>
        </div>
        <div className="text-white">
          <h1 className="text-lg font-mono my-2 text-orange-500">
            WORKING HOURS
          </h1>

          <p className="text-[12px] font-mono font-bold py-1">
            MONDAY UNTIL FRIDAY{" "}
          </p>
          <p className="text-[12px] font-mono font-bold py-1 ">
            {" "}
            9:00 - 22.00{" "}
          </p>
          <p className="text-[12px] font-mono font-bold py-1">
            SATURDAY - SUNDAY
          </p>
          <p className="text-[12px] font-mono font-bold py-1">12.00 - 24.00</p>
        </div>
      </footer>
      <Footer />
    </div>
  );
}

export default cart;
