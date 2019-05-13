import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import grid from './grid.html';

storiesOf('Grid', module)
	.add('Grid System', () => grid)

