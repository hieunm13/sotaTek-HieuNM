import { IImageData } from './models/imageData';

export const listImageData: IImageData[] = [
  {
    id: 0,
    background_url: 'mountain0.jpg',
    hitZones: [
      {
        x: '30%',
        y: '28%',
        goto: 1,
        showPart: 0,
      },
    ],
  },
  {
    id: 1,
    background_url: 'mountain1.jpg',
    hitZones: [
      {
        x: '40%',
        y: '15%',
        goto: 2,
        showPart: 0,
      },
      {
        x: '80%',
        y: '85%',
        goto: 0,
        showPart: 2,
      },
    ],
  },
  {
    id: 2,
    background_url: 'mountain2.jpg',
    hitZones: [
      {
        x: '60%',
        y: '50%',
        goto: 3,
        showPart: 2,
      },
      {
        x: '60%',
        y: '60%',
        goto: 1,
        showPart: 0,
      },
    ],
  },
  {
    id: 3,
    background_url: 'mountain3.jpg',
    hitZones: [
      {
        x: '47%',
        y: '60%',
        goto: 4,
        showPart: 2,
      },
      {
        x: '60%',
        y: '25%',
        goto: 2,
        showPart: 0,
      },
    ],
  },
  {
    id: 4,
    background_url: 'mountain4.jpg',
    hitZones: [
      {
        x: '45%',
        y: '54%',
        goto: 5,
        showPart: 2,
      },
      {
        x: '60%',
        y: '68%',
        goto: 3,
        showPart: 0,
      },
    ],
  },
  {
    id: 5,
    background_url: 'mountain5.jpg',
    hitZones: [
      {
        x: '70%',
        y: '50%',
        goto: 4,
        showPart: 0,
      },
      {
        x: '80%',
        y: '50%',
        goto: 6,
        showPart: 1,
      },
      {
        x: '60%',
        y: '50%',
        goto: 7,
        showPart: 2,
      },
    ],
  },
  {
    id: 6,
    background_url: 'mountain6.jpg',
    hitZones: [
      {
        x: '60%',
        y: '40%',
        goto: 5,
        showPart: 0,
      },
    ],
  },
  {
    id: 7,
    background_url: 'mountain7.jpg',
    hitZones: [
      {
        x: '75%',
        y: '17%',
        goto: 5,
        showPart: 0,
      },
      {
        x: '64%',
        y: '90%',
        goto: 8,
        showPart: 2,
      },
      {
        x: '64%',
        y: '24%',
        goto: 9,
        showPart: 2,
      },
    ],
  },
  {
    id: 8,
    background_url: 'mountain8.jpg',
    hitZones: [
      {
        x: '64%',
        y: '80%',
        goto: 9,
        showPart: 0,
      },
      {
        x: '64%',
        y: '60%',
        goto: 7,
        showPart: 1,
      },
    ],
  },
  {
    id: 9,
    background_url: 'mountain9.jpg',
    hitZones: [
      {
        x: '56%',
        y: '17%',
        goto: 7,
        showPart: 0,
      },
      {
        x: '56%',
        y: '50%',
        goto: 8,
        showPart: 1,
      },
    ],
  },
];
