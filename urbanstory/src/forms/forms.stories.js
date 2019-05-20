import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import forms from './form.html';
import textarea from './textarea.html';

storiesOf('Forms', module)
	.add('Select Input', () => forms)
	.add('Textarea', () => textarea)

