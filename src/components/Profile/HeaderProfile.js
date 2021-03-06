import React, { useState } from "react";
import Button from "./../Common/Button";
import { HiOutlineCog } from "react-icons/hi";
import ChangeProfilePhoto from "./ChangeProfilePhoto";
import SettingProfile from "./SettingProfile";
import { useNavigate } from "react-router-dom";

const HeaderProfile = ({ username }) => {
  const [changeProfilePhoto, setChangeProfilePhoto] = useState(false);
  const hideChangeProfilePhoto = () => setChangeProfilePhoto(false);

  const [settingProfile, setSettingProfile] = useState(false);
  const hideSettingProfile = () => setSettingProfile(false);

  const navigate = useNavigate();
  return (
    <div className="w-full  flex items-start px-[15px] lg:px-[130px]">
      <img
        onClick={() => setChangeProfilePhoto(true)}
        src="https://randomuser.me/api/portraits/men/75.jpg"
        alt="profile"
        className="w-[77px] sm:w-[150px] aspect-square rounded-full cursor-pointer"
      />
      {changeProfilePhoto && <ChangeProfilePhoto hideChangeProfilePhoto={hideChangeProfilePhoto} />}

      <div className="flex flex-col justify-center ml-[50px] sm:ml-[100px]">
        <div className="flex items-center">
          <h5 className="text-2xl font-light">{username}</h5>
          <Button className="hidden sm:block border border-gray-text/30 rounded font-medium py-[6px] px-[10px] ml-5">
            Edit Profile
          </Button>
          <Button onClick={() => setSettingProfile(true)}>
            <HiOutlineCog size={28} className="ml-3" />
          </Button>
          {settingProfile && <SettingProfile hideSettingProfile={hideSettingProfile} />}
        </div>

        <div className="flex items-center space-x-4 sm:space-x-10 mt-5">
          <p className="text-base sm:text-lg">
            <span className="font-medium">12</span> posts
          </p>
          <p onClick={() => navigate("followers")} className="text-base sm:text-lg cursor-pointer">
            <span className="font-medium">443</span> followers
          </p>
          <p onClick={() => navigate("following")} className="text-base sm:text-lg cursor-pointer">
            <span className="font-medium">176</span> following
          </p>
        </div>

        <div className="flex flex-col mt-5">
          <h6 className="text-base sm:text-lg font-medium">John Doe</h6>
          <p className="text-base sm:text-lg text-gray-text">Personal blog</p>
          <p className="text-base sm:text-lg">More about me click link below !!</p>
          <p className="text-base sm:text-lg text-blue-900 font-medium cursor-pointer">
            johndoe.dev
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderProfile;
