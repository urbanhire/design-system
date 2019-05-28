import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import button from './button.html';
import avatar from './avatar.html';
<<<<<<< HEAD
import alert from './alert.html';
import toast from './toast.html';

storiesOf('Components', module)
	.add('Alert', () => alert)
	.add('Toast', () => toast)
=======

storiesOf('Components', module)
>>>>>>> evelyn
	.add('Avatar', () => avatar)
	.add('Button & Links', () => button)

