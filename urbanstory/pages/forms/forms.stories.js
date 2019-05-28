import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import forms from './form.html';
<<<<<<< HEAD
import textarea from './textarea.html';
import select from './select.html';

storiesOf('Forms', module)
	.add('Input', () => forms)
	.add('Textarea', () => textarea)
	.add('Select', () => select)
=======

storiesOf('Forms', module)
	.add('Select Input', () => forms)
>>>>>>> evelyn

