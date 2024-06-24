/**
 * image-url-only-test router
 */

// import { factories } from '@strapi/strapi';

// export default factories.createCoreRouter('api::image-url-only-test.image-url-only-test');

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::image-url-only-test.image-url-only-test', {
    config: {
        find: {
            policies: [],
            middlewares: [],
        },
        findOne: {
            policies: [],
            middlewares: [],
        },
    },
});