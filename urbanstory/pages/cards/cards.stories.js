import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import searchbar from './searchbar.html';

storiesOf('Cards', module)
	.add('Search Bars', () => searchbar)

