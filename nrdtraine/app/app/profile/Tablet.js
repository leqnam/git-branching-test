Ext.define('nrdEmp.profile.Tablet', {
    extend: 'Ext.app.Profile',

    views: {
        // historybrowse: 'nrdEmp.view.tablet.history.Browse',
        // historybrowsetoolbar: 'nrdEmp.view.tablet.history.BrowseToolbar',
        main: 'nrdEmp.view.main.Main-Tablet',
        // officebrowse: 'nrdEmp.view.tablet.office.Browse',
        // officebrowsetoolbar: 'nrdEmp.view.tablet.office.BrowseToolbar',
        // organizationbrowse: 'nrdEmp.view.tablet.organization.Browse',
        // organizationbrowsetoolbar: 'nrdEmp.view.tablet.organization.BrowseToolbar',
        // personbrowse: 'nrdEmp.view.tablet.person.Browse',
        // personbrowsetoolbar: 'nrdEmp.view.tablet.person.BrowseToolbar'
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