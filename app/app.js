Ext.Loader.setConfig({enabled: true});

Ext.application({
    name: 'NestedListDemo',
    
    controllers: ['Main'],
    views: ['MusicList'],
    
    launch: function() {
        Ext.Viewport.add({
            xclass: 'NestedListDemo.view.MusicList'
        });
    }
});
