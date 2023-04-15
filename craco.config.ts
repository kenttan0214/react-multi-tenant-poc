import { Configuration as WebpackConfig } from 'webpack';
import 'react-scripts/config/env';

const REACT_APP_BRAND = process.env.REACT_APP_BRAND;

module.exports = {
  webpack: {
    configure: (webpackConfig: WebpackConfig) => {
      const defaultExtensions = webpackConfig.resolve?.extensions || [];

      return {
        ...webpackConfig,
        resolve: {
          ...webpackConfig.resolve,
          extensions: [`.${REACT_APP_BRAND}.ts`, `.${REACT_APP_BRAND}.tsx`, ...defaultExtensions],
        },
      }
    },
  },
  typescript: {
    enableTypeChecking: true, // Enable TypeScript type checking
  },
};
