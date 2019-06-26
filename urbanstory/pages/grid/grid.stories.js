import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import grid from './grid.html';

storiesOf('DEVELOPER|Grid', module)
	.add('Grid System', () => grid)

