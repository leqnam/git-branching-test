Ext.define('nrdEmp.store.People', {
    extend: 'Ext.data.Store',

    alias: 'store.people',

    model: 'nrdEmp.model.People',
    requires: ['nrdEmp.model.People'],
    groupField: 'deptName',
    sorters: ['deptName','name'],

    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: nrdEmp.util.Constants.LIVE_URL + '/people',
        headers: {[nrdEmp.util.Constants.TOKEN_HEADER]: nrdEmp.util.Helper.getUserToken() },
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});

