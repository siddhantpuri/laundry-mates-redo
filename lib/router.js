Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return [Meteor.subscribe('orders'),Meteor.subscribe('requests'), Meteor.subscribe('slots'), Meteor.subscribe('dorms'), Meteor.subscribe('mates')]; }
});



Router.map(function(){
	this.route('home', {
	    layoutTemplate: 'form_layout',
		path: '/',
		template: 'home'
	});

	// Login-Home
	this.route('login', {
	    layoutTemplate: 'form_layout',
		path: '/login',
		template: 'login'
	});

	// Register
	this.route('register', {
	    layoutTemplate: 'form_layout',
		path: '/register',
		template: 'register'
	});

	this.route('ForgotPassword', {
	    layoutTemplate: 'form_layout',
		path: '/forgot',
		template: 'ForgotPassword'
	});

	this.route('ResetPassword', {
	    layoutTemplate: 'form_layout',
		path: '/reset/:token',
		template: 'ResetPassword'
	});
	
	this.route('dashboard', {
		path: '/dashboard',
		layoutTemplate: 'layout',
		template: 'dashboard',
		onBeforeAction: function(){
			if(Meteor.user() == null){
				Router.go('/');
			}
			this.next();
		}
	});
	
	this.route('orderForm', {
	    layoutTemplate: 'layout',
		path: '/orderform',
		template: 'orderForm'
	});
	
	this.route('schedule', {
	    layoutTemplate: 'layout',
		path: '/schedule',
		template: 'schedule'
	});
	
	this.route('create', {
	    layoutTemplate: 'layout',
		path: '/create',
		template: 'create'
	});
	
	this.route('pay', {
	    layoutTemplate: 'layout',
		path: '/pay',
		template: 'pay'
	});
	
	this.route('orderlist', {
	    layoutTemplate: 'layout',
		path: '/orderlist/:_id',
		template: 'orderList',
		data: function() { return Slots.findOne(this.params._id); }
	});
	
	this.route('permissions', {
	    layoutTemplate: 'layout',
		path: '/my-permissions',
		template: 'permissions',
		onBeforeAction: function(){
			if(Meteor.user() == null){
			    Session.set('Route', '/my-permissions');
				Router.go('/');
			}
			this.next();
		}
	});
});






