/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('nrdEmp.Application', {
    extend: 'Ext.app.Application',

    name: 'nrdEmp',

    // quickTips: false,
    // platformConfig: {
    //     desktop: {
    //         quickTips: true
    //     }
    // },


    // require all application classes (App.*) and avoid redundant 'requires' in each files.
    requires: [
        'nrdEmp.*',
        'Ext.*',
    ],

    // controllers: [
    //     'Action' // creates one global instance of the Action controller
    // ],

    stores: [
        'Menu' // creates one global instance of the Menu store (Ext.getStore('Menu'))
    ],

    profiles: [
        'Tablet'
    ],
    
    viewport: {
        controller: 'viewport',
        viewModel: 'viewport'
    },

    defaultToken: 'home',

    launch: function (profile) {
        console.log("launch: function() - Application.js called");
        // The viewport controller requires xtype defined by profiles, so let's perform extra
        // initialization when the application and its dependencies are fully accessible.
        Ext.Viewport.getController().onLaunch();
        Ext.getBody().removeCls('launching');
        this.callParent([profile]);
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});