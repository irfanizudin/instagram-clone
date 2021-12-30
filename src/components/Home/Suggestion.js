import React, { useState } from "react";
import Button from "./../Common/Button";
// import SwitchAccount from "./../Inbox/SwitchAccount";

const Suggestion = () => {
  const suggestions = [
    {
      username: "hendrik.mill",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      mutualFriend: 34,
    },
    {
      username: "Patrick.ghouf",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      mutualFriend: 66,
    },
    {
      username: "Eric.laporta",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      mutualFriend: 96,
    },
    {
      username: "Thomas.sane",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      mutualFriend: 38,
    },
  ];

  // const [switchAccount, setSwitchAccount] = useState(false);
  // const showSwitch = () => setSwitchAccount(true);
  // const hideSwitch = () => setSwitchAccount(false);

  return (
    <div className="w-full pt-[16px] hidden lg:block">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="profile"
            className="w-[56px] aspect-square rounded-full"
          />
          <div className="flex flex-col">
            <p className="text-base font-medium text-black">john.doe</p>
            <p className="text-base text-gray-text">John Doe</p>
          </div>
        </div>
        <Button className="text-sm font-medium text-link">Switch</Button>
        {/* {switchAccount && <SwitchAccount hideSwitch={hideSwitch} />}
        <SwitchAccount /> */}
      </div>
      <div className="flex items-center justify-between mt-5">
        <p className="text-base font-medium text-gray-text">Suggestions For You</p>
        <Button className="text-sm font-medium text-black">See All</Button>
      </div>

      {suggestions &&
        suggestions.map((suggestion) => {
          return (
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-3">
                <img
                  src={suggestion.image}
                  alt="profile"
                  className="w-[35px] aspect-square rounded-full"
                />
                <div className="flex flex-col">
                  <p className="text-base font-medium text-black">{suggestion.username}</p>
                  <p className="text-sm text-gray-text">
                    Followed by {suggestion.mutualFriend} more
                  </p>
                </div>
              </div>
              <Button className="text-sm font-medium text-link">Follow</Button>
            </div>
          );
        })}
    </div>
  );
};

export default Suggestion;
