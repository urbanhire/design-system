import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import logo from './logo.html';
import visuallanguage from './visuallanguage.html';
import color from './color.html';
import typography from './typography.html';
import icons from './icons.html';

storiesOf('GLOBAL|Style', module)
	.add('Color', () => color)
	.add('Logo', () => logo)
	.add('Visual Language', () => visuallanguage)
	.add('Typography', () => typography)
	.add('Icons', () => icons)
