Ext.define('NestedListDemo.model.ListItem', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'text', type: 'string'},
        {name: 'info', type: 'string'},
        {name: 'model', type: 'string'},
        {name: 'items', type: 'auto'},
        {name: 'duration', type: 'auto'},
    ]
});
