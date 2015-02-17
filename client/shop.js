Template.shop.events({
	'click #submit':function(evt,tmpl){
		evt.preventDefault();
		var name = tmpl.find('.name').value;
		var email = tmpl.find('.email').value;
		var phone = tmpl.find('.mobile').value;
		var delivery=tmpl.find('.delivery').value;
		var apple=tmpl.find('.apple').value;
		var pear=tmpl.find('.pear').value;
		var pineapple=tmpl.find('.pineapple').value;;
		var address=tmpl.find('.address').value;;
		var date=new Date();
		
		if(name==="" || email==="" || phone==="" || delivery==="" || apple==="" ||pear==="" || pineapple==="" ||
			address===""){
			Session.set('adding_cart', true);
			console.log("empty!");
		}
		Meteor.call('postAway', {
    data: { 
    	theName:name,
    	theEmail:email,
    	thePhone:phone,
    	theDelivery:delivery,
    	theApple:apple,
    	thePear:pear,
    	thePineapple:pineapple,
    	theAddr:address,
    	theDate:date.toLocaleDateString()+' at '+date.toLocaleTimeString()
     }
  },function(err,result){	
		return result.content;
	});

		Session.set('adding_cart', false);
		var blah="Your form has been submitted!";
		document.getElementById("ans").innerHTML=blah;

	},
	'click #addCart':function(evt,tmpl){
		evt.preventDefault();
		Session.set('adding_cart',true);
	},
	'click .cancel':function(){
		Session.set('adding_cart',false);
	}
});
Template.database.events({
	'click .remove':function(evt,tmpl){
	evt.preventDefault();
	var id=tmpl.data._id;
	 Shop.remove({_id:id});
	
	}
});

Template.shop.helpers({
adding_cart: function(){ 
	return Session.get('adding_cart');
}

});

// Template.form.rendered=function(){
// $('.ui.form')
//   .form({
//     name: {
//       identifier  : 'name',
//       rules: [
//         {
//           type   : 'empty',
//           prompt : 'Please enter your name'
//         }
//       ]
//     },
//     mobile: {
//       identifier  : 'mobile',
//       rules: [
//         {
//           type   : 'empty',
//           prompt : 'Please enter your mobile'
//         }
//       ]
//     },
//     email: {
//       identifier : 'email',
//       rules: [
//         {
//           type   : 'empty',
//           prompt : 'Please enter your email'
//         }
//       ]
//     },
//      address: {
//       identifier : 'address',
//       rules: [
//         {
//           type   : 'empty',
//           prompt : 'Please enter your address'
//         }
//       ]
//     }
//   });
// };
Template.form.rendered = function(){  
  $('.ui #login-form').form({
    name: {
      identifier: 'name',
      rules: [
        {
          type: 'empty',
          prompt: 'Please enter your name.'
        }
      ]
    }
  })
};