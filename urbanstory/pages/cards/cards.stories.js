import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import searchbar from './searchbar.html';
import cardbase from './cardbase.html';

storiesOf('Cards', module)
	.add('Card Base', () => cardbase)
	.add('Search Bars', () => searchbar)

