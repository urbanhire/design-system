import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import button from './button.html';

storiesOf('Components', module)
	.add('Button & Links', () => button)

