import React, { useState,useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import{useTypewriter,Cursor} from 'react-simple-typewriter'
import Laptop from './lol.png';
import Server from './server.png';
import Serve from './serve.png';
import KI from './der.png';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import axios from 'axios';
import Moment from 'react-moment';


const url='https://api.openweathermap.org/data/2.5/weather?q=Giza&units=imperial&appid=9f2e3b6fc2ce504b3e7bea6aac8f6f8e'


function App() {




  // const sortName = () => {
  //   setContacts(
  //     data.sort((a, b) => {
  //       return a.first_name.toLowerCase() < a.first_name.toLowerCase()
  //         ? -1
  //         : a.first_name.toLowerCase() > a.first_name.toLowerCase()
  //         ? 1
  //         : 0;
  //     })
  //   );
  // };

  return (
    <div className='bg-gray-950 w-full h-full'>
      <NavBar/>
      <Hero/>
      <Analytics/>
      <Features/>
      <News/>
      <Footer/>

    </div>
  );
}
function NavBar(){
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white w-full'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 '>Home</li>
        <li className='p-4 font-bold hover:text-white cursor-pointer text-[#00df9a]'>Company</li>
        <li className='p-4 text-[#00df9a]'>Resources</li>
        <li className='p-4 text-[#00df9a]'>About</li>
        <li className='p-4 text-[#00df9a]'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
};

function Hero(){
  const [typo]=useTypewriter({
    words:['SASS','BTC','BVT'],
    loop:{},
    typeSpeed:120,
  })
  const[data,Setdata]=useState(null)
  useEffect(()=>{
 axios.get(url).then((response)=>{
   Setdata(response.data)
 }).catch((error)=>{
   console.log(error.message)
  })
 }


 
 
  ,[]);
  console.log(data);
  if(!data) return null;
  let today=new Date()
  let greeting=()=>{
    if(today.getHours()>=5 && today.getHours()<11){
      return 'Good morning Sunshine'
    }
    else if(today.getHours()>11 && today.getHours()<=18){
      return 'Good afternoon Baby'
    }
    else if(today.getHours()>18 && today.getHours()<=24){
      return 'Good evening Baby'
    }
    else{
      return 'What the hell are you doing now?'
    }
  }
  return (
    <div className='curved'>
    <div className='grid grid-cols-1 gap-y-[20px]   mt-[200px] md:grid-cols-2 ah '>
    <div className='text-white ml-20 '>
      <div className='max-w-[800px] mt-[-96px] w-6/6 h-screen mx-auto  justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          GROWING WITH DATA ANALYTICS 
          <p>
          {data.main.temp.toFixed(2)}
          <br/>
          <Moment format='LT'></Moment>
          <br/>
          {greeting()}
          </p>
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Grow with data.
        </h1>
        <div className='flex '>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible financing for
            <br/>
            <span style={{color:'#00df9a', fontWeight:'bold'}}>
              {typo}
            </span>
            <span style={{color:'white'}}>
            <Cursor/>
            </span>
           
          </p>
      
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
    <div className='mt-[-6.75rem] pt-0'>
      <img src={Laptop} alt='me' className='rounded-md w-[400px] h-[538px] sm:w-full '></img>
    </div>
    </div>
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{width:'100%'}}>
  <path fill="#ffffff" fill-opacity="1" d="M0,96L30,90.7C60,85,120,75,180,101.3C240,128,300,192,360,197.3C420,203,480,149,540,138.7C600,128,660,160,720,170.7C780,181,840,171,900,138.7C960,107,1020,53,1080,42.7C1140,32,1200,64,1260,74.7C1320,85,1380,75,1410,69.3L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
</svg>
   </div>
  );
};
const Analytics = () => {

 
 

  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>DATA ANALYTICS DASHBOARD
            <br/>
            
          </p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
            <br/>
            
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};
function Features(){
  return(<div>
    <div className='flex justify-center p-2 mr-20 leading-normal'>
    <p className='mx-auto text-[#00df9a] flex font-bold  mt-12 ml-27 text-7xl sm:text-6xl pl-[100px] py-10 px-100 text-center'>Our Features
      <br/>
    </p>
    
    </div>
    <div className='w-full grid mt-20 px-5 py-5 space-y-15 md:grid-cols-3 mx-auto space-x-4  '>
<div className='flex flex-col rounded-lg hover:scale-105 duration-300 shadow-xl bg-white p-4 my-4'>
<img className='w-20 mx-auto mt-[-3rem] bg-white' src={Server} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
              <p className='text-center text-4xl font-bold'>$149</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                  <p className='py-2 border-b mx-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
</div>
</div>
<div className='flex flex-col rounded-lg hover:scale-105 duration-300 shadow-xl bg-white p-4 my-4'>
<img className='w-20 mx-auto mt-[-3rem] bg-white' src={Serve} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
              <p className='text-center text-4xl font-bold'>$149</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                  <p className='py-2 border-b mx-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
</div>
</div>
<div className='flex flex-col rounded-lg hover:scale-105 duration-300 shadow-xl bg-white p-4 my-4'>
<img className='w-20 mx-auto mt-[-3rem] bg-white' src={KI} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
              <p className='text-center text-4xl font-bold'>$149</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                  <p className='py-2 border-b mx-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
</div>
</div>
  </div>
  </div>);
}
function News(){

  const url1='https://goquotes-api.herokuapp.com/api/v1/random?count=1';
  const[quote,Setquote]=useState(null)
  useEffect(()=>{
 axios.get(url1).then((response)=>{
   Setquote(response.quote)
 }).catch((error)=>{
   console.log(error.message)
  })
 }
  ,[]);
  console.log(quote);
  

  return(
    <div className='w-full py-16 text-black px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter Email'
            />
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Notify Me
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our{' '}
            <span className='text-[#00df9a]'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
  );
};






export default App;
