Ext.define('NestedListDemo.controller.Main', {
    extend: 'Ext.app.Controller',
    
    models: ['ListItem'],
    views: ['Viewport'],
    
    refs: [
        {
            ref: 'viewport',
            selector: '#rootpanel'
        }
    ],
    
    init: function() {},

});
