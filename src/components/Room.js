import React from "react";

//Link
import { Link } from "react-router-dom";
//icons
import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";

const Room = ({ room }) => {
  // destructure rooms
  const { id, name, image, size, maxPerson, description, price } = room;
  return (
    <div className='bg-white shadow-2xl min-h-[500px] group'>
      {/*IMG */}
      <div className='overflow-hidden'>
        <img
          className='group-hover:scale-110 transition-all duration-300 w-full'
          src={image}
          alt=''
        />
      </div>
      {/* details */}
      <div className='bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base'>
        <div className='flex justify-between w-[80%]'>
          {/*size*/}
          <div className='flex items-center gap-x-2'>
            <div className='text-accent'>
              <BsArrowsFullscreen className='text-[15px]' />
            </div>
            <div className='flex gap-x-1'>
              <div></div>
              <div>{size}m2</div>
            </div>
          </div>
          {/*Room Capacity*/}
          <div className='flex items-center gap-x-2'>
            <div className='text-accent'>
              <BsPeople className='text-[18px]' />
            </div>
            <div className='flex gap-x-1'>
              <div>{maxPerson}</div>
              <div>Senger</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
