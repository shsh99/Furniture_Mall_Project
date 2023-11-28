import React, { useEffect } from 'react'
import CouponList from '../../../components/admin/coupon/CouponList'
import initCustom from '../../../assets/js/custom';

function CouponListPage() {
    useEffect(()=>{
        initCustom();});
  return (
    <>
    <CouponList/>
    </>
  )
}

export default CouponListPage