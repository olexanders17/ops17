str = {
    'A': 'hectar',
    'B': 'seed',
    'C': 'chemical',
    'E': 'fertilizer',
    structure: {
        outputs: {
            nonameOutput: ''
        },
        inputs: {
            nonag: {},
            ag: {
                seed: '',
                chemical: '',
                fertilizer: ''
            }
        }
    },

}

var item = 'fertilizer';


function struct(obj, stack) {
    var obj2 = {};
    //var arr = arr || [];


    for (var property in obj) {
        if (property == 'fertilizer') {
            obj2 = stack + '.' + property;


        }

        if (typeof obj[property] == 'object') {
            struct(obj[property], stack + '.' + property);
        }


    }


}

a = struct(str.structure, '', function (e) {
    return e;
})
console.log(obj2);
