import React from 'react';
import Gallery from 'react-photo-gallery';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Gallery.css';

const PHOTO_SET = [
  {
    src: 'https://s3-us-west-2.amazonaws.com/tnr-pics/showerCustom1.JPG',
    srcset: [
      'https://s3-us-west-2.amazonaws.com/tnr-pics/showerCustom1.JPG 1024w',
      'https://s3-us-west-2.amazonaws.com/tnr-pics/showerCustom1.JPG 800w',
      'https://s3-us-west-2.amazonaws.com/tnr-pics/showerCustom1.JPG 500w',
      'https://s3-us-west-2.amazonaws.com/tnr-pics/showerCustom1.JPG 320w',
    ],
    sizes: ['(min-width: 480px) 50vw', '(min-width: 1024px) 33.3vw', '100vw'],
    width: 600,
    height: 600,
    alt: 'image 1',
  },
  {
    src: 'https://s3-us-west-2.amazonaws.com/tnr-pics/showerBrown.JPG',
    srcset: [
      'http://example.co m/example/img2_1024.jpg 1024w',
      'http://example.com/example/img2_800.jpg 800w',
      'http://example.com/example/img2_500.jpg 500w',
      'http://example.com/example/img2_320.jpg 320w',
    ],
    sizes: ['(min-width: 480px) 50vw', '(min-width: 1024px) 33.3vw', '100vw'],
    width: 600,
    height: 600,
    alt: 'image 2',
  },
  {
    src: 'https://s3-us-west-2.amazonaws.com/tnr-pics/IMG_1898.JPG',
    srcset: [
      'http://example.co m/example/img2_1024.jpg 1024w',
      'http://example.com/example/img2_800.jpg 800w',
      'http://example.com/example/img2_500.jpg 500w',
      'http://example.com/example/img2_320.jpg 320w',
    ],
    sizes: ['(min-width: 480px) 50vw', '(min-width: 1024px) 33.3vw', '100vw'],
    width: 600,
    height: 600,
    alt: 'image 3',
  },
  {
    src: 'https://s3-us-west-2.amazonaws.com/tnr-pics/showerBrown.JPG',
    srcset: [
      'http://example.co m/example/img2_1024.jpg 1024w',
      'http://example.com/example/img2_800.jpg 800w',
      'http://example.com/example/img2_500.jpg 500w',
      'http://example.com/example/img2_320.jpg 320w',
    ],
    sizes: ['(min-width: 480px) 50vw', '(min-width: 1024px) 33.3vw', '100vw'],
    width: 600,
    height: 600,
    alt: 'image 3',
  },
];

class ImgGallery extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.header}>Master Showers</div>
        <div>
          <Gallery photos={PHOTO_SET} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ImgGallery);
