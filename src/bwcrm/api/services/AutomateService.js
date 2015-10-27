module.exports = {
	createRolesAndAdmin : function(){
		var adminRole = { 
							title : "ADMIN" ,
						    description : "All rights are provided.",
						    master : [ true, true, true, true ]	,	
						    usermanagement : [ true, true ]	,	
						    customer : [ true, true ]	,	
						    project : [ true, true, true, true, true ]	,	
						    report : [ true, true ]	,	
						    contact : [ true ]						    
						};
		Role.findOrCreate({ title : "ADMIN"} , adminRole ).exec(function(err , s_role ){	
						 	if(err)
						 		ErrorService.logError(err);
						 	if(!err){
						 		var adminUser = {
								    username : "admin",
								    password : "admin",
								    ecode : 'ADM' ,
								    ename : 'ADMIN' ,
								    dept : '' ,
								    desg : '' ,
								    doj : '' ,
								    phnum : '' ,
								    email : '' ,
								    ctc : '' ,
								    status : 'Active' ,
								    role : s_role ,
								    dor : '' 
								};
						 		User.findOrCreate({ username : "admin"} , adminUser).exec(function(err , user ){
								 	if(err)
								 		ErrorService.logError(err);
						 		});
						 	}
						 });
		sails.log('AutomateService : createRolesAndAdmin');
	} , 	

	createContTypes : function(){
		var conttype_arr = [{"conttypename":"Engineer"},
		{"conttypename":"Project Owner"},
		{"conttypename":"Architect"},
		{"conttypename":"Mason"},
		{"conttypename":"Tile Layer"},
		{"conttypename":"Plumber"},
		{"conttypename":"Contractor"}];

		for(var i  in conttype_arr ) 
		{
			ContType.findOrCreate( conttype_arr[i] , conttype_arr[i]).exec(function(){
				
			});
		}
		sails.log('AutomateService : createContTypes');
	} ,

	createPdtTypes : function(){
		var pdttype_arr = [{"pdttype":"Floor Tiles"},
		{"pdttype":"Wall Tiles"},
		{"pdttype":"Chimney"},
		{"pdttype":"Sanitarywares"},
		{"pdttype":"Pipes and Fittings"},
		{"pdttype":"Solar Heater"}];

		for(var i  in pdttype_arr ) 
		{
			PdtType.findOrCreate( pdttype_arr[i] , pdttype_arr[i]).exec(function(){
				
			});
		}
		sails.log('AutomateService : createPdtTypes');
	} ,	

	createProjTypes : function(){
		var projtype_arr = [{"projtype":"Factory"},
		{"projtype":"Institution"},
		{"projtype":"House"},
		{"projtype":"Apartment"},
		{"projtype":"Hospital"}];

		for(var i  in projtype_arr ) 
		{
			ProjType.findOrCreate( projtype_arr[i] , projtype_arr[i]).exec(function(){
				
			});
		}
		sails.log('AutomateService : createProjTypes');
	} ,		

	createStatusTypes : function(){
		var statustype_arr = [{"statustype":"Billed"},
		{"statustype":"Showroom Visit"},
		{"statustype":"Quotation Given"},
		{"statustype":"Advance Paid"},
		{"statustype":"Outside Purchase"} ,
		{"statustype":"Needs Follow-up"}];

		for(var i  in statustype_arr ) 
		{
			StatusType.findOrCreate( statustype_arr[i] , statustype_arr[i]).exec(function(){
				
			});
		}
		sails.log('AutomateService : createStatusTypes');
	} ,		

	automateDatabaseEntries : function() {		
		AutomateService.createRolesAndAdmin();
		AutomateService.createContTypes();
		AutomateService.createPdtTypes();
		AutomateService.createProjTypes();
		AutomateService.createStatusTypes();
	}  ,

	dropDatabase : function() { 

	}
};