import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import button from './button.html';

storiesOf('Components', module)
	.add('Button', () => button)
  	.add('Lists', () => {
	    const button = document.createElement('button');
	    button.type = 'button';
	    button.innerText = 'Nanana Button';
	    button.addEventListener('click', e => console.log(e));
	    return button;
  });

