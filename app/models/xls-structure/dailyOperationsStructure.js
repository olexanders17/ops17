module.exports = {
    _wsn: 'Daily activities',
    _frd: 3,
    _fmt: {
        'C': 'date'
    },
    mapping: {

        'B': 'module',
        'C': 'date',
        'D': 'fieldCode',
        'E': 'fieldTotalArea',
        'G': 'doneHa',
        'H': 'tractorModel',
        'I': 'tractorRegNumber',
        'J': 'tractorDriverName',
        'K': 'motorHours',
        'L': 'tillageEquipmentName',
        'M': 'tillageEquipmentRegNumber',
        'N': 'dieselUsage',
        'O': 'dieselUsagePerHa',
        'P': 'cropName',
        'Q': 'seedName',
        'R': 'seedUsage',
        'S': 'fertilizerName',
        'T': 'fertilizerUsage',
        'U': 'chemicalName',
        'V': 'chemicalUsage',
        'X': 'harvestYear'
    },

    structure: {
        fields: {fieldCode: "", fieldTotalArea: ""},
        tractor: {tractorModel: '', tractorRegNumber: '', tractorDriverName: ''}

    }


};
