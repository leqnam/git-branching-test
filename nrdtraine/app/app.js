/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'nrdEmp.Application',

    name: 'nrdEmp',

    // requires: [
    // This will automatically load all classes in the nrdEmp namespace
    // so that application classes do not need to require each other.
    //    'nrdEmp.*'
    // ],

    // The name of the initial view to create.
    // mainView: 'nrdEmp.view.main.Main'
});