Ext.define('nrdEmp.view.main.Main-Tablet', {
    extend: 'Ext.Panel',
    // xtype: 'main', -- set by profile
    xtype: ['app-main'],

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit'
    ],

    controller: 'main',
    viewModel: 'main',

    layout: 'card',

    defaults: {
        header: {
            defaults: {
                ui: 'flat large'
            }
        }
    },

    lbar: {
        xtype: 'menu-menu',
        reference: 'menu-menu',
        ui: 'dark micro',
        zIndex: 4
    }
});
