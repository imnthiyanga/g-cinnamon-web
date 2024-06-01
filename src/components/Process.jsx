const features = [
    { name: 'The Cinnamon Tree', description: 'Designed by Good Goods, Inc.' },
    { name: 'Cultivation', description: 'Solid walnut base with rare earth magnets and polycarbonate add-ons.' },
    { name: 'Harvesting', description: 'Hand sanded and finished with natural oil' },
    { name: 'Processing', description: 'Pen Tray, Phone Tray, Small Tray, Large Tray, Sticky Note Holder' },
    { name: 'Quality Control', description: 'Detail the steps taken to ensure the quality and purity of the cinnamon.' },
    { name: 'Sustainability', description: 'Explain the practices used to ensure sustainable cinnamon farming.' },
  ]
  
  export default function Process() {
    return (
      <div className="bg-white">
        <div aria-hidden="true" className="relative mt-20">
          <img
            src="/img/plant.jpg"
            alt=""
            className="h-96 w-full object-cover object-center rounded-t-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white" />
        </div>
  
        <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Process of Production</h2>
            <p className="mt-4 text-gray-500">
            Provide a short introduction about the significance of cinnamon, its historical use, and its importance in various cultures.
            </p>
          </div>
  
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  