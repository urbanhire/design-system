import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import designlist from './designlist.html';

storiesOf('Milestones', module)
	.add('Design List', () => designlist)

