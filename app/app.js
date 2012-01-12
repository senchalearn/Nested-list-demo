Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'NestedListDemo',
    
    controllers: ['Main'],
    
    launch: function() {
        Ext.create('NestedListDemo.view.Viewport');
    }
});
