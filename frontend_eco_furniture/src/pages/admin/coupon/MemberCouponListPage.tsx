import React, { useEffect } from 'react'
import MemberCouponList from '../../../components/admin/coupon/MemberCouponList'
import initCustom from '../../../assets/js/custom';

function MemberCouponListPage() {
    useEffect(()=>{
        initCustom();});
  return (
    <>
    <MemberCouponList/>
    </>
  )
}

export default MemberCouponListPage