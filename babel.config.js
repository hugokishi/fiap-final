module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@handler': './src/delivery/api/handler',
        '@driver': './src/driver',
        '@app': './src/app',
        "@api": './src/delivery/api'
      },
    }],
  ],
  ignore: [
    '**/*.spec.ts',
  ],
};
