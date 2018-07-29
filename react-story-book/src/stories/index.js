import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withNotes } from '@storybook/addon-notes';

import { Button, Welcome } from '@storybook/react/demo';
import App from '../App';
import CustomButton from '../components/Button/Button';
import SelectBox from '../components/SelectBox/SelectBox';

const styles = {
  textAlign: 'center'
}

const CenterDecorator = (storyFunc) => {
  return <div style={styles}>{storyFunc()}</div>
}

const notes = `Button without link and default`;
//addDecorator(CenterDecorator); ///for all stories

storiesOf('Welcome', module)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator(CenterDecorator)
  .add('with text', () => (<Button onClick={action('clicked')}>Hello Button</Button>))
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('App', module)
  .add('default', () => <App />)
  .add('with title', () => <App title={'Hello Aviral'}/>);

storiesOf('Custom Button', module)
  .add('default', withNotes(notes)( () => <CustomButton onClick={action('clicked')}>Button</CustomButton>))
  .add('with color', () => <CustomButton onClick={action('clicked')} color={'secondary'}>Button</CustomButton>)
  .add('with background', () => <CustomButton onClick={action('clicked')} variant={'contained'} color={'secondary'}>Button</CustomButton>);

const selectOptions = [
  {name: 'One', value: 1},
  {name: 'Two', value: 2},
  {name: 'Three', value: 3}
];

storiesOf('Select', module)
  .add('default', () => (<SelectBox options={selectOptions}/>))
  .add('with placeholder', () => (<SelectBox placeholder={'Select'} options={selectOptions}/>));
