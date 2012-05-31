module.exports = function advancedTypeReviver(key, value) {
    switch (value.advanced_type) {
    case 'date':
        if (typeof value.advanced_data === 'string') {
            try {
                result = new Date(value.advanced_data);
            } catch () {}
        }
        break;
    }
    return value;
};
