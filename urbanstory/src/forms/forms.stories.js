import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import forms from './form.html';

storiesOf('Forms', module)
	.add('Select Input', () => forms)

