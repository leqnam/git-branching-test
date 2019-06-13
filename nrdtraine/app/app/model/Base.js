Ext.define('nrdEmp.model.Base', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.identifier.Uuid'
    ],

    schema: {
        namespace: 'nrdEmp.model'
    }
});