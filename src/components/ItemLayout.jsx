import React from 'react'
import ItemSlider from './ItemSlider'
import ItemPrice from './itemPrice'

export default function ItemLayout() {


  return (
    <main className='flex items-center justify-center gap-6'>
        <ItemSlider/>
        <ItemPrice/>
    </main>
  )
}
