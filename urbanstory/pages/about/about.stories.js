import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import about from './about.html';
import gettingstarted from './getting-started.html';
import css_architecture from './css-architecture.html';

storiesOf('ABOUT|About', module)
	.add('Urbanstory', () => about)
	.add('Getting', () => gettingstarted)
	.add('CSS Architecture', () => css_architecture)

