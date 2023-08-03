import React from 'react'
import Content from './common/Content'
import Card from './common/Card'
import Project from './common/Project/Project'
// import SearchItems from './common/SearchItems'
import Banner from './common/Project/Banner'
import TopHeading from './common/Project/TopHeading'
import PriceHeading from './common/Project/PriceHeading'


function Home() {
  return (
    <div>
      <Content/>
      {/* <SearchItems/> */}
    <Card/>
    <Project/>
    <Banner/>
    <TopHeading/>
    <PriceHeading/>
    </div>
  )
}

export default Home
