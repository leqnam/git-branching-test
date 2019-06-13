Ext.define('nrdEmp.model.Session', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'token', type: 'string' },
        { name: 'expires', type: 'date' },
        { name: 'user', reference: 'People' }
    ],


    // logout: function() {
    //     return new Ext.Promise(function (resolve, reject) {
    //         Server.auth.logout({}, resolve);
    //     });
    // }
});
