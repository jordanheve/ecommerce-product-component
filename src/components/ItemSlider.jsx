import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function ItemSlider() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const plugins = [Thumbnails];

  const classThumbnail = "hover:opacity-90 rounded-xl max-h-24 w-full";
  const classActive = 'opacity-70';

  return (
    <>
      <div className='w-96'>
        <img
          className='w-full rounded-xl mb-5 border-orange-500'
          src={`image-product-${index + 1}.jpg`}
          onClick={() => setOpen(true)}
        />
        <div className='flex cursor-pointer gap-4 max-w-96'>
          <div className={`w-full rounded-2xl border-2 ${index === 0 ? "border-orange-500" : "border-transparent"}`}>
            <img className={`${classThumbnail} ${index === 0 ? classActive : ''}`} src='/image-product-1-thumbnail.jpg' onClick={() => setIndex(0)} />
          </div>
          <div className={`w-full rounded-2xl border-2 ${index === 1 ? "border-orange-500" : "border-transparent"}`}>
            <img className={`${classThumbnail} ${index === 1 ? classActive : ''}`} src='/image-product-2-thumbnail.jpg' onClick={() => setIndex(1)} />
          </div>
          <div className={`w-full rounded-2xl border-2 ${index === 2 ? "border-orange-500" : "border-transparent"}`}>
            <img className={`${classThumbnail} ${index === 2 ? classActive : ''}`} src='/image-product-3-thumbnail.jpg' onClick={() => setIndex(2)} />
          </div>
          <div className={`w-full rounded-2xl border-2 ${index === 3 ? "border-orange-500" : "border-transparent"}`}>
            <img className={`${classThumbnail} ${index === 3 ? classActive : ''}`} src='/image-product-4-thumbnail.jpg' onClick={() => setIndex(3)} />
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
          { src: "/image-product-1.jpg" },
          { src: "/image-product-2.jpg" },
          { src: "/image-product-3.jpg" },
          { src: "/image-product-4.jpg" },
        ]}
      />
    </>
  );
}

