import React from 'react'
import Hero from './hero/Hero'
import BusDetails from './busdetailtry/BusTry'
import Search from './search/Search'
import Category from './category/Category'
import Operator from './operator/Operator'
import Offer from './offer/Offer'

const HomeContainer = () => {
    return (
        <>
            {/* Hero */}
            <Hero />
            <Search />
            <Category />
            <Offer />
            {/* <Operator /> */}
            {/* <BusDetails /> */}
        </>
    )
}

export default HomeContainer