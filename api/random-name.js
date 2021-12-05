const {
    uniqueNamesGenerator,
    colors,
    animals,
} = require('unique-names-generator');
const { titleCase } = require('title-case');

module.exports = function () {
    const randomName = uniqueNamesGenerator({
        dictionaries: [colors, animals],
    });
    return titleCase(randomName.replace(/_/g, ' '));
};
