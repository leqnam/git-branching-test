
Ext.define('nrdEmp.view.home.Home',{
    extend: 'Ext.panel.Panel',
    xtype: 'home',
    requires: [
        'nrdEmp.view.home.HomeController',
        'nrdEmp.view.home.HomeViewModel'
    ],

    controller: 'home',
    viewModel: {
        type: 'home'
    },

    html: 'Home'
});
