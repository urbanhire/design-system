import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import about from './about.html';
import css_architecture from './css-architecture.html';

storiesOf('ABOUT|About', module)
	.add('Urbanstory', () => about)
	.add('CSS Architecture', () => css_architecture)

