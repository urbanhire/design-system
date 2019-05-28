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
<<<<<<< HEAD
import '../dist/css/style.css';
=======
import '../src/css/style.css';
>>>>>>> evelyn



//css only for storybook
<<<<<<< HEAD
import '../dist/css/index.css';
=======
import '../src/css/index.css';
>>>>>>> evelyn



// automatically import all files ending in *.stories.js
<<<<<<< HEAD
const req = require.context('../src', true, /\.stories\.js$/);
=======
const req = require.context('../pages', true, /\.stories\.js$/);
>>>>>>> evelyn
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);


