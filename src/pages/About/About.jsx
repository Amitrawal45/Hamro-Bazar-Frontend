import React from "react";
import "./About.css";
import Title from "../../components/Title/Title";
import { assets } from "../../assets/assets";
import NewsLetterBox from "../../components/NewsLetterBox/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            suscipit rem delectus culpa quibusdam eum earum repudiandae nam
            sapiente quae quidem, odit similique illo neque.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            officiis quo reprehenderit ducimus, labore quibusdam porro beatae
            nostrum!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            perferendis quas ut sunt labore enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            officiis quo reprehenderit ducimus, labore quibusdam porro beatae
            nostrum! 
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"}/>

      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20 "> 
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Ouality Assurance:</b>
         <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non eveniet quidem accusantium voluptas reiciendis necessitatibus.</p>

        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Convenience:</b>
         <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, nihil.</p>

        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Exceptional Cudtomer Service:</b>
         <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sunt inventore impedit?</p>

        </div>

      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default About;
