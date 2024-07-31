/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
/// <reference types="vitest/globals" />

import '@emotion/react';

import { Theme as CustomTheme } from '~/theme';

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
