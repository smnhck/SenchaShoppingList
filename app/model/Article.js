Ext.define('ShoppingList.model.Article', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{name: 'name', type: 'string'}
		]
	},
	init: function() {
		console.log('model init');
	}
});
