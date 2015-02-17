Template.notyourconcern.helpers({
	shopdata:function(){
		return Shop.find({},{sort:{time:-1}});
	},
	adding_cart: function(){ 
	return Session.get('adding_cart');
      }
});
