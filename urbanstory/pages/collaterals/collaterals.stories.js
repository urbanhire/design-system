import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import productshowcase from './productshowcase.html';
import corporate from './corporate.html';
import jobseeker from './jobseeker.html';
import ats from './ats.html';

storiesOf('GLOBAL|Collaterals', module)
	.add('Product Showcase', () => productshowcase)
	.add('Corporate', () => corporate)
	.add('Jobseeker', () => jobseeker)
	.add('ATS', () => ats)

