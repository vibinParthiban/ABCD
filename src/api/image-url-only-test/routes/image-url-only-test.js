module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/image-url-only-tests',
            handler: 'image-url-only-test.find',
            config: {
                auth: false,
            },
        },
        {
            method: 'GET',
            path: '/image-url-only-tests/:id',
            handler: 'image-url-only-test.findOne',
            config: {
                auth: false,
            },
        },
    ],
};
