module.exports = {

	//@arg req.param('master')
	getMasterArray : function(master){
		var masterArr = [ "conttype" , "pdttype" , "projtype", "stattype"];

		var master_arr = [ false  , false , false , false ];
		if( master === undefined ){
			return master_arr;
		}
		if( master instanceof Array ){
			return PermissionService.arrayBoolify(masterArr , master );
		}
		else
		{
			return PermissionService.stringBoolify(masterArr , master);
		}

	} ,

	//@arg req.param('usermanagement')
	getUserManagementArray : function(usermanagement){
		var usermanagementArr = [ "roles" , 
							"users"];

		var usermanagement_arr = [ false  , false  ];
		if( usermanagement === undefined ){
			return usermanagement_arr;
		}
		if( usermanagement instanceof Array ){
			return PermissionService.arrayBoolify(usermanagementArr , usermanagement );
		}
		else
		{
			return PermissionService.stringBoolify(usermanagementArr , usermanagement);
		}

	} ,

	//@arg req.param('customer')
	getCustomerArray : function(customer){
		var customerArr = [ "cust" , 
							"searchcust"];

		var customer_arr = [ false  , false  ];
		if( customer === undefined ){
			return customer_arr;
		}
		if( customer instanceof Array ){
			return PermissionService.arrayBoolify(customerArr , customer );
		}
		else
		{
			return PermissionService.stringBoolify(customerArr , customer);
		}

	} ,

	//@arg req.param('project')
	getProjectArray : function(project){
		var projectArr = [ "proj" , 
							"req" , "visit" , "followup" , "fpactionlog"];

		var project_arr = [ false  , false , false , false , false ];
		if( project === undefined ){
			return project_arr;
		}
		if( project instanceof Array ){
			return PermissionService.arrayBoolify(projectArr , project );
		}
		else
		{
			return PermissionService.stringBoolify(projectArr , project);
		}

	} ,	

	//@arg req.param('report')
	getReportArray : function(report){
		var reportArr = [ "req" , 
							"reqdate"];

		var report_arr = [ false  , false];
		if( report === undefined ){
			return report_arr;
		}
		if( report instanceof Array ){
			return PermissionService.arrayBoolify(reportArr , report );
		}
		else
		{
			return PermissionService.stringBoolify(reportArr , report);
		}

	} ,		

	//@arg req.param('contact')
	getContactArray : function(contact){
		var contactArr = [ "cont" ];

		var contact_arr = [ false ];
		if( contact === undefined ){
			return contact_arr;
		}
		if( contact instanceof Array ){
			return PermissionService.arrayBoolify(contactArr , contact );
		}
		else
		{
			return PermissionService.stringBoolify(contactArr , contact);
		}

	} ,	

	arrayBoolify : function( modelArr , reqArr ){
		var arr_ret = new Array(modelArr.length);
		for(var i = 0 ; i < modelArr.length ; i ++ ){
			if(reqArr.indexOf(modelArr[i]) > -1 ){
				arr_ret[i] = true ;
			}
			else{
				arr_ret[i] = false ;
			}
		}
		return arr_ret ;
	} , 

	stringBoolify : function ( modelArr , reqStr ){
		var arr_ret = new Array(modelArr.length);
		for(var i = 0 ; i < modelArr.length ; i ++ ){
			if( modelArr[i].localeCompare(reqStr) === 0  ){
				arr_ret[i] = true ;
			}
			else 
			{
				arr_ret[i] = false;
			}
		}
		return arr_ret;
	}

};