import React from "react";
import Button from "./../Common/Button";
import { HiX } from "react-icons/hi";
import Modal from "./../Common/Modal";

const Follower = ({ hideFollower }) => {
  const followers = [
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
    <Modal onClick={hideFollower} className="overflow-hidden">
      <div className="w-full py-[10px] relative border-b border-gray-text/30 flex items-center justify-center">
        <h6 className="text-lg font-medium">Followers</h6>
        <Button onClick={hideFollower} className="absolute right-[16px]">
          <HiX className="text-xl" />
        </Button>
      </div>

      <div className="w-full h-[380px] overflow-auto">
        {followers &&
          followers.map((follower, index) => {
            return (
              <div
                key={index}
                className="w-full flex items-center justify-between py-[10px] px-[18px] hover:bg-gray-100"
              >
                <div className="flex items-center">
                  <img
                    src={follower.image}
                    alt="profile"
                    className="w-[35px] aspect-square rounded-full"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="ml-3 text-base font-medium">{follower.username}</p>
                    <p className="ml-3 text-base text-gray-text font-medium">{follower.name}</p>
                  </div>
                </div>
                <Button className="border rounded border-gray-text/30 font-medium py-[6px] px-[10px] text-base">
                  Remove
                </Button>
              </div>
            );
          })}
      </div>
    </Modal>
  );
};

export default Follower;
