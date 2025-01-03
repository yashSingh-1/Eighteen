import Footer from "@/components/Features/Footer";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-full bg-gray-900 text-white p-4">
      <div
        id="title"
        className="font-mono text-2xl font-bold text-center mt-5 mb-5"
      >
        Seomthing great to read and which people wanna read about!s
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 justify-center items-center">
        <div className="col-span-2 flex justify-end items-end">
          <Image
            src={"https://placehold.co/600x400.png"}
            alt="main image"
            className="w-[400px] md:w-[500px] rounded-lg my-4 h-fit"
            width={100}
            height={100}
          />
        </div>
        <div className="col-span-2 m-4 p-4 max-w-[500px] flex justify-center items-center ">
          Some rid ethat dic stuff that people like to read Some rid ethat dic
          stuff that people like to read Some rid ethat dic stuff that people
          like to read Some rid ethat dic stuff that people like to read Some
          rid ethat dic stuff that people like to read Some rid ethat dic stuff
          that people like to read Some rid ethat dic stuff that people like to
          read Some rid ethat dic stuff that people like to read Some rid ethat
          dic stuff that people like to read
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="p-4 m-4 w-full md:w-[800px]">
          Some rid ethat dic stuff that people like to read Some rid ethat dic
          stuff that people like to read Some rid ethat dic stuff that people
          like to read Some rid ethat dic stuff that people like to read Some
          rid ethat dic stuff that people like to read Some rid ethat dic stuff
          that people like to read Some rid ethat dic stuff that people like to
          read Some rid ethat dic stuff that people like to read Some rid ethat
          dic stuff that people like to read
        </div>
        <div>
        <Image
            src={"https://placehold.co/600x400.png"}
            alt="main image"
            className="w-[400px] md:w-[500px] rounded-lg my-4 h-fit"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default page;
