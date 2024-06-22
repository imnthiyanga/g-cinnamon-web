import { useState, useEffect } from "react";

function Aboutus() {
  const images = [
    "/img/packaging1.png",
    "/img/packaging2.png",
    "/img/packaging3.png",
    "/img/packaging4.png",
    "/img/packaging5.png",
  ]; // Add your images here
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 4 seconds

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  return (
    <div id="aboutus" className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl sm:text-center mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Us
          </h2>
        </div>
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                World&apos;s finest, premium cinnamon Exporters.
              </h2>
              <p className="mt-4 text-gray-500">
                Golden Cinnamon is a premier exporter of Ceylon Cinnamon
                (Cinnamomum zeylanicum), renowned for its superior taste, aroma,
                and health benefits. With hundreds of acres of cinnamon
                plantations, we oversee every step of the process, from
                cultivation to export, ensuring the highest standards of quality
                and sustainability.
              </p>
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
              <img
                src="/img/cinn.jpg"
                alt=""
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none mt-20">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div className="relative aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-white">
              {images.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt=""
                  className={`absolute top-0 w-full h-full object-cover object-center transition-transform duration-1000 ease-in-out ${
                    index === currentImage
                      ? "transform translate-x-0"
                      : "transform -translate-x-full"
                  }`}
                />
              ))}
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Custom Packaging Solutions:
              </h2>
              <ul className="list-disc pl-5 text-gray-600 pt-5">
                <li>
                  Eco-Friendly Bags: Made from recyclable materials for
                  sustainability.
                </li>
                <li>
                  Bulk Packaging: Ensures large orders arrive fresh and intact.
                </li>
                <li>Premium Cinnamon Sprays and Bottles:</li>
                <li>
                  Cinnamon Sprays: Convenient for adding flavor to dishes,
                  beverages, and baked goods.
                </li>
                <li>
                  Glass Bottles: Elegant packaging for our premium cinnamon
                  powder and sticks, perfect for gourmet kitchens.
                </li>
                <li>Why Choose Our Packaging?:</li>
                <li>
                  Quality Assurance: High-quality materials preserve freshness
                  and potency.
                </li>
                <li>
                  Customizable: Various sizes and styles to meet your needs.
                </li>
                <li>
                  Aesthetic Appeal: Designed to be visually appealing and stand
                  out on shelves.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
