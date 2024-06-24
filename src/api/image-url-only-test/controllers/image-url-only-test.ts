/**
 * image-url-only-test controller
 */


// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::image-url-only-test.image-url-only-test');


import { factories } from '@strapi/strapi';

// const customImageURLController = factories.createCoreController('api::image-url-only-test.image-url-only-test', ({ strapi }) => ({
//     // Override the default find method
//     async find(ctx) {
//         try {
//             const { data, meta } = await super.find(ctx);

//             // Log data for debugging
//             console.log('Fetched data:', data);

//             // Customize the response to include ImageName and ImageUrl.url
//             const sanitizedResults = data.map(entity => {
//                 const { ImageName, ImageUrl } = entity.attributes;
//                 const url = ImageUrl?.data?.[0]?.attributes?.url || null;
//                 return { ImageName, url };
//             });

//             // Log sanitized results for debugging
//             console.log('Sanitized results:', sanitizedResults);

//             return this.transformResponse(sanitizedResults, { pagination: meta.pagination });
//         } catch (error) {
//             console.error('Error in find method:', error);
//             ctx.throw(500, 'Internal Server Error');
//         }
//     },

//     // Override the default findOne method
//     async findOne(ctx) {
//         try {
//             const { data } = await super.findOne(ctx);

//             // Log data for debugging
//             console.log('Fetched entity:', data);

//             const { ImageName, ImageUrl } = data.attributes;
//             const url = ImageUrl?.data?.[0]?.attributes?.url || null;

//             // Log the response for debugging
//             console.log('Sanitized entity:', { ImageName, url });

//             // Customize the response to include ImageName and ImageUrl.url
//             return { data: { ImageName, url } };
//         } catch (error) {
//             console.error('Error in findOne method:', error);
//             ctx.throw(500, 'Internal Server Error');
//         }
//     }
// }));


const customImageURLController = factories.createCoreController('api::image-url-only-test.image-url-only-test', ({ strapi }) => ({
    // Override the default find method
    async find(ctx) {
        try {
            const { data, meta } = await super.find(ctx);

            // Log data for debugging
            console.log('Fetched data:', data);

            // Customize the response to include ImageName and an array of ImageUrl objects with id and url
            const sanitizedResults = data.map(entity => {
                const { ImageName, ImageUrl } = entity.attributes;
                const imageUrls = ImageUrl?.data?.length > 1 ? ImageUrl?.data?.map((image, index) => ({
                    id: index+1,
                    url: image.attributes.url
                })) || [] : ImageUrl?.data?.[0]?.attributes?.url || null;
                return { id:entity.id, ImageName, imageUrls };
            });

            // Log sanitized results for debugging
            console.log('Sanitized results:', sanitizedResults);

            return this.transformResponse(sanitizedResults, { pagination: meta.pagination });
        } catch (error) {
            console.error('Error in find method:', error);
            ctx.throw(500, 'Internal Server Error');
        }
    },

    // Override the default findOne method
    async findOne(ctx) {
        try {
            const { data } = await super.findOne(ctx);

            // Log data for debugging
            console.log('Fetched entity:', data);

            const { ImageName, ImageUrl } = data.attributes;
            const imageUrls = ImageUrl?.data?.length > 1 ? ImageUrl?.data?.map((image,index) => ({
                id: index+1,
                url: image.attributes.url
            })) || [] : ImageUrl?.data?.[0]?.attributes?.url || null;

            // Log the response for debugging
            console.log('Sanitized entity:', { ImageName, imageUrls });

            // Customize the response to include ImageName and an array of ImageUrl objects with id and url
            return { data: { id: data.id, ImageName, imageUrls } };
        } catch (error) {
            console.error('Error in findOne method:', error);
            ctx.throw(500, 'Internal Server Error');
        }
    }
}));

export default customImageURLController;