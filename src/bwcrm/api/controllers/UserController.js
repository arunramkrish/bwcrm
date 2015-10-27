/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var bcrypt = require('bcryptjs');

module.exports = {
	
	signup :  function ( req , res ) {
		User.count({ username : req.param('username')}).exec(function ( err , count ){
			if(err)
				ErrorService.reportError(err , res);				
			if(count === 0)
			{
				User.create({					
					username : req.param('username') ,
					password : req.param('password') ,
					ecode : req.param('ecode') , 
					ename : req.param('ename') , 					
					dept : req.param('dept') ,
					desg : req.param('desg') ,
					doj : new Date(req.param('doj')).toString(),
					phnum : req.param('phnum') ,
					email : req.param('email') , 
					ctc : req.param('ctc') ,
					status : req.param('status') ,
					role :  req.param('role') ,
					dor : new Date(req.param('dor')).toString()
				}).exec(function(err , user){
					sails.log('User Created : ' + user.username);
					return res.redirect('/userboard?q=added');		
				});					
			}			
			else
			{
				sails.log('Duplicate Signup : ' + req.param('username'));
				return res.redirect('/signup?q=alreadythere');
			}
		});
	} ,
	
	login : function ( req , res ) {
		sails.log('Login action');
		User.findOne({ username : req.param('username') }).exec(function(err , found){
			if(err)
				ErrorService.reportError(err , res);					
			if(found === undefined) {
				sails.log('User invalid : ' + req.param('username'));
				return res.redirect('/?q=notpresent');
			} 
			else
			{
				if(found.status==='Active')
				{
					User.comparePassword(req.param('password') , found.password , function(err , result){
						if(err)
							ErrorService.reportError(err , res);				
						if(result)
						{
							sails.log('User logged in : ' + req.param('username'));
							req.session.authenticated = true ;
							delete found.password ;
							req.session.user = found ;
							Role.findOne({id:found.role}).exec(function(err,myrole){
								req.session.currentrole=myrole;
								sails.log('Login success');

		/*e = new Date();
		d = (e.getMonth() + 1) + '/' + e.getDate() + '/' + e.getFullYear();
		sails.log(d);
		sails.log(new Date(d).toString());		
		Visit.find({fpdate : new Date('d').toString()}).populateAll().exec(function(err , vts){
			if(err)
				ErrorService.reportError(err , res);					
			else
			{					
				return res.redirect('/dashboard' , { p_fp : vts });
			}

		});*/




		 						return res.redirect('/dashboard');
	 						});
						}
						else
						{
							req.session.authenticated = false ;
							sails.log('Password Mismatch : ' + req.param('username'));
							return res.redirect('/?q=wrongpwd');						
						}
					});
				}
				else
				{
					sails.log('User blocked. Please contact administrator. : ' + req.param('username'));
					return res.redirect('/?q=blocked');
				}
			}
		});
	} ,
	
	listUsers : function ( req , res ) { 		
		User.find().populateAll().exec(function(err , users){
			if(err)
				ErrorService.reportError(err , res);					
			else
			{
				for(var i =0 ; i < users.length ; i ++){
					delete users[i].password;
					users[i].role = users[i].role.title ;					
					users[i].doj = DateService.getFormattedDate(users[i].doj);					
					users[i].dor = DateService.getFormattedDate(users[i].dor);	
					if (users[i].doj === 'NaN/NaN/NaN')
						users[i].doj = '';
					if (users[i].dor === 'NaN/NaN/NaN')
						users[i].dor = '';	
				}
				return res.json(users);
			}
		});
	} ,
	
	userUpdate : function ( req , res ) { 
		Role.findOne({ title : req.param('role')}).exec(function(err , myrole){
				if(err)
					return res.json({ error : err });
				User.update({
					id : req.param('id')
				} ,
				{
					username : req.param('username') ,
					ecode : req.param('ecode') , 
					ename : req.param('ename') , 					
					dept : req.param('dept') ,
					desg : req.param('desg') ,
					doj : new Date(req.param('doj')).toString(),
					phnum : req.param('phnum') ,
					email : req.param('email') , 
					ctc : req.param('ctc') ,
					status : req.param('status') ,
					role :  myrole ,
					dor : new Date(req.param('dor')).toString()
				}).exec(function(err , user){
					if(err)
						ErrorService.reportError(err , res);											
					return res.redirect('/userboard?q=updated');
				});					

		});
	} , 
	
	userChgPwd : function ( req , res ) { 		
		User.update({
			id : req.param('id')
		} ,
		{
			username : req.param('username') ,					
			password : bcrypt.hashSync(req.param('password') , bcrypt.genSaltSync(10))
		}).exec(function(err , user){
			if(err)
				ErrorService.reportError(err , res);																			
			return res.redirect('/userboard?q=passsucc');
		});							
	} , 
	
	deleteUser : function ( req , res ){ 
		User.destroy({ id : req.param('id')}).exec(function ( err , user ){
			if(err)
				return res.json({ error : err });
			else 
				return res.json({ status : 'OK' })
		});

	} ,
	
	//Page Renderer
	
	userBoardPage : function( req , res ) {
		return res.view('user/userboardpage' , { query : req.param('q')});
	} , 
	
	userAddPage : function( req , res ) { 
		Role.find().exec(function(err , myroles){
			if(err)
				ErrorService.reportError(err , res);			
			return res.view('user/useraddpage' , { roles : myroles , query : req.param('q') } );
		});
	} ,
	
	userEditPage : function ( req , res ) {
		Role.find().exec(function(err , myroles){
			User.findOne({ id : req.param('id')}).populate('role').exec(function(err , user){
				if(err)
					ErrorService.reportError(err , res);
				delete user.password ;		
				user.doj = DateService.getFormattedDate(user.doj);					
				user.dor = DateService.getFormattedDate(user.dor);
				return res.view('user/usereditpage' , { roles : myroles , p_user : user , query : req.param('q') } );
			});
		});
	} ,
	
	userChgPwdPage : function ( req , res ) {		
		User.findOne({ id : req.param('id')}).exec(function(err , user){
			if(err)
				ErrorService.reportError(err , res);				
			return res.view('user/userchgpwd' , { p_user : user  , query : req.param('q') } );		
		});		
	} ,
	
	loginPage : function( req , res ){
		res.locals.layout = 'loggedout_layout';
		return  res.view('loginpage', {query : req.param('q')});
	} ,
	
	homePage : function(req , res){
		return res.view('homepage', {query : req.param('rol')});
	} ,
	
	logout : function ( req , res ) {
		req.session.authenticated = false ;
		return res.redirect('/');
	}
	
};  