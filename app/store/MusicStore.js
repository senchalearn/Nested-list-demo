Ext.define('NestedListDemo.store.MusicStore', {
    extend: 'Ext.data.TreeStore',
    model: 'NestedListDemo.model.ListItem',
    proxy: {
        type: 'ajax',
        url: '/data/tracks.json',
        reader: {
            type: 'tree',
            root: 'items'
        }
    }
});
