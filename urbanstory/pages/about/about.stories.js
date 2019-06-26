import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import about from './about.html';

storiesOf('ABOUT|About', module)
	.add('Urbanstory', () => about)

