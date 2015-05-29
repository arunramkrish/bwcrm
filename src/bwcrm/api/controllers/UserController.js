/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

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
					//doj : req.param('doj') , 
					doj : new Date(req.param('doj')).toString(),
					dept : req.param('dept') , 
					desg : req.param('desg') , 
					contnum : req.param('contnum') , 
					ctc : req.param('ctc') , 
					status : req.param('status') , 
					dor : new Date(req.param('dor')).toString(),
					role :  req.param('role')
				}).exec(function(err , user){
					sails.log('USER CREATED : ' + user.username);
					return res.redirect('/userboard');		
				});					

			}			
			else
			{
				sails.log('USER TRIED DUPLICATE SIGNUP : ' + req.param('username'));
				return res.redirect('/');
			}
		});
	} ,

	login : function ( req , res ) {
		sails.log('login action');
		User.findOne({ username : req.param('username') }).exec(function(err , found){
			if(err)
				ErrorService.reportError(err , res);					

			if(found === undefined) {
				//user not present
				sails.log('login user not present');
				return res.redirect('/');
			} 
			else
			{

				//user present so compare 
				User.comparePassword(req.param('password') , found.password , function(err , result){
					if(err)
						ErrorService.reportError(err , res);				
					if(result)
					{
						//password matches 
						sails.log('LOGGED IN : ' + req.param('username'));
						req.session.authenticated = true ;
						//delete found.password ;
						req.session.user = found ;
						sails.log('login success');
						return res.redirect('/dashboard');
					}
					else
					{
						//password dismatch
						req.session.authenticated = false ;
						sails.log('PASSWORD MISMATCH : ' + req.param('username'));
						return res.redirect('/');						
					}
				});
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
					delete users[i].password ;
					users[i].role = users[i].role.title ;
										//users[i].role = users[i].role.Date.toString("YYYY-MM-DD") ;
			}
				return res.json(users);
			}
		});
	} ,


	userUpdate : function ( req , res ) { 
		Role.findOne({ title : req.param('role')}).exec(function(err , myrole){
				if(err)
					return res.json({ error : err });
				sails.log(myrole);
				User.update({
					id : req.param('id')
				} ,
				{
					ecode : req.param('ecode') ,
					ename : req.param('ename') ,
					password : req.param('password') ,
					doj : new Date(req.param('doj')).toString(),
					//doj : req.param('doj') , 
					dor : req.param('dor') , 
					dept : req.param('dept') , 
					role :  myrole ,
					ctc : req.param('ctc') ,
					loginid:req.param('loginid'),
					status :req.param('status'),
					contnum : req.param('contnum')

				}).exec(function(err , user){
					if(err)
						ErrorService.reportError(err , res);					
					//console.log(err);
					//sails.log('USER UPDATED : ' + user);
					//return res.redirect('/userboard?q=addeduser');		
					return res.redirect('/userboard');
				});					

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
				return res.view('user/usereditpage' , { roles : myroles , p_user : user , query : req.param('q') } );
			});
		});
	} ,

	loginPage : function( req , res ){
		res.locals.layout = 'loggedout_layout';
		return  res.view('loginpage');
	} ,

	homePage : function(req , res){
		return res.view('homepage');
	} ,

	logout : function ( req , res ) {
		req.session.authenticated = false ;
		return res.redirect('/');
	}

}; //end of module.exports

 