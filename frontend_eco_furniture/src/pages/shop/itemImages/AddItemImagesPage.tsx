import React, { useEffect } from 'react'
import AddItemImages from '../../../components/shop/itemImages/AddItemImages'
import initCustom from '../../../assets/js/custom';

function AddItemImagesPage() {
  useEffect(()=>{
    initCustom();});
  return (
    <>

        <AddItemImages/>
    </>
  )
}

export default AddItemImagesPage