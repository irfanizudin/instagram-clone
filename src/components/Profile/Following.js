import React from "react";
import Button from "./../Common/Button";
import { HiX } from "react-icons/hi";
import Modal from "./../Common/Modal";

const Following = ({ hideFollowing }) => {
  const following = [
    {
      name: "Ronaldo Lima",
      image: "https://randomuser.me/api/portraits/men/8.jpg",
      username: "ronaldo.lima",
    },
    {
      name: "Adrien Silva",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      username: "adriensilva",
    },
    {
      name: "Danilo Fernandez",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      username: "danilofernandez8",
    },
    {
      name: "Cedric Soares",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      username: "cedricsoarez12",
    },
    {
      name: "Ronaldo Lima",
      image: "https://randomuser.me/api/portraits/men/8.jpg",
      username: "ronaldo.lima",
    },
    {
      name: "Adrien Silva",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      username: "adriensilva",
    },
    {
      name: "Danilo Fernandez",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      username: "danilofernandez8",
    },
    {
      name: "Cedric Soares",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      username: "cedricsoarez12",
    },
  ];

  return (
    <Modal onClick={hideFollowing} className="overflow-hidden">
      <div className="w-full py-[10px] relative border-b border-gray-text/30 flex items-center justify-center">
        <h6 className="text-lg font-medium">Following</h6>
        <Button onClick={hideFollowing} className="absolute right-[16px]">
          <HiX className="text-xl" />
        </Button>
      </div>

      <div className="w-full h-[60px] flex items-center justify-evenly border-b border-gray-text/30">
        <Button className="text-lg font-medium text-blue-900">People</Button>
        <Button className="text-lg font-medium text-blue-900">Hashtags</Button>
      </div>

      <div className="w-full h-[380px] overflow-auto">
        {following &&
          following.map((following, index) => {
            return (
              <div
                key={index}
                className="w-full flex items-center justify-between py-[10px] px-[18px] hover:bg-gray-100"
              >
                <div className="flex items-center">
                  <img
                    src={following.image}
                    alt="profile"
                    className="w-[35px] aspect-square rounded-full"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="ml-3 text-base font-medium">{following.username}</p>
                    <p className="ml-3 text-base text-gray-text font-medium">{following.name}</p>
                  </div>
                </div>
                <Button className="border rounded border-gray-text/30 font-medium py-[6px] px-[10px] text-base">
                  Following
                </Button>
              </div>
            );
          })}
      </div>
    </Modal>
  );
};

export default Following;
