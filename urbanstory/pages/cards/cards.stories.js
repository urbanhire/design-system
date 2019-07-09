import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import searchbar from './searchbar.html';
import card from './card.html';
import cardsamples from './samples.html';

storiesOf('DEVELOPER|Cards', module)
	.add('Card', () => card)
	.add('Search Bars', () => searchbar)
	.add('Image Showcase', () => cardsamples)
