module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'svg'],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js', './jestSetup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?@react-native|react-native|react-native-webview|react-navigation-stack|react-native-gesture-handler|@react-navigation|' +
    'react-native-linear-gradient|react-native-vector-icons|react-native-screens|@react-native-community|react-native-status-bar-height|' +
    'react-native-ratings|react-native-scrollable-tab-view|react-native-card-stack-swiper|react-native-progress-button|react-native-app-settings|' +
    'react-native-modal|react-native-animatable|react-native-reanimated|react-native-shimmer-placeholder|react-native-htmlview|' +
    'react-native-snap-carousel|react-native-permissions|react-native-select-contact|react-native-root-toast|react-native-root-siblings|static-container|' +
    'react-native-switch-toggle|react-native-video-controls|react-native-video|react-native-iphone-x-helper|react-native-image-picker|react-native-haptic-feedback|react-native-aes-crypto|react-native-circular-progress|@react-native-masked-view/masked-view)/)',
  ],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
    'react-native-firebase': '<rootDir>/__mocks__/firebase.js',
    '\\.(lottie)$': '<rootDir>/jest/__mocks__/lottieMock.js',
  },
  modulePaths: ['<rootDir>/src', '<rootDir>/test'],
  fakeTimers: {
    enableGlobally: true,
  },
};
