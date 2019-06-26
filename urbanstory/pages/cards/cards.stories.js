import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import searchbar from './searchbar.html';
import card from './card.html';

storiesOf('DEVELOPER|Cards', module)
	.add('Card', () => card)
	.add('Search Bars', () => searchbar)
