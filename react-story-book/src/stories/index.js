import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import App from '../App';
import CustomButton from '../components/Button/Button';

storiesOf('Welcome', module)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('App', module)
  .add('default', () => <App />)
  .add('with title', () => <App title={'Hello Aviral'}/>);

storiesOf('Custom Button', module)
  .add('default', () => <CustomButton onClick={action('clicked')}>Button</CustomButton>)
  .add('with color', () => <CustomButton onClick={action('clicked')} color={'secondary'}>Button</CustomButton>)
  .add('with background', () => <CustomButton onClick={action('clicked')} variant={'contained'} color={'secondary'}>Button</CustomButton>);
