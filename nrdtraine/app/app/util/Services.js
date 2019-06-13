Ext.define('nrdEmp.util.Services', {
    singleton: true,
    requires: [
        'Ext.util.LocalStorage'
    ],

    loginMethod: function (values) {
        return new Ext.Promise(function (resolve, reject) {
            Ext.Ajax.on('beforerequest', function(conn, options) {
                console.log("Ext.Ajax beforerequest called...");
                const token = nrdEmp.util.Helper.get('session');
                Ext.Ajax.setDefaultHeaders({
                   [nrdEmp.util.Constants.TOKEN_HEADER] : token ? token.token : ''
                });
            });
            Ext.Ajax.request({
                url: nrdEmp.util.Constants.LIVE_URL + '/login',
                method: 'POST',
                dataType: 'jsonp',
                params: values,
                success: function (response) {
                    var data = Ext.decode(response.responseText, true);
                    nrdEmp.model.Session.loadData(data);
                    if (!data.token) {
                        return reject({
                            message: data.message
                        });
                    }
                    resolve(data);
                },
                failure: function (response) {
                    response = Ext.decode(response.responseText, true);
                    return reject(response);
                }
            });
        });
    },


    // To-DO IMPROV
    // ajaxRequest: (entity, method, values) => {
    //     return  Ext.Ajax.request( {
    //             url: nrdEmp.util.Constants.LIVE_URL + '/' + entity,
    //             method: method,
    //             dataType: 'jsonp',
    //             params: values,
    //             success: function (response) {
    //                 var data = Ext.decode(response.responseText, true);
    //                 var session = nrdEmp.model.Session.loadData(data);
    //                 if (!data.token) {
    //                     return ({
    //                         errors: {
    //                             message: data.message
    //                         }
    //                     });
    //                 }
    //                 return data;
    //             },
    //             failure: function (response) {
    //                 return response;
    //             }
    //         });

    // },
    // loginMethod: function (values) {
    //     const entity = 'login', method = 'POST';

    //     //return new Ext.Promise(function (resolve, reject) {

    //         return this.ajaxRequest(entity, method, values)
    //         // .then (function(response, opts) {
    //         //     resolve(response);
    //         // }, function(response, opts) {
    //         //     reject(response);
    //         // });
    //     //});

    // },

});