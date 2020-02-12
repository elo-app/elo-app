import themes from './index';
import { createContext } from 'react';

export const ThemeContext = createContext(themes.dark);
