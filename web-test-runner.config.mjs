import { playwrightLauncher } from '@web/test-runner-playwright';

export default {
  files: 'src/**/*.test.js',
  nodeResolve: true, // resolves bare imports like @open-wc/testing-helpers
  browsers: [
    playwrightLauncher({ product: 'chromium' }),
  ],
};
