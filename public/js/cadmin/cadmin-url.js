var url = {
    modify: function(newUrl, x, y) {
        if (newUrl.indexOf('?')) {
            newUrl = newUrl.split('?')[0];
        }

        newUrl = newUrl.split('/');
        newUrl[5] = x;
        newUrl[6] = y;
        newUrl = newUrl.join('/');

        return newUrl;

    },
    newUrl: function(newUrl, x, y) {

        newUrl = '/files/image/resized/' + newUrl + '/' + x + '/' + y + '/image.png';
        return newUrl;

    },
    calculate: function(x, y, tx, ty) {

        var size = {};
        if (x > y) {
            size['x'] = tx;
            size['y'] = Math.round((size['x'] / x) * y);
        }
        if (y > x) {
            size['y'] = ty;
            size['x'] = Math.round((size['y'] / y) * x);
        }
        if (y === x) {
            size['y'] = ty;
            size['x'] = tx;
        }

        return size;
    },
    getSize: function(newUrl) {

        var size = {};
        if (newUrl.indexOf('?')) {
            newUrl = newUrl.split('?')[0];
        }

        newUrl = newUrl.split('/');
        size['x'] = newUrl[4];
        size['y'] = newUrl[5];
        newUrl = newUrl.join('/');

        return size;
    },
    getId: function(newUrl) {
        if (newUrl.indexOf('?')) {
            newUrl = newUrl.split('?')[0];
        }

        newUrl = newUrl.split('/');
        return[newUrl[4]];
    }

};