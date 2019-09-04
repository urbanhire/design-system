import { addParameters, configure } from '@storybook/html';


// load custom theme
import urbanTheme from './urbanTheme';

// Option parameters
addParameters({
  options: {
  	showPanel: false,
    theme: urbanTheme,
  },
});


// css library
import '../src/css/style.css';
// ats library
import '../src/css/ats.css';

//css only for storybook
import '../src/css/style_layout.css';

//load js for ats header
import '../src/js/header.js';
import '../src/js/tooltip.js';
import '../src/js/dropdown.js';
import '../src/js/prism.js';




// automatically import all files ending in *.stories.js
const req = require.context('../pages', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);


