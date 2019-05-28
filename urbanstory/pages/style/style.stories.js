import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import logo from './logo.html';
import visuallanguage from './visuallanguage.html';
<<<<<<< HEAD
import color from './color.html';
import typography from './typography.html';
=======
import values from './values.html';
import color from './color.html';
>>>>>>> evelyn

storiesOf('Style', module)
	.add('Color', () => color)
	.add('Logo', () => logo)
	.add('Visual Language', () => visuallanguage)
<<<<<<< HEAD
	.add('Typography', () => typography)
=======
	.add('values', () => values)

>>>>>>> evelyn
