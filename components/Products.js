import Image from "next/image";
import { sendProduct } from "../slices/features/products/productSlice";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

function Products({ title, imageSrc, id, price, description }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const productPage = () => {
    dispatch(
      sendProduct({
        pId: id,
        pName: title,
        pImage: imageSrc,
        pPrice: price,
        pDescription: description,
      })
    );
    router.push({
      pathname: `/products/${id}`,
    });
  };
  return (
    <div
      onClick={productPage}
      key={id}
      className="flex cursor-pointer hover:scale-110 transition-all duration-300 justify-center items-center flex-col rounded-lg bg-white p-2 my-4 w-[280px]"
    >
      <Image
        className="rounded-full"
        objectFit="cover"
        src={imageSrc}
        width={150}
        height={150}
      />
      <p className="text-xs md:text-md lg:text-md text-red-500 object-contain font-mono py-2 font-bold">
        {title}
      </p>
      <p className="text-sm italic p-2 font-bold">₹: {price}</p>
      <p className="text-[12px] p-2 text-center font-semibold text-gray-600 italic">
        {description}
      </p>
    </div>
  );
}

export default Products;
