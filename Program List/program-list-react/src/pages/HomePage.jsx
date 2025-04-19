import React from 'react'
import Hero from "../components/Hero";
import HomeCards from '../components/HomeCards';
import ProgramListings from '../components/ProgramListings';
import ViewAllPrograms from '../components/ViewAllPrograms';


const HomePage = () => {
  return (
    <>
    <Hero />
    <HomeCards />
    <ProgramListings isHome={true} />
    <ViewAllPrograms />
    </>
  )
}

export default HomePage