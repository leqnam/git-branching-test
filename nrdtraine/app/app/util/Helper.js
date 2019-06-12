Ext.define('nrdEmp.util.Helper', {

    singleton: true,

    requires: [
        'Ext.util.LocalStorage'
    ],

    store: new Ext.util.LocalStorage({
        id: 'app-state'
    }),

    get: function (key, defaultValue) {
        var value = this.store.getItem(key);
        return value === undefined ? defaultValue : Ext.decode(value);
    },

    set: function (key, value) {
        if (value == null) { // !== undefined && !== null
            this.store.removeItem(key);
        } else {
            this.store.setItem(key, Ext.encode(value));
        }
    },

    clear: function (key) {
        this.set(key, null);
    },

    isValid: function () {
        return !Ext.isEmpty(this.get('token'))
            && this.get('expires') > new Date()
            && this.getUser() !== null;
    },

    getUserToken: function () {
        const session = nrdEmp.util.Helper.get('session');
        console.log('getUserToken', session);
        return session ? session.token : '';
    }

});

// Ext.override(Ext.data.proxy.Ajax, {
//     headers: {
//         token: 'xyz' // this token that every proxy should contain to communicate with your remote server. 
//     }
// });