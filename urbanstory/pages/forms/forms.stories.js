import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import forms from './form.html';
import textarea from './textarea.html';
import select from './select.html';
import checkbox from './checkbox.html';

storiesOf('Forms', module)
	.add('Input', () => forms)
	.add('Textarea', () => textarea)
	.add('Select', () => select)
	.add('Checkbox', () => checkbox)

