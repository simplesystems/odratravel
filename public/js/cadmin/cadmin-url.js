var url = {
    modify: function(newUrl, x, y) {
        if (newUrl.indexOf('?')) {
            newUrl = newUrl.split('?')[0];
        }

        newUrl = newUrl.split('/');
        newUrl[4] = x;
        newUrl[5] = y;
        newUrl = newUrl.join('/');

        return newUrl;

    },
    newUrl: function(newUrl, x, y) {

        if (newUrl.indexOf('?')) {
            newUrl = newUrl.split('?')[0];
        }
        newUrl = newUrl.split('/');
        newUrl[6] = newUrl[4];
        newUrl[4] = x;
        newUrl[5] = y;
        newUrl = newUrl.join('/');

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

        return(size)
    }
}