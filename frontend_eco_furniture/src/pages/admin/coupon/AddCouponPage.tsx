import React, { useEffect } from 'react'
import AddCoupon from '../../../components/admin/coupon/AddCoupon'
import initCustom from '../../../assets/js/custom';

function AddCouponPage() {
    useEffect(()=>{
        initCustom();});
  return (
    <>
    <AddCoupon/>
    </>
  )
}

export default AddCouponPage