import React from "react";
import "./output.css";
import "./input.css";

const members = [
  {
    name: "MARIA CULHANE",
    title: "MAKEUP ARTIST",
    description:
      "Fugiat ut fames vel sed luctus dignissim arcu eget. Peleintesque enim id tellus consectetur.frgrtg",
    imgSrc:
      "https://tse2.mm.bing.net/th?id=OIP.3_HUaKDzlLojariqt8vFoQHaHa&pid=Api&P=0&h=220",
    tags: ["#photography", "#makeup", "#artist"],
    phone: ["+123 456 77 88"],
    email: ["info@divueens.com"],
  },
  // Add more member objects here
  {
    name: "JOHN DOE",
    title: "PHOTOGRAPHER",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
    imgSrc:
      "https://tse2.mm.bing.net/th?id=OIP.3_HUaKDzlLojariqt8vFoQHaHa&pid=Api&P=0&h=220",
    tags: ["#photography", "#creative", "#design"],
    phone: ["+123 456 77 88"],
    email: ["info@divueens.com"],
  },
  // Add additional members as needed
  {
    name: "MARIA CULHANE",
    title: "MAKEUP ARTIST",
    description:
      "Fugiat ut fames vel sed luctus dignissim arcu eget. Peleintesque enim id tellus consectetur.",
    imgSrc:
      "https://tse2.mm.bing.net/th?id=OIP.3_HUaKDzlLojariqt8vFoQHaHa&pid=Api&P=0&h=220",
    tags: ["#photography", "#makeup", "#artist"],
    phone: ["+123 456 77 88"],
    email: ["info@divueens.com"],
  },
  {
    name: "MARIA CULHANE",
    title: "MAKEUP ARTIST",
    description:
      "Fugiat ut fames vel sed luctus dignissim arcu eget. Peleintesque enim id tellus consectetur.",
    imgSrc:
      "https://tse2.mm.bing.net/th?id=OIP.3_HUaKDzlLojariqt8vFoQHaHa&pid=Api&P=0&h=220",
    tags: ["#photography", "#makeup", "#artist"],
    phone: ["+123 456 77 88"],
    email: ["info@divueens.com"],
  },
  {
    name: "MARIA CULHANE",
    title: "MAKEUP ARTIST",
    description:
      "Fugiat ut fames vel sed luctus dignissim arcu eget. Peleintesque enim id tellus consectetur.",
    imgSrc:
      "https://tse2.mm.bing.net/th?id=OIP.3_HUaKDzlLojariqt8vFoQHaHa&pid=Api&P=0&h=220",
    tags: ["#photography", "#makeup", "#artist"],
    phone: ["+123 456 77 88"],
    email: ["info@divueens.com"],
  },
  {
    name: "MARIA CULHANE",
    title: "MAKEUP ARTIST",
    description:
      "Fugiat ut fames vel sed luctus dignissim arcu eget. Peleintesque enim id tellus consectetur.",
    imgSrc:
      "https://tse2.mm.bing.net/th?id=OIP.3_HUaKDzlLojariqt8vFoQHaHa&pid=Api&P=0&h=220",
    tags: ["#photography", "#makeup", "#artist"],
    phone: ["+123 456 77 88"],
    email: ["info@divueens.com"],
  },
];

const Team = () => {
  return (
    <div className="bg-[#f2b8cc] p-0 m-0 overflow-x-hidden">
      <div className="relative w-full min-h-screen">
        <div className="bg-black border-solid overflow-hidden relative w-full z-0 xl:h-[80vh]">
          <img
            className="opacity-[0.7] w-full h-auto"
            src="/bg-team3.jpg"
            alt="Background"
          />
          <div class="flex items-center justify-center absolute top-0 left-0 w-full h-full">
            <h1 class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-thin font-roboto">
              Our Team
            </h1>
          </div>
        </div>
        <div className="text-center p-8 sm:p-16 text-black rounded-2xl mx-4 sm:mx-12 my-4 sm:my-8 bg-[#F8E2EA] shadow-custom-black hover:shadow-custom-pink">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {members.map((member, index) => (
              <div
                key={index}
                className="sm:p-[2rem] rounded-[1.4rem] 2xl:pl-10 2xl:ml-[2.5rem] 2xl:mr-[2.5rem] text-center max-w-xs sm:max-w-[28rem] w-full h-[740px] relative bg-[#F8E2EA] cursor-default "
              >
                <div className="sm:max-w-[465px] h-[740px] sm:mx-auto bg-white rounded-[5.5rem]  overflow-hidden max-w-[465px] font-montserrat hover:shadow-custom-pinkc shadow-custom-blackc">
                  <img
                    className="w-full sm:h-[20rem] object-cover"
                    alt="Business Card Image"
                    src={member.imgSrc}
                  ></img>
                  <div className="flex-auto relative text-center sm:pt-[45px] pt-[2px] pr-[49px] pb-[39px] pl-[49px] border border-cyan-300 border-t-0 border-transparent ">
                    <h2 className="font-montserrat text-lg text-center leading-[1.36] tracking-[.7em] uppercase pl-[.7em]">
                      {member.name}
                    </h2>
                    <p className="text-sm font-medium leading-[1.6] text-center tracking-[.4em] uppercase mt-[7px] opacity-50  text-pink-800">
                      {member.title}
                    </p>
                    <p className="mt-[20px] font-normal leading-[24px] text-center tracking-[.025em] opacity-60">
                      {member.description}
                    </p>
                  </div>
                  <div className="flex justify-center flex-wrap font-normal text-xs sm-leading-[30px] tracking-[.2em] uppercase mt-[-7px] mr-[-20px] mb-[-5px] ml-[-20px]">
                    <div className=" mt-[5px] mb-[5px] ml-[20px] mr-[20px]">
                      <img
                        className="w-[15px] before:font-normal before:leading-[1] relative top-[2px] mr-[8px]"
                        Src="https://tse1.mm.bing.net/th?id=OIP.3GB6Y2wiLRKxOfqbxXyt2wHaHa&pid=Api&P=0&h=220"
                      ></img>
                      <span>
                        <a className="text-gray-600" href="*">
                          {member.phone}
                        </a>
                      </span>
                    </div>
                    <div className=" mt-[5px] mb-[5px] ml-[20px] mr-[20px]">
                      <img
                        class="w-[15px] before:font-normal before:leading-[1] relative top-[2px] mr-[8px]"
                        Src="https://static.vecteezy.com/system/resources/previews/000/581/999/original/email-icon-vector-illustration.jpg"
                      ></img>
                      <span className="decoration-inherit ">
                        <a className="text-gray-600" href="*">
                          {member.email}
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="px-6 lg:pt-8 pt-3 pb-2">
                    {member.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-block bg-pink-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
