import React from "react";

const HighlightProfile = () => {
  const highlights = [
    {
      name: "One Color",
      image: "https://source.unsplash.com/collection/1103088/one-color",
    },
    {
      name: "Office Life",
      image: "https://source.unsplash.com/collection/1895329/office-life",
    },
    {
      name: "Happy",
      image: "https://source.unsplash.com/collection/838038/happy-%2B-free-feels",
    },
    {
      name: "Night Lights",
      image: "https://source.unsplash.com/collection/291422/night-lights",
    },
    {
      name: "One Color",
      image: "https://source.unsplash.com/collection/1103088/one-color",
    },
    {
      name: "Office Life",
      image: "https://source.unsplash.com/collection/1895329/office-life",
    },
    {
      name: "Happy",
      image: "https://source.unsplash.com/collection/838038/happy-%2B-free-feels",
    },
  ];

  return (
    <div className="h-[118px] w-full overflow-hidden flex items-center px-[100px] space-x-12 mt-10">
      {highlights &&
        highlights.map((highlight, index) => {
          return (
            <div key={index} className="flex flex-col items-center justify-center cursor-pointer">
              <div className="w-[87px] aspect-square border border-gray-text/30 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src={highlight.image}
                  alt="stories"
                  className="object-cover w-[77px] aspect-square rounded-full"
                />
              </div>
              <p className="text-base font-medium mt-3">{highlight.name}</p>
            </div>
          );
        })}
    </div>
  );
};

export default HighlightProfile;
