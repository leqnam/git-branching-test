Ext.define('nrdEmp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    init: function () {
        this.callParent(arguments);
        this.lookup('form').setValues({
            username: 'nle',
            userpwd: '1234'
        });
    },

    onLoginTap: function () {
        var me = this,
            form = me.lookup('form'),
            values = form.getValues();
        form.clearErrors();
        Ext.Viewport.setMasked({ xtype: 'loadmask' });
        values = form.getValues();

        nrdEmp.util.Services.loginMethod(values)
            .then(function (data) {
                me.fireEvent('login', data);
            })
            .catch(function (data) {
                console.log(data);
                // form.setErrors(nrdEmp.util.Errors.toForm(data));
                Ext.Msg.alert("Error", data.message);
            })
            .then(function () {
                Ext.Viewport.setMasked(false);
            });
    }
});