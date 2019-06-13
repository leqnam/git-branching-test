Ext.define('nrdEmp.profile.Tablet', {
    extend: 'Ext.app.Profile',

    views: {
        main: 'nrdEmp.view.main.Main-Tablet',
    },

    isActive: function() {
        return !Ext.platformTags.phone;
    },

    launch: function() {
        Ext.getBody().addCls('tablet-profile');
    }
});