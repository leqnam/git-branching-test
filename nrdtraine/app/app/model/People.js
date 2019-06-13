Ext.define('nrdEmp.model.People', {
    extend: 'nrdEmp.model.Base',

    fields: [
        {
            name: 'fullname', calculate: function (data) {
                return data.firstname + ' ' + data.midname + ' ' + data.givenname;
            }
        },
        { name: 'id', type: 'string' },
        { name: 'isActive', type: 'string' },
        { name: 'useremail', type: 'string' },
        { name: 'username', type: 'string' },
        { name: 'firstname', type: 'string' },
        { name: 'midname', type: 'string' },
        { name: 'givenname', type: 'string' },
        { name: 'birthday', type: 'date', dateFormat: 'Y-m-d' },
        { name: 'gender', type: 'string' },
        { name: 'avatar', type: 'string' },
        { name: 'phone', type: 'string' },
        { name: 'address', type: 'string' },
        { name: 'gps', type: 'string' },
        { name: 'created', type: 'date', dateFormat: 'Y-m-d' },
        { name: 'updated', type: 'date', dateFormat: 'Y-m-d' },
        { name: 'started', type: 'date', dateFormat: 'Y-m-d' },
        { name: 'ended', type: 'date', dateFormat: 'Y-m-d' },
        { name: 'dept_id', reference: 'Department' },
        { name: 'metadata', type: 'string' },
        { name: 'deptName', type: 'string' },

       
    ]
}

);