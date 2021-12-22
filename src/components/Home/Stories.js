import React from "react";

const Stories = () => {
  const users = [
    {
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Albert Doe",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "John Chris",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Albert Doe",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "John Chris",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Albert Doe",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "John Chris",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  ];

  return (
    <div className="h-[118px] w-full flex items-center p-[16px] bg-white border border-gray-text/30 rounded space-x-3">
      {users &&
        users.map((user, index) => {
          return (
            <div key={index} className="flex flex-col items-center justify-center">
              <div className="w-[66px] aspect-square border-2 border-story rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src={user.image}
                  alt="stories-img"
                  className="object-cover w-[56px] aspect-square rounded-full"
                />
              </div>
              <p className="text-sm text-black">{user.name}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Stories;
