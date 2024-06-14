/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: "Cinnamon Sticks",
    href: "#",
    price: "H1, H2,M00000, M4, M5, C4, C5, C55P",
    imageSrc: "/img/products/sticks.png",
    imageAlt: "Cinnamon Sticks.",
  },
  {
    id: 2,
    name: "Cinnamon Qullings",
    href: "#",
    price: "Quillings no.1, Quillings no.2, Chips",
    imageSrc: "/img/products/quillings.png",
    imageAlt: "Cinnamon Qullings.",
  },
  {
    id: 3,
    name: "Cinnamon Powder",
    href: "#",
    price: "Pure Cinnamon Powder, Not mixed with Sulphur.",
    imageSrc: "/img/products/powder.png",
    imageAlt: "Sticks.",
  },
  {
    id: 4,
    name: "Cinnamon Oil",
    href: "#",
    price: "Not mixed with Kerosine any other oils.",
    imageSrc: "/img/products/oil.png",
    imageAlt: "Cinnamon Oil.",
  },
  {
    id: 5,
    name: "Cinnamon Leaves",
    href: "#",
    price: "Not Extracted.",
    imageSrc: "/img/products/leaves.png",
    imageAlt: "Cinnamon Leaves.",
  },
  {
    id: 6,
    name: "Cinnamon Wood",
    href: "#",
    price: "Dried",
    imageSrc: "/img/products/firewood.png",
    imageAlt: "Cinnamon Wood.",
  },
  {
    id: 7,
    name: "Cinnamon Tea",
    href: "#",
    price: "Ceylon Tea & Sri Lankan Spices included",
    imageSrc: "/img/products/tea.png",
    imageAlt: ".",
  },
  {
    id: 8,
    name: "Cinnamon Seeds",
    href: "#",
    price: "Handpicked and Dried.",
    imageSrc: "/img/products/seeds.png",
    imageAlt: ".",
  },
  // More products...
];

export default function Products() {
  return (
    <div id="products" className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 pt-10">
        <h2 className="text-black text-4xl font-bold tracking-tight sm:text-4xl pb-5 ">
          Products
        </h2>
        <p className="text-lg mb-4 text-gray-500 ">
          We offer a wide range of Cinnamon products. we are able to supply any
          quantity of Cinnamon products as per your requirement.
        </p>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.href}
              className="group transform transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">
                {product.name}
              </h3>
              <p className="mt-1 text-sm  text-gray-500">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
