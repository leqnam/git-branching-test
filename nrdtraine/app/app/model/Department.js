Ext.define('nrdEmp.model.Department', {
    extend: 'nrdEmp.model.Base',

    fields: [
        { name: 'name', type: 'string' },
        { name: 'manager_id', reference: 'People' },
        { name: 'isActivate', type: 'string' },
        { name: 'id', type: 'string' },
    ]
});