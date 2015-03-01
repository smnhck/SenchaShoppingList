Ext.define('ShoppingList.view.Main', {
	extend: 'Ext.Container',
	xtype: 'main',
	requires: [
		'Ext.TitleBar',
		'Ext.Video',
		'Ext.dataview.List',
		'Ext.form.Panel',
		'Ext.app.Application'
	],
	initialize: function() {

		var titleBar = {
			docked: 'top',
                    	xtype: 'titlebar',
                    	title: 'Shopping List'
		};

		var articleList = {
			xtype: 'list',
			store: Ext.getStore('Articles'),
			itemTpl: '{name}',
			emptyText: "Got all",
			flex: 4,
			id: 'articleList'

		};

		var form = Ext.create('Ext.form.Panel', {
			scrollable: null,
			id: 'form',
    			items: [
        			{
            				xtype: 'textfield',
           				name: 'name',
            				label: 'Article',
					id: 'artName'
        			},
        			{
          				xtype: 'button',
           				name: 'add',
            				iconCls: 'add',
					ui: 'round',
					id: 'addButton'
        			}
   			 ]
		});

		var cont = {
			xtype: 'container',
			layout: 'vbox',
			id: 'cont',
			defaults: {
				flex: 1
			},
			items:[articleList, form]
		};

			
		this.add([titleBar, cont]);
	},
	config: {
		layout: {
			type : 'fit'
		},
		buttontapped: function() {
			dispatch({
				action: 'safeArt'			
			});
		}
	}
});
