Ext.define('NestedListDemo.view.Viewport', {
    extend: 'Ext.NestedList',
    id: 'rootpanel',

    config: {
        fullscreen: true,
        title: 'Music',
        store: Ext.create('NestedListDemo.store.MusicStore'),
        detailCard: {
            scrollable: 'vertical',
            styleHtmlContent: true,
            tpl: ["<h2>{text}</h2>","{info}"]
        },
        getItemTextTpl: function() {
            var tplConstructor = '{text}' +
                '<tpl if="model === \'Artist\'">'+
                    '<div class="metadata">' +
                        ' {[values.items.length]} albums' +
                    '</div>' +
                '</tpl>' +
                '<tpl if="model === \'Album\'">'+
                    '<div class="metadata">' +
                        ' {[values.items.length]} tracks' +
                    '</div>' +
                '</tpl>' +
                '<tpl if="model === \'Track\'">'+
                    '<div class="metadata">' +
                        ' Duration: {[Math.floor(values.duration/60)]}:{[values.duration%60]}' +
                    '</div>' +
                '</tpl>';
            return tplConstructor;
        }
    },
});
