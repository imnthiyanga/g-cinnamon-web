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
      name: 'Cinnamon Powder',
      href: '#',
      price: '$48',
      imageSrc: '/img/products/powder.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Cinnamon Oil',
      href: '#',
      price: '$35',
      imageSrc: '/img/products/oil.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Cinnamon Sticks',
      href: '#',
      price: '$89',
      imageSrc: '/img/products/stcks.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Cinnamon Powder',
      href: '#',
      price: '$35',
      imageSrc: '/img/products/powder.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'Cinnamon Oil',
        href: '#',
        price: '$48',
        imageSrc: '/img/products/oil2.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
        id: 6,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc: '/img/products/powder.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
        id: 7,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        imageSrc: '/img/products/powder.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
        id: 8,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: '/img/products/powder.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    }
    // More products...
  ]
  
  export default function Products() {
    return (
      <div id="products" className="bg-white">
        
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 pt-10">
        <h2 className="text-black text-4xl font-bold tracking-tight sm:text-4xl pb-5 ">Products</h2>
        <p className="text-lg mb-4 text-gray-400 ">
            We’re a dynamic group of individuals who are passionate about what we do.
          </p>   
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }