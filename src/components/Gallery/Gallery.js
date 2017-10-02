import React from 'react';
import Gallery from 'react-photo-gallery';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Gallery.css';

const PHOTO_SET = [
  {
    src: 'https://s3-us-west-2.amazonaws.com/tnr-pics/showerSteam.jpg',
    margin: '4',
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
    src: 'https://s3-us-west-2.amazonaws.com/tnr-pics/showerUpDownDeco.JPG',
    srcset: [
      'http://example.co m/example/img2_1024.jpg 1024w',
      'http://example.com/example/img2_800.jpg 800w',
      'http://example.com/example/img2_500.jpg 500w',
      'http://example.com/example/img2_320.jpg 320w',
    ],
    sizes: ['(min-width: 480px) 50vw', '(min-width: 1024px) 33.3vw', '100vw'],
    width: 600,
    height: 600,
    alt: 'tub surround',
  },
  {
    src: 'https://s3-us-west-2.amazonaws.com/tnr-pics/floorSlate1024.JPG',
    srcset: [
      'http://example.co m/example/img2_800.jpg 1024w',
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
    src: 'https://s3-us-west-2.amazonaws.com/tnr-pics/splashGlass2.JPG',
    srcset: [
      'http://example.co m/example/img2_1024.jpg 1024w',
      'http://example.com/example/img2_800.jpg 800w',
      'http://example.com/example/img2_500.jpg 500w',
      'http://example.com/example/img2_320.jpg 320w',
    ],
    sizes: ['(min-width: 480px) 50vw', '(min-width: 1024px) 33.3vw', '100vw'],
    width: 600,
    height: 600,
    alt: 'image 4',
  },
  {
    src: 'https://s3-us-west-2.amazonaws.com/tnr-pics/showerWhiteBrick.JPG',
    srcset: [
      'http://example.co m/example/img2_1024.jpg 1024w',
      'http://example.com/example/img2_800.jpg 800w',
      'http://example.com/example/img2_500.jpg 500w',
      'http://example.com/example/img2_320.jpg 320w',
    ],
    sizes: ['(min-width: 480px) 50vw', '(min-width: 1024px) 33.3vw', '100vw'],
    width: 600,
    height: 600,
    alt: 'image 4',
  },
  {
    src: 'https://s3-us-west-2.amazonaws.com/tnr-pics/shower45.JPG',
    srcset: [
      'http://example.co m/example/img2_1024.jpg 1024w',
      'http://example.com/example/img2_800.jpg 800w',
      'http://example.com/example/img2_500.jpg 500w',
      'http://example.com/example/img2_320.jpg 320w',
    ],
    sizes: ['(min-width: 480px) 50vw', '(min-width: 1024px) 33.3vw', '100vw'],
    width: 600,
    height: 600,
    alt: 'Master Shower on a 45 degree angle',
  },
  {
    src: 'https://s3-us-west-2.amazonaws.com/tnr-pics/entrySlate.JPG',
    srcset: [
      'http://example.co m/example/img2_1024.jpg 1024w',
      'http://example.com/example/img2_800.jpg 800w',
      'http://example.com/example/img2_500.jpg 500w',
      'http://example.com/example/img2_320.jpg 320w',
    ],
    sizes: ['(min-width: 480px) 50vw', '(min-width: 1024px) 33.3vw', '100vw'],
    width: 600,
    height: 600,
    alt: 'Entry Slate Floor',
  },
  {
    src: 'https://s3-us-west-2.amazonaws.com/tnr-pics/floorHardwoodGray.JPG',
    srcset: [
      'http://example.co m/example/img2_1024.jpg 1024w',
      'http://example.com/example/img2_800.jpg 800w',
      'http://example.com/example/img2_500.jpg 500w',
      'http://example.com/example/img2_320.jpg 320w',
    ],
    sizes: ['(min-width: 480px) 50vw', '(min-width: 1024px) 33.3vw', '100vw'],
    width: 600,
    height: 600,
    alt: 'Floor tile that looks like hardwood',
  },
  {
    src: 'https://s3-us-west-2.amazonaws.com/tnr-pics/showerMasterWhite.JPG',
    srcset: [
      'http://example.co m/example/img2_1024.jpg 1024w',
      'http://example.com/example/img2_800.jpg 800w',
      'http://example.com/example/img2_500.jpg 500w',
      'http://example.com/example/img2_320.jpg 320w',
    ],
    sizes: ['(min-width: 480px) 50vw', '(min-width: 1024px) 33.3vw', '100vw'],
    width: 600,
    height: 600,
    alt: 'Floor tile that looks like hardwood',
  },
];

class ImgGallery extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.caption}>Create the space you always wanted</div>
        <Gallery photos={PHOTO_SET} margin="4" columns={5} />
      </div>
    );
  }
}

export default withStyles(s)(ImgGallery);
