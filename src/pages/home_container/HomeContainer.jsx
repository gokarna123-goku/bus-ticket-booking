import React from 'react'
import Hero from './hero/Hero'
import BusDetails from './busdetailtry/BusTry'
import Search from './search/Search'
import Category from './category/Category'

const HomeContainer = () => {
    return (
        <>
            {/* Hero */}
            <Hero />
            <Search />
            <Category />
            {/* <BusDetails /> */}
        </>
    )
}

export default HomeContainer