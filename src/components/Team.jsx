import { useState } from "react";

const people = [
  {
    name: "Rahal Seekkuarachchi",
    role: "Business Development Manager",
    imageUrl: "/img/rahal.jpg",
    bio: "Rahal Seekkuarachchi, a prominent landowner in southern Sri Lanka, has an extensive engineering background and a vision to elevate the Ceylon cinnamon market. Building on his family's legacy of supplying high-quality cinnamon, Rahal now focuses on directly exporting value-added and premium cinnamon. His technical expertise and strategic insight drive Cinnamon Paradise towards innovation and global recognition",
  },
  {
    name: "Dihan Madhusankha",
    role: "Product Manager",
    imageUrl: "/img/dihan.jpg",
    bio: "Dihan Madusankha, an expert in chemical processing with an engineering background, is passionate about enhancing the cinnamon industry. His innovative approach to adding value to cinnamon products ensures they meet the highest quality standards. At Cinnamon Paradise, Dihan's expertise and enthusiasm are key to driving advancements and maintaining superior product quality in the global market.",
  },
  // More people...
];

function Description({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const text = isExpanded || typeof children !== 'string' ? children : `${children.slice(0, 300)}...`;
  
  
  return (
    <div>
      {text}
      {typeof children === 'string' && (
      <button className='text-blue-700' onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? '...Show Less' : 'More'}
      </button>
    )}
    </div>
  );
}

export default function Team() {

  
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We’re here to revolutionize the Cinnamon industry with the well
            educated Engineering background.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {people.map((person) => (
            <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
              <img
                className="w-52 h-52 flex-none rounded-full object-cover"
                src={person.imageUrl}
                alt=""
              />
              <div className="flex-auto">
                <h3 className="text-xl font-medium leading-8 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-700">
                  {person.role}
                </p>
                <div className="mt-3 text-base leading-7 text-gray-500">
                <Description>{person.bio}</Description>
              </div>
                
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
