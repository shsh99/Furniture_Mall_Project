import React, { useEffect } from 'react'
import initCustom from '../../../assets/js/custom';
import ItemImagesList from '../../../components/shop/itemImages/ItemImagesList';

function ItemImageListPage() {
  useEffect(()=>{
    initCustom();
	
})
  return (
    <>

        <ItemImagesList/>
    
    </>
  )
}

export default ItemImageListPage