import React from 'react'

export default function PricingCard() {
  return (
 <div className=" relative z-30 rounded-[20px]  h-[588px] px-19 pt-30  pb-23  bg-[#F5F5F5] mx-14 -translate-y-1/2 text-primary">
      <div className=" ">
        <div >
          <img src='/setapp-logo.svg' />
        </div>
        
        <h3 className="mb-[61px] mt-[21px] text-[46px] font-semibold tracking-[1.3px] leading-[59.8px] ">
          Superpowers starting $9.99/month.
          <br />
          Free for 7 days.
        </h3>
        
        <div className="flex flex-wrap gap-3">
          <button className='rounded-md bg-primary text-white px-[31px] py-[13px] '>Get started now</button>
          <button variant="outline" className='rounded-md border stroke-primary  px-[31px] py-[13px] '>More about Setapp</button>
        </div>
      </div>
    </div>
  )
}
