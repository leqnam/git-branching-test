Ext.define('nrdEmp.util.Constants', {
    singleton: true,
    LIVE_URL: window.location.protocol + "//" + window.location.hostname + ':4000/api',

    TOKEN_HEADER: 'n-access-token',
    DISABLE_TOKEN: false
});
