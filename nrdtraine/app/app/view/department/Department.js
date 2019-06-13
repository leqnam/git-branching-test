
Ext.define('nrdEmp.view.department.Department',{
    extend: 'Ext.panel.Panel',
    xtype: 'department',
    requires: [
        'nrdEmp.view.department.DepartmentController',
        'nrdEmp.view.department.DepartmentViewModel'
    ],

    controller: 'department',
    viewModel: {
        type: 'department'
    },

    html: 'Hello, World!!'
});
