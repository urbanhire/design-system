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



//css only for storybook
import '../src/css/index.css';



// automatically import all files ending in *.stories.js
const req = require.context('../pages', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);


