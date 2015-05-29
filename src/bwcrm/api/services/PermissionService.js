module.exports = {

	//@arg req.param('settings')
	getSettingsArray : function(settings){
		var settingsArr = [ "generalsettings" , 
							"databasecontrolpanel"];

		var settings_arr = [ false  , false  ];
		if( settings === undefined ){
			return settings_arr;
		}
		if( settings instanceof Array ){
			return PermissionService.arrayBoolify(settingsArr , settings );
		}
		else
		{
			return PermissionService.stringBoolify(settingsArr , settings);
		}

	} ,

	

	//@arg req.param('security')
	getSecurityArray : function(security){
		var securityArr = [ "rolespage" , 
							"userspage" , 
							"audittrailspage" , 
							"changepassword" ];

		var security_arr = [false ,false , false , false ];
		if( security === undefined ){
			return security_arr;
		}
		if( security instanceof Array){
			return PermissionService.arrayBoolify( securityArr , security );
		}
		else{
			return PermissionService.stringBoolify( securityArr , security );
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