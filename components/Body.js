import Products from "./Products";
export const PizzaItems = [
  {
    id: 1,
    title: "Nepolian Pizza",
    imageSrc: "/img/pizza.png",
    price: 190,
    description:
      "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.",
  },
  {
    id: 2,
    title: "Chicago Pizza",
    imageSrc: "/img/chicago.png",
    price: 230,
    description:
      "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.",
  },
  {
    id: 3,
    title: "New York-Style Pizza",
    imageSrc: "/img/new-york.png",
    price: 132,
    description:
      "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.",
  },
  {
    id: 4,
    title: "Sicilian Pizza",
    imageSrc: "/img/sicilian.png",
    price: 199,
    description:
      "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.",
  },
  {
    id: 5,
    title: "Greek Pizza",
    imageSrc: "/img/greek.png",
    price: 299,
    description:
      "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.",
  },
  {
    id: 6,
    title: "California Pizza",
    imageSrc: "/img/california2.png",
    price: 259,
    description:
      "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.",
  },
  {
    id: 7,
    title: "Detroit Pizza",
    imageSrc: "/img/detroit.png",
    price: 231,
    description:
      "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.",
  },
  {
    id: 8,
    title: " St.Louis Pizza",
    imageSrc: "/img/st-louis.jpeg",
    price: 189,
    description:
      "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.",
  },
];
function Body({ heading }) {
  return (
    <div className=" flex items-center bg-gray-100 flex-col -mt-7 py-5">
      <h3 className="font-bold text-sm md:text-2xl text-gray-600 my-2 italic">
        {heading}{" "}
        <a
          className="text-[12px] cursor-pointer hover:border-b-2 text-red-500 border-red-500"
          href="#"
        >
          Order Now.
        </a>
      </h3>
      <div className="grid grid-cols-1  gap-4 md:grid-cols-3 lg:grid-cols-4">
        {PizzaItems.map((item) => (
          <Products
            key={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            imageSrc={item.imageSrc}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Body;
