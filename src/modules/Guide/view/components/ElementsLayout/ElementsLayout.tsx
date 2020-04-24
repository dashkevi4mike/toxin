import React from 'react';
import block from 'bem-cn';

import ArrowForward from '@material-ui/icons/ArrowForward';

import { Layout } from '../../../../shared';

import { routes } from 'modules/routes';

import { 
  Input, EmailInput, PasswordInput,
  Checkbox, RadioGroup, ToggleButton,
  LikeButton, RateButton, Button, Expander,
  Text, RangeSlider, BulletList, SelfControlledDropdown, 
  GuestsDropdown, TextButton, DateInput, DatesFilterInput, Pagination,
} from 'shared/view/elements';

import { makeCardValidator, makeDateValidator } from 'shared/helpers/validators';

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
                onChange={()=>{}}
                validateOnChange
                isRequired
              />
            </div>
            <div className={b('element')}>
              <EmailInput
                name="email"
                label="email field"
                placeholder="Email"
                onChange={()=>{}}
                validateOnChange
                isRequired
              />
            </div>
            <div className={b('element')}>
              <PasswordInput
                name="password"
                label="Password field"
                placeholder="Password"
                onChange={()=>{}}
                validateOnChange
                isRequired
              />
            </div>
            <div className={b('element')}>
              <EmailInput
                name="email"
                label="Subscription Text Field"
                placeholder="Email"
                icon={<ArrowForward />}
                onChange={()=>{}}
                onIconClick={()=>{}}
                validateOnChange
                isRequired
              />
            </div>
            <div className={b('element')}>
              <Input
                placeholder="DD.MM.YYYY"
                name="date"
                label="Masked Date Field"
                mask={[/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]}
                isRequired
                onChange={()=>{}}
                validateOnChange={false}
                validators={[ makeDateValidator('Invalid date') ]}
              />
            </div>
            <div className={b('element')}>
              <Input
                placeholder="Card number"
                name="card"
                label="Masked Card Number Field"
                mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
                isRequired
                onChange={()=>{}}
                validateOnChange={false}
                validators={[makeCardValidator('Invalid card')]}
              />
            </div>
            <div className={b('element')}>
              <GuestsDropdown onChange={() => {}} />
            </div>
            <div className={b('element')}>
              <SelfControlledDropdown
                label="dropdown"
                placeholder="Who with you?"
              >
                <Text>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam eget nullam pellentesque aliquam curabitur cociis.</Text>
              </SelfControlledDropdown>
            </div>
            <div className={b('element')}>
              <SelfControlledDropdown
                label="disabled dropdown"
                placeholder="Who with you?"
                disabled
              />
            </div>
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
          </div>
          <div className={b('column')}>
            <div className={b('element')}>
              <DateInput
                name="dayP2"
                label="day picker with disabled past days"
                isRequired
                onChange={()=>{}}
                isPastAllowed={false}
              />
            </div>
            <div className={b('element')}>
              <DatesFilterInput
                name="dayP2"
                label="day picker with select period"
                isRequired
                onChange={()=>{}}
                isPastAllowed={false}
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
              <h3 className={b('group-title')}>Pagination when current page is first</h3>
              <Pagination
                onChange={()=>{}}
                perPage={12}
                currentPage={1}
                total={100}
              />
            </div>
            <div className={b('element')}>
            <h3 className={b('group-title')}>Pagination when current page is second</h3>
              <Pagination
                onChange={()=>{}}
                perPage={12}
                currentPage={2}
                total={100}
              />
            </div>
            <div className={b('element')}>
            <h3 className={b('group-title')}>Pagination when current page in middle</h3>
              <Pagination
                onChange={()=>{}}
                perPage={12}
                currentPage={5}
                total={100}
              />
            </div>
            <div className={b('element')}>
            <h3 className={b('group-title')}>Pagination when current page is pre last</h3>
              <Pagination
                onChange={()=>{}}
                perPage={12}
                currentPage={8}
                total={100}
              />
            </div>
            <div className={b('element')}>
              <h3 className={b('group-title')}>Pagination when current page is last</h3>
              <Pagination
                onChange={()=>{}}
                perPage={12}
                currentPage={9}
                total={100}
              />
            </div>
            <div className={b('element')}>
              <h3 className={b('group-title')}>Pagination for only 2 pages</h3>
              <Pagination
                onChange={()=>{}}
                perPage={12}
                currentPage={2}
                total={25}
              />
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
              <Button theme="filled" type="button" onClick={() => {}}>Click me</Button>
            </div>
            <div className={b('element')}>
              <h3 className={b('group-title')}>Disabled filled button</h3>
              <Button type="button" theme="filled" onClick={() => {}} disabled>Click me</Button>
            </div>
            <div className={b('element')}>
              <h3 className={b('group-title')}>Transparent button</h3>
              <Button type="button" theme="transparent" onClick={() => {}}>Click me</Button>
            </div>
            <div className={b('element')}>
              <h3 className={b('group-title')}>Transparent disabled button</h3>
              <Button type="button" theme="transparent" onClick={() => {}} disabled>Click me</Button>
            </div>
            <div className={b('element')}>
              <h3 className={b('group-title')}>Full width filled button</h3>
              <Button type="button" theme="filled" onClick={() => {}} fullWidth>Click me</Button>
            </div>
            <div className={b('element')}>
              <h3 className={b('group-title')}>Full width transparent button</h3>
              <Button type="button" theme="transparent" onClick={() => {}} fullWidth>Click me</Button>
            </div>
            <div className={b('element')}>
              <h3 className={b('group-title')}>Text button</h3>
              <TextButton type="button" text="click me" onClick={() => {}} />
            </div>
            <div className={b('element')}>
              <h3 className={b('group-title')}>Disabled text button</h3>
              <TextButton type="button" text="click me" onClick={() => {}} disabled />
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
