Router.route('/', function () {
  this.render('landing');
 
});

Router.map(function(){
    this.route('stores', {path: '/stores'});
this.route('feed', {path: '/feed'});
    
});

