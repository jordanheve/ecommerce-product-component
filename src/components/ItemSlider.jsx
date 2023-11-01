import  { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import IconPrevious from '../assets/icon-previous.svg?react'
import IconNext from '../assets/icon-next.svg?react'


export default function ItemSlider() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const plugins = [Thumbnails];

  const classThumbnail = "object-cover hover:opacity-90 rounded-xl max-h-24 w-full";
  const classActive = 'opacity-70';
  const classImgBtn = 'absolute top-[calc(50%-1rem)] bg-white h-8 w-8 flex items-center justify-center rounded-full'
  const handleNextImg = () => {
    if(index > 2) {
      setIndex(0)
    } else  {
      setIndex(index+1)
    }
  }

  const handlePrevImg = () => {
    if (index < 1) {
      setIndex(3)
    } else {
      setIndex(index-1)
    }
  }
  return (
    <>
      <div className='w-2/5 max-md:w-4/6 max-sm:w-full max-sm:h-2/5 '>
      <div className='relative h-full   '>
        <img
          className='h-full cursor-pointer w-full max-sm:object-cover  rounded-xl max-sm:rounded-none mb-5 border-orange-500'
          src={`image-product-${index + 1}.jpg`}
          onClick={() => setOpen(true)}
        />
        <div className='md:hidden'>
        <button 
        onClick={handlePrevImg}
        className={"left-2 "+classImgBtn} >
        <div className='mr-1'>
        <IconPrevious className="stroke-slate-800 hover:stroke-orange-500"/>
        </div>
        </button>
        <button
        className={'right-2 '+classImgBtn} 
        onClick={handleNextImg}
        >
         <div className='ml-1'>
        <IconNext className="stroke-slate-800 hover:stroke-orange-500"/>
        </div>
        </button>
        </div>
      </div>
        
        <div className='grid grid-cols-4 gap-4 cursor-pointer max-md:hidden'>
          <div className={`w-full rounded-2xl border-2 ${index === 0 ? "border-orange-500" : "border-transparent"}`}>
            <img className={`${classThumbnail} ${index === 0 ? classActive : ''} `} src='image-product-1-thumbnail.jpg' onClick={() => setIndex(0)} />
          </div>
          <div className={`w-full rounded-2xl border-2 ${index === 1 ? "border-orange-500" : "border-transparent"}`}>
            <img className={`${classThumbnail} ${index === 1 ? classActive : ''}`} src='image-product-2-thumbnail.jpg' onClick={() => setIndex(1)} />
          </div>
          <div className={`w-full rounded-2xl border-2 ${index === 2 ? "border-orange-500" : "border-transparent"}`}>
            <img className={`${classThumbnail} ${index === 2 ? classActive : ''}`} src='image-product-3-thumbnail.jpg' onClick={() => setIndex(2)} />
          </div>
          <div className={`w-full rounded-2xl border-2 ${index === 3 ? "border-orange-500" : "border-transparent"}`}>
            <img className={`${classThumbnail} ${index === 3 ? classActive : ''}`} src='image-product-4-thumbnail.jpg' onClick={() => setIndex(3)} />
          </div>
        </div>
      </div>

      <Lightbox
        plugins={plugins}
        thumbnails={{
          position: "bottom",
          width: 120,
          height: 80,
          border: 1,
          borderRadius: 4,
          padding: 4,
          gap: 16,
          showToggle: true,
        }}
        index={index}
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: "image-product-1.jpg" },
          { src: "image-product-2.jpg" },
          { src: "image-product-3.jpg" },
          { src: "image-product-4.jpg" },
        ]}
      />
    </>
  );
}

