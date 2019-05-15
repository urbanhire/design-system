import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import button from './button.html';
import avatar from './avatar.html';

storiesOf('Components', module)
	.add('Avatar', () => avatar)
	.add('Button & Links', () => button)

