import React, { useState } from "react";
import Button from "../Common/Button";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import SwitchAccount from "./SwitchAccount";
import NewMessage from "./NewMessage";

const ContactList = () => {
  const contacts = [
    {
      name: "Ronaldo Lima",
      image: "https://randomuser.me/api/portraits/men/8.jpg",
      lastActive: 5,
    },
    {
      name: "Adrien Silva",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      lastActive: 3,
    },
    {
      name: "Danilo Fernandez",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      lastActive: 6,
    },
    {
      name: "Cedric Soares",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      lastActive: 7,
    },
    {
      name: "Ronaldo Lima",
      image: "https://randomuser.me/api/portraits/men/8.jpg",
      lastActive: 5,
    },
    {
      name: "Adrien Silva",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      lastActive: 3,
    },
    {
      name: "Danilo Fernandez",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      lastActive: 6,
    },
    {
      name: "Cedric Soares",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      lastActive: 7,
    },
  ];

  const [switchAccount, setSwitchAccount] = useState(false);
  const showSwitch = () => setSwitchAccount(true);
  const hideSwitch = () => setSwitchAccount(false);

  const [newMessage, setNewMessage] = useState(false);
  const showNewMessage = () => setNewMessage(true);
  const hideNewMessage = () => setNewMessage(false);

  return (
    <div className="w-full h-full bg-white border border-gray-text/30 rounded-l">
      <div className="w-full h-[60px] flex items-center justify-center p-[16px] relative border-b border-gray-text/30">
        <Button onClick={showSwitch} className="text-lg font-medium flex items-center space-x-1">
          <span>John.doe</span>
          <IoIosArrowDown />
        </Button>
        {switchAccount && <SwitchAccount hideSwitch={hideSwitch} />}

        <Button onClick={showNewMessage} className="text-lg absolute right-0 mr-[16px]">
          <FaRegEdit size={24} />
        </Button>
        {newMessage && <NewMessage hideNewMessage={hideNewMessage} />}
      </div>

      <div className="w-full h-[50px] flex items-center border-b border-gray-text/30 p-[16px] space-x-4">
        <Button className="uppercase font-medium">primary</Button>
        <Button className="uppercase font-medium">general</Button>
      </div>

      <div className="w-full h-[420px] overflow-auto ">
        {contacts &&
          contacts.map((contact) => {
            return (
              <div className="w-full flex items-center cursor-pointer px-[16px] py-[10px] hover:bg-gray-100">
                <img
                  src={contact.image}
                  alt="profile"
                  className="w-[55px] aspect-square rounded-full"
                />
                <div className="flex flex-col justify-center ml-4">
                  <p className="">{contact.name}</p>
                  <p className=" text-gray-text">Active {contact.lastActive}h ago</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ContactList;
