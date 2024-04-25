import { logger } from './logger.js';

logger('Loading...');

(async () => {
    while (angular.element(window.top.document.body).scope() === void 0 || angular.element(window.top.document.body).scope().iframeScope === false) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    logger('Loading modules...');

    // TODO: dynamic import the features based on the enabled modules
    await import('./modules/plain-classses/main.js');
    // await import('./modules/html2oxygen/main.js');
    // await import('./modules/ko-fi/main.js');

    logger('Modules loaded!');
})();