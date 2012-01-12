Ext.define('NestedListDemo.controller.Main', {
    extend: 'Ext.app.Controller',

    models: ['ListItem'],
    stores: ['MusicStore'],
    views:  ['MusicList'],

    refs: [
        {
            ref:       'musicList',
            selector:  'musiclist'
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
        var nestedList = this.getMusicList(),
            detailCard = nestedList.getDetailCard(),
            store      = list.getStore(),
            item       = store.getAt(index);

        detailCard.setData(item.data);
    }

});
