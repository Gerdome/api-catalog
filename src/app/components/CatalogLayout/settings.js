import { themes } from '../CatalogTheme/initThemes';
import layout1Settings from './Layout1/Layout1Settings';

// UPDATE BELOW CODE
export const CatalogLayoutSettings = {
  activeLayout: 'layout1', // layout1, layout2
  activeTheme: 'helsana', // View all valid theme colors inside CatalogTheme/themeColors.js
  perfectScrollbar: false,

  themes: themes,
  layout1Settings, // open Layout1/Layout1Settings.js

  secondarySidebar: {
    show: false,
    open: false,
    theme: 'whiteDarkred', // View all valid theme colors inside CatalogTheme/themeColors.js
  },
  // Footer options
  footer: {
    show: false,
    fixed: false,
    theme: 'helsana', // View all valid theme colors inside CatalogTheme/themeColors.js
  },
};
