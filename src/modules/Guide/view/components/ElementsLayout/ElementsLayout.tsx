import React from 'react';
import block from 'bem-cn';

import ArrowForward from '@material-ui/icons/ArrowForward';

import { Layout } from '../../../../shared';

import { routes } from 'modules/routes';

import { 
  Input, EmailInput, PasswordInput, MaskedInput,
  Checkbox, RadioGroup, ToggleButton,
  LikeButton, RateButton, Button, Expander,
  Text, RangeSlider, BulletList, Dropdown, NumberInput
} from 'shared/view/elements';

import './ElementsLayout.scss';

type Props = {};

const b = block('elements-layout');

const headerLinks = [
  { title: 'Home', href: '404' },
  { title: 'Guide', href: routes.guide["colors-and-headlines"].getRedirectPath(), links: [
    { title: 'Colors & Headlines', href: routes.guide["colors-and-headlines"].getRedirectPath() },
    { title: 'Elements', href: routes.guide.elements.getRedirectPath() },
    { title: 'Components', href: routes.guide.components.getRedirectPath() }
  ]},
  { title: 'Careers', href: '404' },
  { title: 'News', href: '404' },
];

const footerLinks = [
  { 
    title: 'Navigation', 
    mobileInvisible: true,
    links: [
      { title: 'About Us', href: '404' },
      { title: 'News', href: '404' },
      { title: 'Support', href: '404' },
      { title: 'Products', href: '404' },
    ]
  },
  { 
    title: 'About Us',
    mobileInvisible: false,
    links: [
      { title: 'Who we are', href: '404' },
      { title: 'Our team', href: '404' },
      { title: 'Careers', href: '404' },
      { title: 'Investors', href: '404' },
    ]
  },
  { 
    title: 'Support',
    mobileInvisible: false,
    links: [
      { title: 'Documentation', href: '404' },
      { title: 'Community', href: '404' },
      { title: 'Get in Touch', href: '404' },
    ]
  }
];

const radioButtons = {
  name: 'male',
  options: [
    { label: 'Women', value: 'women', name: 'male' },
    { label: 'Men', value: 'men', name: 'male' },
  ],
  initialValue: 'men',
  onChange: () => {},
};

function ElementsLayoutComponent(_props: Props) {

  return (
    <Layout headerLinks={headerLinks} footerLinks={footerLinks}>
      <div className={b()}>
        <div className={b('inner')}>
          <div className={b('column')}>
            <div className={b('element')}>
              <Input
                name="name"
                label="text field"
                placeholder="Name"
                isRequired
                onChange={()=>{}}
                validateOnChange
              />
            </div>
            <div className={b('element')}>
              <EmailInput
                name="email"
                label="email field"
                placeholder="Email"
                isRequired
                onChange={()=>{}}
                validateOnChange
              />
            </div>
            <div className={b('element')}>
              <PasswordInput
                name="password"
                label="Password field"
                placeholder="Password"
                isRequired
                onChange={()=>{}}
                validateOnChange
              />
            </div>
            <div className={b('element')}>
              <EmailInput
                name="email"
                label="Subscription Text Field"
                placeholder="Email"
                isRequired
                icon={<ArrowForward />}
                onChange={()=>{}}
                onIconClick={()=>{}}
                validateOnChange
              />
            </div>
            <div className={b('element')}>
              <MaskedInput
                placeholder="DD.MM.YYYY"
                name="date"
                label="Masked Date Field"
                maskType="date"
                isRequired
                onChange={()=>{}}
                validateOnChange={false}
              />
            </div>
            <div className={b('element')}>
              <MaskedInput
                placeholder="Card number"
                name="card"
                label="Masked Card Number Field"
                maskType="visa"
                isRequired
                onChange={()=>{}}
                validateOnChange={false}
              />
            </div>
          </div>
          <div className={b('column')}>
            <div className={b('element')}>
              <h3 className={b('group-title')}>Checkbox</h3>
              <Checkbox
                label="Pets allowed"
                initialChecked={false}
                name="pets"
              />
            </div>
            <div className={b('element')}>
              <h3 className={b('group-title')}>Radio buttons</h3>
              <RadioGroup
                {...radioButtons}
              />
            </div>
            <div className={b('element')}>
              <h3 className={b('group-title')}>Toggle button</h3>
              <ToggleButton
                label="Subscribe to newsletters"
                initialChecked={false}
                name="news"
                onChange={() => {}}
              />
            </div>
            <div className={b('element')}>
              <h3 className={b('group-title')}>Like button</h3>
              <LikeButton
                initialChecked={false}
                name="posts"
                count={1256}
                onChange={() => {}}
              />
            </div>
            <div className={b('element')}>
              <h3 className={b('group-title')}>Rate button</h3>
              <RateButton
                initialCount={3}
                totalCount={5}
                onChange={() => {}}
              />
            </div>
            <div className={b('element')}>
              <Expander
                title="expander with any content"
                isOpen={false}
                forceChange={()=>{}}
                onChange={()=>{}}
              >
                <Text>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam eget nullam pellentesque aliquam curabitur cociis.</Text>
              </Expander>
            </div>
            <div className={b('element')}>
              <Expander
                title="disabled opened expander"
                isOpen
                disabled
                forceChange={()=>{}}
                onChange={()=>{}}
              >
                <Text>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam eget nullam pellentesque aliquam curabitur cociis.</Text>
              </Expander>
            </div>
            <div className={b('element')}>
              <Dropdown
                label="dropdown"
                placeholder="Who with you?"
              >
                <Text>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam eget nullam pellentesque aliquam curabitur cociis.</Text>
              </Dropdown>
            </div>
            <div className={b('element')}>
              <Dropdown
                label="disabled dropdown"
                placeholder="Who with you?"
                disabled
              />
            </div>
            <div className={b('element')}>
              <Dropdown
                label="dropdown with form"
                placeholder="Who with you?"
              >
                <NumberInput
                  name="adult"
                  label="Adults"
                  min={1}
                  max={4}
                  initialValue={1}
                  onChange={()=>{}}
                />
              </Dropdown>
            </div>
          </div>
          <div className={b('column')}>
            <div className={b('element')}>
              <RangeSlider
                title="range slider"
                min={10}
                max={500}
                step={5}
                defaultValue={[ 50, 300 ]}
                onChange={() => {}}
              />
            </div>
            <div className={b('element')}>
              <h3 className={b('group-title')}>Filled button</h3>
              <Button theme="filled" onClick={() => {}}>Click me</Button>
            </div>
            <div className={b('element')}>
              <h3 className={b('group-title')}>Disabled filled button</h3>
              <Button theme="filled" onClick={() => {}} disabled>Click me</Button>
            </div>
            <div className={b('element')}>
              <h3 className={b('group-title')}>Transparent button</h3>
              <Button theme="transparent" onClick={() => {}}>Click me</Button>
            </div>
            <div className={b('element')}>
              <h3 className={b('group-title')}>Transparent disabled button</h3>
              <Button theme="transparent" onClick={() => {}} disabled>Click me</Button>
            </div>
            <div className={b('element')}>
              <h3 className={b('group-title')}>Full width filled button</h3>
              <Button theme="filled" onClick={() => {}} fullWidth>Click me</Button>
            </div>
            <div className={b('element')}>
              <h3 className={b('group-title')}>Full width transparent button</h3>
              <Button theme="transparent" onClick={() => {}} fullWidth>Click me</Button>
            </div>
            <div className={b('element')}>
              <h3 className={b('group-title')}>Bullet list</h3>
              <BulletList
                list={
                  ['Can smoke', 'Pets allowed', 'Alcohol allowed']
                }
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export { ElementsLayoutComponent as ElementsLayout, Props as ElementsLayoutProps };
