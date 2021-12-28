import React from "react";
import { HiX, HiCheckCircle } from "react-icons/hi";
import Button from "../Common/Button";
import Modal from "./../Common/Modal";

const SwitchAccount = ({ hideSwitch }) => {
  return (
    <>
      <Modal onClick={hideSwitch}>
        <div className="w-full py-[10px] relative border-b border-gray-text/30 flex items-center justify-center">
          <h6 className="text-lg font-medium">Switch Account</h6>
          <Button onClick={hideSwitch} className="absolute right-[16px]">
            <HiX className="text-xl" />
          </Button>
        </div>

        <div className="w-full h-[144px] overflow-auto">
          <div className="flex items-center justify-between py-[10px] px-[16px]">
            <div className="w-full flex items-center cursor-pointer">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="profile"
                className="w-[56px] aspect-square rounded-full"
              />
              <p className="font-medium ml-3">John.doe</p>
            </div>
            <HiCheckCircle className="text-link text-2xl" />
          </div>
        </div>

        <div className="w-full py-[14px] border-t border-gray-text/30 flex items-center justify-center">
          <Button className="font-medium text-link">Log into an Existing Account</Button>
        </div>
      </Modal>
    </>
  );
};

export default SwitchAccount;
