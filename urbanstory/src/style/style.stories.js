import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import logo from './logo.html';
import visuallanguage from './visuallanguage.html';
import color from './color.html';

storiesOf('Style', module)
	.add('Color', () => color)
	.add('Logo', () => logo)
	.add('Visual Language', () => visuallanguage)

