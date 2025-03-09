import React from 'react'
import Banner from '../Components/Banner/Banner'
import Title from '../Components/Title/Title'
import Introduction from '../Components/Intoduction/Introduction'
import SocialIcons from '../Components/SocialIcons/SocialIcons'

const Home = () => {
  return (
    <>
    <Banner/>
    <Title subtitle="Let me introduce" title="My Expertise"/>

    <Introduction/>
    <Title  subtitle="Find me Here" title="Let's Connect  "/>
    <SocialIcons/>

    </>
  )
}

export default Home