import ItemSlider from './ItemSlider'
import ItemPrice from './ItemPrice'

export default function ItemLayout() {


  return (
    <main className='flex max-md:flex-col  items-center justify-evenly h-[calc(100%-5rem)]'>
        <ItemSlider/>
        <ItemPrice />
    </main>
  )
}
