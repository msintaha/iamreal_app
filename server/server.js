Meteor.methods({
		'removeEntryAll':function(){
			Shop.remove({});
		},
                'removeEntry': function(id){
                      Shop.remove({_id:id});
                },
		'postAway':function(data){
	// 	var text="please!";
	// //console.log(text);
	// 	return text;

	return	Meteor.http.call('POST',
    'http://localhost:3000/hello/',
   data);
		}
		

	});
