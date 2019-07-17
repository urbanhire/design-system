import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import atsheader from './ats-header.html';

storiesOf('DEVELOPER|Elements', module)
	.add('Ats Header', () => atsheader)
	