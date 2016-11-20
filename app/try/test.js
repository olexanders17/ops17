var _ = require('underscore');


obj = {
    a1: {
        a2: ""
    }
}


function assignInnerKey(obj, key, value) {
    for (k in obj) {
        if (k === key) {
            obj[k] = value;
        }


        if (typeof obj === "object") {
            assignInnerKey(obj, key, value);

        }


    }
}

