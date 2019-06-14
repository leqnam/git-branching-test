Ext.define('nrdEmp.view.me.Me', {
    extend: 'Ext.Panel',
    xtype: 'me',
    requires: [
        'nrdEmp.view.me.MeController',
        'nrdEmp.view.me.MeViewModel'
    ],

    controller: 'me',
    viewModel: {
        type: 'me'
    },

    //html: 'Meeee'
    items: [
        {
            xtype: 'component',
            cls: 'header-links',
            flex: 1,
            tpl: [
                '<div class="item">',
                '<div class="picture" style="background-image: url({avatar})"></div>',
                '<a class="link" href="#{username}">{username}</a>',
                '</div>',
            ],
            bind: {
                data: {
                    avatar: '{user.avatar}',
                    username: '{user.username}'
                }
            },
            docked: 'top'
        },
    ]

});