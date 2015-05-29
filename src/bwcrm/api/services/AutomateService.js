module.exports = {
	
	createRolesAndAdmin : function(){
		var adminRole = { 
							title : "ADMIN" ,
						    description : "All rights are provided.",
						    settings : [ true, true ],
						    
						    security : [ true, true, true, true],
						    help : true
						};
		Role.findOrCreate({ title : "ADMIN"} , adminRole ).exec(function(err , s_role ){	
						 	if(err)
						 		ErrorService.logError(err);
						 	if(!err){
						 		var adminUser = {
								    username : "admin",
								    password : "admin",
								    fname : 'Default' ,
								    lname : 'Admin' ,
								    role : s_role 
								};
						 		User.findOrCreate({ username : "admin"} , adminUser).exec(function(err , user ){
								 	if(err)
								 		ErrorService.logError(err);
						 		});
						 	}
						 });
		sails.log('AutomateService : createRolesAndAdmin');
	} , 	

	automateDatabaseEntries : function() {
		
		AutomateService.createRolesAndAdmin();
	}  ,

	dropDatabase : function() { 

	}
};