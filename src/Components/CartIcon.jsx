import React from 'react'
import { ShoppingCart } from '@phosphor-icons/react';

export const CartIcon = ({showNoti}) => {

    


  return (
    <div className='relative'>
      <ShoppingCart size={25} aria-hidden="true" />

      {showNoti ? <div className='absolute h-[5px] w-[5px] top-0 right-0 rounded bg-red-600'></div> : null}
    </div>
  );
}
