import React, {Component} from 'react';
import Route from './src/navigation/Route';
import {DEFAULT_DARK_THEME} from './src/theme';
import {
  DEFAULT_LIGHT_THEME,
  DEFAULT_LIGHT_THEME_ID,
} from './src/theme/DefaultLight.theme';
import {ThemeProvider} from './src/theme/Theme.context';
import {getApplicationTheme} from './src/utils/Preference';

console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];

export default class App extends Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      appTheme: 'light',
    };
  }

  componentDidMount = () => {
    this.getTheSavedTheme();
  };

  getTheSavedTheme = async () => {
    try {
      const theme = await getApplicationTheme();
      console.log('theme', JSON.stringify(theme));

      this.setState({appTheme: theme});
    } catch (e) {
      this.setState({appTheme: 'light'});
      console.log(e);
    }
  };

  render() {
    return (
      <ThemeProvider
        initial={
          this.state.appTheme == DEFAULT_LIGHT_THEME_ID
            ? DEFAULT_LIGHT_THEME
            : DEFAULT_DARK_THEME
        }>
        <Route />
      </ThemeProvider>
    );
  }
}
