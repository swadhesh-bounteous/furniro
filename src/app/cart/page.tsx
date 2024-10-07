import { ShopFeatureSection, UpperSection } from '@/components'
import CartSection from '@/components/cartsection/CartSection'
import Footer from '@/components/common/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <UpperSection pageName="Cart"/>
      <CartSection/>
      <ShopFeatureSection />
      <Footer />
    </div>
  )
}

export default page