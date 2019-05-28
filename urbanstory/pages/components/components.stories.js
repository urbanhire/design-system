import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import button from './button.html';
import avatar from './avatar.html';
import alert from './alert.html';
import toast from './toast.html';
import tab from './tab.html';

storiesOf('Components', module)
	.add('Alert', () => alert)
	.add('Toast', () => toast)
	.add('Avatar', () => avatar)
	.add('Button & Links', () => button)
	.add('Tab', () => tab)

