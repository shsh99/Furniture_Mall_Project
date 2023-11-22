import React, { useEffect } from 'react'
import initCustom from '../../../assets/js/custom';
import ItemImages from '../../../components/shop/itemImages/ItemImages';

function ItemImagesPage() {
  useEffect(()=>{
    initCustom();});
  return (
    <>


       <ItemImages/>
       
    </>
  )
}

export default ItemImagesPage