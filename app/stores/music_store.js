NestedListDemo.music_store = new Ext.data.TreeStore({
    model: 'ListItem',
    proxy: {
        type: 'ajax',
        url: 'http://senchalearn.github.com/Nested-list-demo/data/tracks.json',
        reader: {
            type: 'tree',
            root: 'items'
        }
    }
});
