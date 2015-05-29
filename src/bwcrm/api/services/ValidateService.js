module.exports = { 
	validate : function ( min , max , value , test ) {
		return ( test === value ) || (( min <= test) && ( max >= test )) ? true :  false ;
	} ,

	validateObjStyle : function ( obj ) {
		if ( ValidateService.validate(obj.min , obj.max , obj.value , obj.tvalue) )
			return { pass : true };
		else 
			return { pass : false , errMessage : obj.errMessage + ' TEST FAILED' };
	}

}