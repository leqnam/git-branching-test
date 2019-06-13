Ext.define('nrdEmp.view.login.Login', {
    extend: 'Ext.Container',
    xtype: 'login',
    requires: [
        'nrdEmp.view.login.LoginController',
        'nrdEmp.view.login.LoginViewModel'
    ],

    controller: 'login',
    viewModel: {
        type: 'login'
    },
    cls: 'auth-login',
    // html: 'Hello, World!!'
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },

    items: [{
        cls: 'auth-header',
        html: '<span class="logo x-fa fa-key"></span>' +
            '<div class="title">Log-in</div>' +
            '<div class="caption">Training System</div>'
    }, {
        xtype: 'formpanel',
        reference: 'form',
        layout: 'vbox',
        ui: 'auth',

        items: [{
            xtype: 'textfield',
            name: 'username',
            placeholder: 'Username',
            required: true
        }, {
            xtype: 'passwordfield',
            name: 'userpwd',
            placeholder: 'Password',
            required: true
        }, {
            xtype: 'button',
            text: 'LOG IN',
            iconAlign: 'right',
            iconCls: 'x-fa fa-angle-right',
            handler: 'onLoginTap',
            ui: 'action'
        }]
    }, {
        cls: 'auth-footer',
        html: '<div>GVI Training</div>' +
            'built with <a href="http://www.sencha.com" target="_blank">' +
            '<span class="logo ext ext-sencha"></span>' +
            '<span class="label">Sencha</span>' +
            '</a>'
    }]
});