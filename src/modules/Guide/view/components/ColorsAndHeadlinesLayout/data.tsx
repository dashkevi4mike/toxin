import { ColorType, HeadlineType } from 'shared/types/models';

export const colors: ColorType[] = [
  {
    name: 'Dark Shade 100%',
    hex: '#1F2041',
    opacity: 1
  },
  {
    name: 'Dark Shade 75%',
    hex: '#1F2041',
    opacity: 0.75
  },
  {
    name: 'Dark Shade 50%',
    hex: '#1F2041',
    opacity: 0.5
  },
  {
    name: 'Dark Shade 25%',
    hex: '#1F2041',
    opacity: 0.25
  },
  {
    name: 'Dark Shade 5%',
    hex: '#1F2041',
    opacity: 0.05
  },
  {
    name: 'Purple 100%',
    hex: '#BC9CFF',
    opacity: 1
  },
  {
    name: 'Purple 50%',
    hex: '#BC9CFF',
    opacity: 0.5
  },
  {
    name: 'Purple 25%',
    hex: '#BC9CFF',
    opacity: 0.25
  },
  {
    name: 'Green 100%',
    hex: '#6FCF97',
    opacity: 1
  },
  {
    name: 'Green 50%',
    hex: '#6FCF97',
    opacity: 0.5
  },
  {
    name: 'Green 25%',
    hex: '#6FCF97',
    opacity: 0.25
  },
  {
    name: 'Red',
    hex: '#E20000',
    opacity: 1
  },
];

export const headlines: HeadlineType[] = [
  {
    type: 'h1',
    text: 'This one is the sub-section or widget title',
  },
  {
    type: 'h2',
    text: 'Next one is the item title inside widgets',
  },
  {
    type: 'h3',
    text: 'This is a label or CTA text',
  },
  {
    type: 'p',
    text: 'This is the body text which is used for most of the design, like paragraphs, lists, etc.',
  }
]