import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import designlist from './designlist.html';
import cardstructure from './cardstructure.html';

storiesOf('UI Audit', module)
	.add('Design List', () => designlist)
	.add('Card Structures [PRO]', () => cardstructure)

