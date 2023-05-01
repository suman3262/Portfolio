import React from "react";

import project1 from '../images/portfolio/opera.png'
import project2 from '../images/portfolio/1.PNG'
import project3 from '../images/portfolio/2.PNG'
import project4 from '../images/portfolio/3.PNG'
import project5 from '../images/portfolio/4.PNG'
import dashbord from '../images/portfolio/5.png'
import resumebuilder from '../images/portfolio/6.png'
import linkedin from '../images/portfolio/7.png'

const Portfolio = () => {
  const portfolios = [
    {
      id:0,
      src:project5 ,
      github:"https://github.com/suman3262/React-Nike-Store-2.0" ,
      demo:"https://nike-store-jsstack.vercel.app/"
    },
    {
      id: 1,
       src: project1,
       github:'https://github.com/suman3262/ecommerce',
       demo:'https://opreastore.netlify.app',
    },
    {
      id: 2,
      src: project2,
      github:'https://github.com/suman3262/React-Weather-APP',
      demo:'https://suman3262.github.io/React-Weather-APP/'
    },
    {
      id: 3,
      src: project3,
      github:'https://github.com/suman3262/React-Crypto-App',
      demo:'https://bitbashcrypto.netlify.app/'
    },
    {
      id: 4,
      src: project4,
      github:'https://github.com/suman3262/React-CRUD-App',
      demo:'effulgent-griffin-550a83.netlify.app/'
    },
    {
      id:5,
      src:dashbord,
      github:'https://github.com/suman3262/React-Dashbord',
      demo:'https://admindashbordpro.netlify.app'
    },
    {
      id:6,
      src:resumebuilder,
      github:'https://github.com/suman3262/Resume-Builder-with-React-',
      demo:'https://resumebuilder01.netlify.app/'
    },
    {
      id:7,
      src: linkedin,
      github:'https://github.com/suman3262/React-Linkedin-Clone',
      demo:'https://linkedinclonepro.netlify.app'
    }
 
   
   
  
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-auto"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,github,demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="src"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo}>demo</a>
                </button>

                <a href={github}>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
