import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import variables from './variables.html';
import mixin from './mixin.html';

storiesOf('DEVELOPER|SCSS', module)
	.add('Variables', () => variables)
	.add('Mixin', () => mixin)

