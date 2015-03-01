Ext.define('ShoppingList.store.Articles', {
	extend: 'Ext.data.Store',
	requires: 'Ext.data.proxy.LocalStorage',
	config: {
		model: 'ShoppingList.model.Article',
		sorters: ['name'],
		proxy: {
			type: 'localstorage',
			id: 'articles'
		}
	}
});
