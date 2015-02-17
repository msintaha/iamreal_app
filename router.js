Router.route('/', function () {
  this.render('landing');
 
});

Router.map(function(){
    this.route('stores', {path: '/stores'});
this.route('feed', {path: '/feed'});
  this.route('shop', {path: '/shop'});  
  this.route('notyourconcern', {path: '/notyourconcern'});
 this.route('database', {path: '/database'});
});

