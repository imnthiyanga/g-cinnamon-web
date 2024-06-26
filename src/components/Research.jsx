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
    description: "Eucalyptol (C₁₀H₁₈O) \n\nCinnamaldehyde (C₉H₈O)",
    icon: FaLeaf,
  },
  {
    name: "Fruit",
    description: "Cinnamyl acetate (C₁₁H₁₂O₂) \n\nCoumarin (C₉H₆O₂)",
    icon: GiFruitBowl,
  },
];

export default function Research() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <img
        src=""
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />

      <div
        className="flex flex-col items-center justify-center mx-auto max-w-7xl px-6 lg:px-8"
        style={{ position: "relative", zIndex: 2 }}
      >
        <div className=" mx-auto max-w-7xl lg:mx-0">
          <h2 className="text-center text-4xl font-bold tracking-tight text-black sm:text-6xl">
            Research
          </h2>
          <h2 className="text-md  tracking-tight text-black sm:text-2xl sm:mt-10">
            Introduction:
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Ceylon cinnamon, also known as &quot;true cinnamon,&quot; is
            renowned for its delicate flavor, medicinal properties, and rich
            history. Originating from Sri Lanka, this type of cinnamon is often
            considered superior to its more common counterpart, cassia cinnamon.
            In this article, we delve into the extensive research on Ceylon
            cinnamon, exploring its health benefits, quality differences,
            chemical composition, and diverse applications.
          </p>
          <h2 className="text-md  tracking-tight text-black sm:text-2xl sm:mt-10">
            Chemical composition:
          </h2>
        </div>

        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-6 sm:mt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex gap-x-4 rounded-xl bg-gray-100 /5 p-6 ring-1 ring-inset ring-white/10"
            >
              <card.icon
                className="h-7 w-5 flex-none text-orange-500"
                aria-hidden="true"
              />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-gray-700">{card.name}</h3>
                {card.description.split("\n\n").map((paragraph, idx) => (
                  <p className="text-gray-500" key={idx}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-7xl lg:mx-0">
          <h2 className="text-center text-xl font-bold tracking-tight text-black sm:text-2xl mt-20">
            Health Benefits of Ceylon Cinnamon
          </h2>
          <h2 className="text-md  tracking-tight text-black sm:text-2xl sm:mt-10">
            1. Antioxidant Powerhouse
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Ceylon cinnamon is rich in antioxidants, which help protect the body
            from oxidative stress and free radicals. Antioxidants play a crucial
            role in preventing chronic diseases and aging. A study published in
            the Journal of Agricultural and Food Chemistry highlights that
            Ceylon cinnamon contains a higher concentration of antioxidants
            compared to cassia cinnamon . These antioxidants include
            polyphenols, which are known for their ability to neutralize harmful
            free radicals in the body.
          </p>
          <h2 className="text-md  tracking-tight text-black sm:text-2xl sm:mt-10">
            2. Anti-Inflammatory Properties
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Chronic inflammation is a root cause of many diseases, including
            heart disease and cancer. Research has shown that the compounds in
            Ceylon cinnamon can significantly reduce inflammation levels in the
            body, making it a valuable addition to an anti-inflammatory diet .
            The cinnamaldehyde found in Ceylon cinnamon is particularly
            effective in reducing inflammation and inhibiting the production of
            inflammatory cytokines.
          </p>
          <h2 className="text-md  tracking-tight text-black sm:text-2xl sm:mt-10">
            3. Blood Sugar Regulation
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            One of the most celebrated benefits of Ceylon cinnamon is its
            ability to regulate blood sugar levels. Multiple studies, including
            one from Diabetes Care, have demonstrated that cinnamon can improve
            insulin sensitivity and lower blood sugar levels in people with type
            2 diabetes . This effect is primarily due to the bioactive compounds
            in cinnamon that mimic insulin and increase glucose uptake by cells.
          </p>
          <h2 className="text-md  tracking-tight text-black sm:text-2xl sm:mt-10">
            4. Heart Health
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Ceylon cinnamon contributes to heart health by lowering LDL
            cholesterol and triglycerides while maintaining stable HDL
            cholesterol levels. These effects can reduce the risk of heart
            disease, as evidenced by research in the Journal of Nutrition . The
            reduction in cholesterol levels is attributed to the antioxidant
            properties of cinnamon, which prevent the oxidation of cholesterol
            in the arteries.
          </p>

          <h2 className="text-md  tracking-tight text-black sm:text-2xl sm:mt-10">
            5. Neuroprotective Effects
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Emerging research suggests that Ceylon cinnamon may have
            neuroprotective effects, potentially helping in the prevention and
            management of neurodegenerative diseases like Alzheimer&apos;s and
            Parkinson&apos;s. A study published in Pharmacological Research
            discusses how compounds in cinnamon inhibit the buildup of tau
            protein in the brain, which is associated with Alzheimer&apos;s
            disease. Additionally, cinnamon&apos;s antioxidant and
            anti-inflammatory properties protect brain cells from damage.
          </p>

          <h2 className=" text-xl font-bold tracking-tight text-black sm:text-2xl mt-20">
            Quality Differences:
          </h2>
          <h2 className="text-center text-xl font-bold tracking-tight text-black sm:text-2xl">
            Ceylon vs. Cassia Cinnamon
          </h2>

          <h2 className="text-md tracking-tight text-black sm:text-2xl sm:mt-10">
            1. Coumarin Content
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            One of the primary differences between Ceylon and cassia cinnamon is
            the coumarin content. Coumarin is a natural compound that can be
            harmful in large amounts, potentially causing liver damage. Ceylon
            cinnamon contains negligible amounts of coumarin, making it a safer
            choice for regular consumption, especially for people with liver
            issues. In contrast, cassia cinnamon contains high levels of
            coumarin, which limits its safe consumption.
          </p>

          <h2 className="text-md tracking-tight text-black sm:text-2xl sm:mt-10">
            2. Flavor and Aroma
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Ceylon cinnamon is known for its delicate, sweet flavor and aromatic
            scent, which is less harsh and spicy compared to the more robust
            flavor of cassia cinnamon. This makes Ceylon cinnamon a preferred
            choice for culinary uses where a subtle, refined taste is desired.
            The difference in flavor is due to the lower levels of
            cinnamaldehyde in Ceylon cinnamon compared to cassia.
          </p>

          <h2 className="text-md tracking-tight text-black sm:text-2xl sm:mt-10">
            3. Chemical Composition
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            The chemical composition of Ceylon and cassia cinnamon varies
            significantly. Ceylon cinnamon contains lower levels of
            cinnamaldehyde, which is the compound responsible for the strong
            flavor and aroma of cinnamon. It also has higher levels of eugenol,
            a compound with a pleasant clove-like scent, and tannins, which
            contribute to its mild, sweet taste. Cassia cinnamon, on the other
            hand, has higher levels of cinnamaldehyde and coumarin, giving it a
            stronger, more pungent flavor.
          </p>
          <h2 className="text-center text-xl font-bold tracking-tight text-black sm:text-2xl mt-20">
            Diverse Applications of Ceylon Cinnamon
          </h2>

          <h2 className="text-md tracking-tight text-black sm:text-2xl sm:mt-10">
            1. Culinary Uses
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Ceylon cinnamon is a versatile spice used in both sweet and savory
            dishes. Its mild flavor enhances the taste of desserts, beverages,
            and even meat dishes. From cinnamon rolls to spiced lattes, the
            applications are endless. The unique flavor of Ceylon cinnamon pairs
            well with fruits, nuts, and chocolate, making it a favorite in
            baking and confectionery.
          </p>

          <h2 className="text-md tracking-tight text-black sm:text-2xl sm:mt-10">
            2. Medicinal Uses
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Beyond its use in cooking, Ceylon cinnamon is widely used in
            traditional medicine. It is consumed in various forms, including
            powder, capsules, and teas, to harness its health benefits. Ceylon
            cinnamon is used to treat a variety of ailments, including digestive
            issues, respiratory problems, and infections. Its antimicrobial
            properties make it effective against bacteria and fungi, while its
            anti-inflammatory properties help alleviate symptoms of arthritis
            and other inflammatory conditions.
          </p>

          <h2 className="text-md tracking-tight text-black sm:text-2xl sm:mt-10">
            3. Cosmetic Uses
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            The essential oil extracted from Ceylon cinnamon is used in
            cosmetics and personal care products. It is valued for its
            antimicrobial properties and pleasant fragrance, making it a common
            ingredient in lotions, soaps, and perfumes. Ceylon cinnamon oil is
            also used in aromatherapy to relieve stress and enhance mood.
          </p>

          <h2 className="text-center text-xl font-bold tracking-tight text-black sm:text-2xl mt-20">
            Conclusion
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Ceylon cinnamon is more than just a spice; it&apos;s a powerhouse of
            health benefits, a symbol of quality, and a versatile ingredient
            that can enhance various aspects of life. The rich body of research
            supporting its benefits underscores its value in both culinary and
            medicinal applications. Whether you&apos;re looking to improve your
            health, explore new flavors, or enjoy natural skincare products,
            Ceylon cinnamon offers a plethora of options.
          </p>
          <h2 className="text-center text-xl font-bold tracking-tight text-black sm:text-2xl mt-20">
            References
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            1.{" "}
            <a
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4012281/"
              className="text-blue-600 underline"
            >
              Neuroprotective effects of cinnamon in neurodegenerative diseases
            </a>
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            2.{" "}
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/29566396/"
              className="text-blue-600 underline"
            >
              Ceylon cinnamon vs. Cassia: Quality and Health Implications
            </a>
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            3.{" "}
            <a
              href="https://www.diabetesjournals.org/content/31/1/41"
              className="text-blue-600 underline"
            >
              The impact of cinnamon on blood sugar regulation
            </a>
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            4.{" "}
            <a
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3854496/"
              className="text-blue-600 underline"
            >
              Cosmetic uses of cinnamon essential oil
            </a>
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            5.{" "}
            <a
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3854496/"
              className="text-blue-600 underline"
            >
              Anti-inflammatory effects of Ceylon cinnamon
            </a>
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            6.{" "}
            <a
              href="https://www.sciencedirect.com/science/article/abs/pii/S002364381730413X"
              className="text-blue-600 underline"
            >
              Antioxidant properties of Ceylon cinnamon
            </a>
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            7.{" "}
            <a
              href="https://academic.oup.com/jn/article/137/3/735/4664542"
              className="text-blue-600 underline"
            >
              Heart health benefits of cinnamon
            </a>
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            8.{" "}
            <a
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4809438/"
              className="text-blue-600 underline"
            >
              Coumarin content in Ceylon vs. Cassia cinnamon
            </a>
          </p>

          <h2 className="text-center text-xl font-bold tracking-tight text-black sm:text-2xl mt-20">
            Embrace the wonders of Ceylon cinnamon and elevate your health and
            culinary experiences!
          </h2>
        </div>
      </div>
    </div>
  );
}
