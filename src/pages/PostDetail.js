import React from "react";
import Button from "../components/Common/Button";
import Layout from "../components/Layout/Layout";
import {
  HiDotsHorizontal,
  HiOutlineBookmark,
  HiOutlineChat,
  HiOutlineHeart,
  HiOutlinePaperAirplane,
} from "react-icons/hi";
import { FiSmile } from "react-icons/fi";

const PostDetail = () => {
  return (
    <Layout>
      <div className="grid grid-cols-3 h-[78vh] border border-gray-text/30">
        <div className="col-span-2 bg-white overflow-hidden">
          <img
            src="https://source.unsplash.com/collection/1103088/one-color"
            alt="post-detail"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 bg-white relative">
          <div className="w-full h-[60px] border-b border-gray-text/30 flex items-center justify-between p-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="profile"
                className="w-[35px] aspect-square rounded-full"
              />
              <p className="text-base font-medium text-black">johnDoe</p>
              <p className="text-base font-medium text-black">•</p>
              <Button className="font-medium text-base">Following</Button>
            </div>
            <Button>
              <HiDotsHorizontal className="text-black" size={20} />
            </Button>
          </div>

          <div className="w-full h-auto overflow-auto p-4">
            <div className="flex items-start space-x-3">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="profile"
                className="w-[35px] aspect-square rounded-full"
              />
              <p className="text-base  text-black">
                <span className="font-medium">johnDoe </span>Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Eum nostrum dolor provident ducimus, officiis placeat fugiat saepe
                laboriosam vel eius accusantium voluptate nam quo sed voluptatem assumenda corrupti
                cum adipisci similique unde quis. Sint distinctio corrupti fuga, aspernatur
                obcaecati enim! Quis repellat distinctio assumenda accusamus expedita, ipsum dolorum
                esse fugiat.
              </p>
            </div>
          </div>

          <div className="w-full h-[170px] absolute bottom-0 right-0 border-t border-gray-text/30 bg-white">
            <div className="w-full h-full relative">
              <div className="w-full p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-between space-x-4">
                    <Button>
                      <HiOutlineHeart size={28} />
                    </Button>
                    <Button>
                      <HiOutlineChat size={28} />
                    </Button>
                    <Button>
                      <HiOutlinePaperAirplane size={28} />
                    </Button>
                  </div>
                  <Button>
                    <HiOutlineBookmark size={28} />
                  </Button>
                </div>
                <div className="flex items-center">
                  <p className="text-base font-medium">322 likes</p>
                </div>
                <p className="text-[10px] text-gray-text uppercase">10 minutes ago</p>
              </div>

              <div className="h-[53px] border-t border-gray-text/30 p-[16px] flex items-center justify-between absolute bottom-0 right-0 w-full">
                <div className="flex items-center w-full space-x-4">
                  <FiSmile size={28} />
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="w-full text-base outline-none"
                    required
                  />
                </div>
                <Button>Post</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostDetail;
