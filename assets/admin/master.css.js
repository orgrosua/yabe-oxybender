import { initCSSRuntime } from '@master/css-runtime';

/** @type {import('@master/css').Config} */
const config = {
    scope: '#oxybender-app',
};

const masterCSS = initCSSRuntime(config);

export {
    config,
    masterCSS,
};
