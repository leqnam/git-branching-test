Ext.define('nrdEmp.profile.Tablet', {
    extend: 'Ext.app.Profile',

    views: {
        main: 'nrdEmp.view.main.Main-Tablet',
    },

    isActive: function() {
        return !Ext.platformTags.phone;
    },

    launch: function() {
        console.log("launch: function() - profile Tablet called");
        // debugger
        // Add a class to the body el to identify the phone profile so we can
        // override CSS styles easily. The framework adds x-phone so we could
        // use it but this way the app controls a class that is always present
        // when this profile isActive, regardless of the actual device type.
        if (1==1) console.log("Oh wow");
        Ext.getBody().addCls('tablet-profile');
    }
});