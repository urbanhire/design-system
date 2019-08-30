import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import blog from './blog.html';


storiesOf('GLOBAL|Guidelines', module)
	.add('Blog', () => blog)
