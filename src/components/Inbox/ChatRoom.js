import React from "react";
import Button from "../Common/Button";
import { HiOutlineInformationCircle, HiOutlineHeart } from "react-icons/hi";
import { FiSmile } from "react-icons/fi";
import { RiGalleryLine } from "react-icons/ri";

const ChatRoom = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col border border-l-0 rounded-r relative">
      <div className="w-full h-[60px] py-[16px] px-[32px] flex items-center justify-between border-b border-gray-text/30">
        <div className="flex items-center">
          <img
            src="https://randomuser.me/api/portraits/men/10.jpg"
            alt="profile"
            className="w-[30px] aspect-square rounded-full"
          />
          <p className="text-lg font-medium ml-3">Ronaldo Lima</p>
        </div>
        <Button>
          <HiOutlineInformationCircle size={26} />
        </Button>
      </div>
      <div className="w-full h-[390px] overflow-auto p-[25px]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi voluptatibus earum quo nihil
        facere sed enim voluptatem minima vitae eius nemo molestiae, ullam nulla dolor mollitia
        nobis eligendi? Rerum non reiciendis neque eos a. Est nobis id quidem minus. Suscipit, neque
        aperiam unde eos commodi culpa voluptate ratione. Odit fugit eligendi consequuntur nostrum
        iste excepturi cupiditate eveniet enim ex ratione ea quaerat officiis ipsam blanditiis, ad
        praesentium numquam sequi possimus id. Possimus, dolorum? Vero mollitia aut reiciendis sit
        ipsa ducimus, error facilis, possimus modi, placeat voluptatibus. Cumque temporibus autem
        amet molestiae ducimus quam unde dicta, sit laborum, earum, fugiat consectetur. Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Animi voluptatibus earum quo nihil facere sed
        enim voluptatem minima vitae eius nemo molestiae, ullam nulla dolor mollitia nobis eligendi?
        Rerum non reiciendis neque eos a. Est nobis id quidem minus. Suscipit, neque aperiam unde
        eos commodi culpa voluptate ratione. Odit fugit eligendi consequuntur nostrum iste excepturi
        cupiditate eveniet enim ex ratione ea quaerat officiis ipsam blanditiis, ad praesentium
        numquam sequi possimus id. Possimus, dolorum? Vero mollitia aut reiciendis sit ipsa ducimus,
        error facilis, possimus modi, placeat voluptatibus. Cumque temporibus autem amet molestiae
        ducimus quam unde dicta, sit laborum, earum, fugiat consectetur. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Animi voluptatibus earum quo nihil facere sed enim voluptatem
        minima vitae eius nemo molestiae, ullam nulla dolor mollitia nobis eligendi? Rerum non
        reiciendis neque eos a. Est nobis id quidem minus. Suscipit, neque aperiam unde eos commodi
        culpa voluptate ratione. Odit fugit eligendi consequuntur nostrum iste excepturi cupiditate
        eveniet enim ex ratione ea quaerat officiis ipsam blanditiis, ad praesentium numquam sequi
        possimus id. Possimus, dolorum? Vero mollitia aut reiciendis sit ipsa ducimus, error
        facilis, possimus modi, placeat voluptatibus. Cumque temporibus autem amet molestiae ducimus
        quam unde dicta, sit laborum, earum, fugiat consectetur. numquam sequi possimus id.
        Possimus, dolorum? Vero mollitia aut reiciendis sit ipsa ducimus, error facilis, possimus
        modi, placeat voluptatibus. Cumque temporibus autem amet molestiae ducimus quam unde dicta,
        sit laborum, earum, fugiat consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Animi voluptatibus earum quo nihil facere sed enim voluptatem minima vitae eius nemo
        molestiae, ullam nulla dolor mollitia nobis eligendi? Rerum non reiciendis neque eos a. Est
        nobis id quidem minus. Suscipit, neque aperiam unde eos commodi culpa voluptate ratione.
        Odit fugit eligendi consequuntur nostrum iste excepturi cupiditate eveniet enim ex ratione
        ea quaerat officiis ipsam blanditiis, ad praesentium numquam sequi possimus id. Possimus,
        dolorum? Vero mollitia aut reiciendis sit ipsa ducimus, error facilis, possimus modi,
        placeat voluptatibus. Cumque temporibus autem amet molestiae ducimus quam unde dicta, sit
        laborum, earum, fugiat consectetur.
      </div>
      <div className="w-full h-[84px] flex items-center justify-center absolute bottom-0 right-0 px-[25px]">
        <div className="w-full rounded-full border border-gray-text/30 py-[10px] px-[16px] flex items-center justify-between ">
          <div className="w-full flex items-center">
            <Button>
              <FiSmile size={28} />
            </Button>
            <input
              type="text"
              placeholder="Message..."
              className="w-full h-full ml-4 outline-none"
            />
          </div>
          <Button>
            <RiGalleryLine size={28} />
          </Button>
          <Button className="ml-3">
            <HiOutlineHeart size={28} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
