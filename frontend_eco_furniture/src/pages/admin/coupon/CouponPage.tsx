import React, { useEffect } from 'react'
import Coupon from '../../../components/admin/coupon/Coupon'
import initCustom from '../../../assets/js/custom';

function CouponPage() {
    useEffect(()=>{
        initCustom();});
  return (
    <>
    <Coupon/>
    </>
  )
}

export default CouponPage