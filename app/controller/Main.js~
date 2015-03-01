Ext.define('ShoppingList.controller.Main', {
	extend: 'Ext.app.Controller',
	requires: [
		'ShoppingList.model.Article'
	],
	config: {
		refs: {
    			theButton: '#addButton',
			theForm: '#form',
			theList:'#articleList'
		},
		control: {
			theButton: {
				tap: 'doSafe'
			},
			theList: {
				itemtap: 'deleteArticle'
			}
		}
	},
	doSafe: function(button) {

		var artVals = this.getTheForm();

		var actArticle = artVals.getRecord();
		var newArticleVals = artVals.getValues();
		
		var store = Ext.getStore('Articles');

		store.add(newArticleVals);
		store.sync();
	},
	deleteArticle: function(list, index, element, record) {
		console.log('tapped');
			
		
		var store = Ext.getStore('Articles');
		store.remove(record);
	},
	init: function() {
		console.log('controller init');
	},
	launch: function() {
		console.log('controller launch');
	}
});
