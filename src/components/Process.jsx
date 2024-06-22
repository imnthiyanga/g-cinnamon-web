import { useState } from "react";

const features = [
  {
    name: "The Cinnamon Tree",
    description: (
      <>
        <p>Varieties - Ceylon Cinnoman (Cinnamomum zeylanicum).</p>
        <p>The Harmonize System (HS) code - 09061100</p>
        <p>World best Cinnamon variety which also called as True Cinnamon</p>
      </>
    ),
  },
  {
    name: "Cultivation",
    description:
      "All the plats are cultivated under the standard conditions in Down-South Sri Lanka. Organic fertilizers or standard chemical fertilizers have benn used in standard level",
  },
  {
    name: "Harvesting",
    description:
      "Trees are cut-down by well experienced and trained workers in 100% traditional based which allows maintain healthy growth cycles of the Cynnamon tree. ",
  },
  {
    name: "Processing",
    description:
      "The entire process is carried out using traditional methods, with all steps being done by hand. This meticulous approach ensures that the quality and authenticity of the cinnamon are preserved.",
  },
  {
    name: "Quality Control",
    description:
      "We do not use sulphur, preservatives, or any other chemicals. The cinnamon is dried to the optimal level and carefully packed. This ensures that our product remains natural and retains its full flavor and aroma.",
  },
  {
    name: "Sustainability",
    description:
      "We will ensure ecofriendly forming, community engagement environmental protection sustainable harvesting eco-friendly packaging and sustainable supply chain. As our motto we contol all the things before explained, because we keep the ownership and lands to end products. So we will ensure uality of the product. ",
  },
];

function Description({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const text =
    isExpanded || typeof children !== "string"
      ? children
      : `${children.slice(0, 100)}...`;

  return (
    <div>
      {text}
      {typeof children === "string" && (
        <button
          className="text-blue-700"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "More"}
        </button>
      )}
    </div>
  );
}

export default function Process() {
  return (
    <div id="process" className="bg-white">
      <div
        aria-hidden="true"
        className="relative mt-20"
        style={{
          backgroundImage: "url('/img/process.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          height: "30rem", // Adjust the height as needed
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-white" />
      </div>

      <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From our lush lands to your table.{" "}
          </h2>
          <p className="mt-4 text-gray-500">
            We export from microscale quantities to Tons of Cinnamon directly
            from our lush lands.
          </p>
        </div>

        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">{feature.name}</dt>
              <dd className="mt-2 text-sm text-gray-500">
                <Description>{feature.description}</Description>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
