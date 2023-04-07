import React from 'react';
import { data } from "../data/data.js";


const Projects = () => {

    // projects file
    const project = data;
    //setProject(data);
  
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
           Projects
          </p>
        </div>
      <div>Inventory Management
          <p>(Feb2021-Jun2021) </p>
        <div>                        
            <p className='marginLeft'> • Inventory management is basically used to manage items in store. Basically used to man- age and tracking items.</p> 
            <p className='marginLeft'>  • We analyzed requirements and we have done development on that work flow.</p>
            <p className='marginLeft'>  • Development Using HTML5, CSS3,Jquery,Angular7,Java Script</p>
        </div>
      </div>
     <div> Deploying a multi-tier Websites using AWS EC2</div>
        <p>(Aug2019-Dec2019)</p>
      <div>  
        <p className='marginLeft'>• In this AWS project I launched an EC2 in- stance without the need to invest in hardware up , sothat can develop and deploy applica- tions faster.</p>
        <p className='marginLeft'>• Launch an EC2 Instance</p>
        <p className='marginLeft'>• Enable Auto Scaling of EC2 Broadcast, fire- base for the databse.</p>
        <p className='marginLeft'>• Create an RDS Instance</p>
        <p className='marginLeft'>• Allow traffic from EC2 to RDS Instance</p>
      </div>
      <div>Website Orchestration</div>
        <p className='marginLeft'>• In this AWS project I deployed a high- availability PHP application with an external</p>  
        <p className='marginLeft'>• Amazon RDS database to Elastic Beanstalk. Running a DB instance external to Elastic Beanstalk decouples the database from the lifecycle of our environment</p> 
        <p className='marginLeft'>• Launch an EC2 Instance</p>
        <p className='marginLeft'>• Create an Elastic Beanstalk Environment</p>
        <p className='marginLeft'>• Configure Security Groups and Scaling</p>
{/* container for projects */}
{/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"> */}
          
          {/* Gird Item */}
          {/* {project.map((item, index) => ( */}
  {/* <div
    key={index}
    style={{ backgroundImage: `url(${item.image})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
  > */}

    {/* Hover effect for images */}
    {/* <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider ">
        {item.name}
      </span>
      <div className="pt-8 text-center "> */}
        {/* eslint-disable-next-line */}
        {/* <a href={item.github} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Code
          </button>
        </a> */}
        {/* eslint-disable-next-line */}
        {/* <a href={item.live} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Live
          </button>
        </a> */}
      {/* </div>
    </div>
  </div>
))}


</div> */}
      </div>
    </div>
  );
};

export default Projects;
