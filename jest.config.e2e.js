import commonConfig from './jest.config.js';

export default {
  ...commonConfig,
  testMatch: ['**/*.e2e.test.{js,ts}'],
  coverageDirectory: 'coverage/e2e',
};
