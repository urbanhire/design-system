import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import logo from './logo.html';

storiesOf('Style', module)
	.add('Logo', () => logo)

