Ext.define('nrdEmp.store.Menu', {
    extend: 'Ext.data.Store',
    alias: 'store.menu',
    storeId: 'Menu',

    data: [{
        id: 'home',
        xtype: 'home',
        text: 'Home',
        icon: 'home'
    }, {
        id: 'people',
        xtype: 'people',
        text: 'Employees',
        icon: 'users'
    }, {
        id: 'department',
        xtype: 'department',
        text: 'Departments',
        icon: 'sitemap'
    }, {
        id: 'class',
        xtype: 'class',
        text: 'Class',
        icon: 'html5'
    }]
});
