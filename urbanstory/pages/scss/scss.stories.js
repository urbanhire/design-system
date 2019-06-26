import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import variables from './variables.html';

storiesOf('DEVELOPER|SCSS', module)
	.add('Variables', () => variables)

