import Image from "next/image";

export default function Aboutus() {
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
            <div className="aspect-h-1 aspect-w-2 overflow-hidden rounded-lg bg-gray-100">
              <img
                src="/img/cinnamon.jpg"
                alt=""
                className="object-cover object-center"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Premium Packaging
              </h2>
              <p className="mt-4 text-gray-500">
                If you are an owner of or suplier for Supermarket chain. We'll
                export our products with seperate packaging as you wish. For
                small quantities weoffer these packaging options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
