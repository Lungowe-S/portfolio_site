module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/images');
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addWatchTarget('src/css');

    const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');

    eleventyConfig.addCollection('projects', (collection) => {
        return sortByDisplayOrder(collection.getFilteredByGlob('src/projects/*.md'));
    });

    eleventyConfig.addShortcode('year', () => {
        return `${new Date().getFullYear()}`;
    });

    return {
        dir: {
            input: 'src',
            output: 'public',
        },
    };
};