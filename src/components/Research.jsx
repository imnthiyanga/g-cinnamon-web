import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
import { GiWoodPile, GiFruitBowl } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";


const cards = [
  {
    name: "Bark",
    description:
      "Cinnamaldehyde (C₉H₈O) \n\nBenzoic acid (C₇H₆O₂) \n\nTrans-cinnamaldehyde (C₉H₈O) \n\nCamphor (C₁₀H₁₆O) \n\nLinalool (C₁₀H₁₈O) \n\nCaffeic acid (C₉H₈O₄).",
    icon: GiWoodPile,
  },
  {
    name: "Leaf",
    description:
      "Eucalyptol (C₁₀H₁₈O) \n\nCinnamaldehyde (C₉H₈O)",
    icon: FaLeaf,
  },
  {
    name: "Fruit",
    description:
      "Cinnamyl acetate (C₁₁H₁₂O₂) \n\nCoumarin (C₉H₆O₂)",
    icon: GiFruitBowl,
  },
];

export default function Research() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-400 py-24 sm:py-32">
      <img
        src="/img/cinn.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="absolute inset-0 -z-9 bg-black opacity-60"></div>

      <div
        className="flex flex-col items-center justify-center mx-auto max-w-7xl px-6 lg:px-8"
        style={{ position: "relative", zIndex: 2 }}
      >
        <div className="text-center mx-auto max-w-7xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Research
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Ceylon cinnamon, often referred to as "true cinnamon," is distinct
            from Cassia cinnamon in both physical appearance and chemical
            composition. Derived from the Cinnamomum verum tree, Ceylon cinnamon
            quills are thin and have a soft, light brown color compared to the
            thicker, darker, and more robust quills of Cassia cinnamon. Ceylon
            cinnamon contains a lower amount of coumarin, a compound that can be
            harmful in large quantities, making it a safer and healthier choice
            for regular consumption.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10"
            >
              <card.icon
                className="h-7 w-5 flex-none text-orange-500"
                aria-hidden="true"
              />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">{card.name}</h3>
                {card.description.split("\n\n").map((paragraph, idx) => (
                  <p className="text-gray-300" key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
