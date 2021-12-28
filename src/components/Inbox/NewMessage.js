import React from "react";
import Button from "../Common/Button";
import Modal from "./../Common/Modal";
import { HiX, HiCheckCircle } from "react-icons/hi";

const NewMessage = ({ hideNewMessage }) => {
  const contacts = [
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
    <Modal onClick={hideNewMessage}>
      <div className="w-full py-[10px] relative border-b border-gray-text/30 flex items-center justify-center">
        <h6 className="text-lg font-medium">New Message</h6>
        <Button onClick={hideNewMessage} className="absolute left-[16px]">
          <HiX className="text-xl" />
        </Button>
      </div>

      <div className="w-full h-auto border-b border-gray-text/30 p-[16px] flex">
        <span className="text-lg font-medium">To:</span>
        <input type="text" placeholder="Search..." className="w-full outline-none ml-5" />
      </div>

      <div className="w-full h-[335px] overflow-auto">
        <p className="p-[16px] font-medium">Suggested</p>

        {contacts &&
          contacts.map((contact, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between py-[10px] px-[16px] hover:bg-gray-100 cursor-pointer"
              >
                <div className="w-full flex items-center">
                  <img
                    src={contact.image}
                    alt="profile"
                    className="w-[45px] aspect-square rounded-full"
                  />
                  <div className="flex flex-col ml-3">
                    <p className="font-medium">{contact.username}</p>
                    <p className="font-medium text-gray-text">{contact.name}</p>
                  </div>
                </div>
                <div className="w-[28px] aspect-square rounded-full border-2 border-black"></div>
              </div>
            );
          })}
      </div>
    </Modal>
  );
};

export default NewMessage;
