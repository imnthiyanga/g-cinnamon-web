import { useState, useEffect } from 'react';

function Aboutus() {
  const images = ['/img/packaging1.png', '/img/packaging2.png']; // Add your images here
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
                  className={`absolute top-0 w-full h-full object-cover object-center transition-transform duration-1000 ease-in-out ${index === currentImage ? 'transform translate-x-0' : 'transform -translate-x-full'}`}
                />
              ))}
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Premium Packaging
              </h2>
              <p className="mt-4 text-gray-500">
                If you are an owner of or supplier for Supermarket chain. We'll
                export our products with separate packaging as you wish. For
                small quantities we offer these packaging options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;