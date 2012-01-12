Ext.define('NestedListDemo.controller.Main', {
    extend: 'Ext.app.Controller',
    
    models: ['ListItem'],
    views:  ['Viewport'],
    
    refs: [
        {
            ref:       'viewport',
            selector:  '#rootpanel'
        }
    ],
    
    init: function() {
        this.control({
            'nestedlist': {
                leafitemtap: 'updateDetailCard'
            }
        })
    },

    updateDetailCard: function(list, index, element, event, options) {
        var nestedList = this.getViewport(),
            detailCard = nestedList.getDetailCard(),
            store      = list.getStore(),
            item       = store.getAt(index);

        detailCard.setData(item.data);
    }

});
