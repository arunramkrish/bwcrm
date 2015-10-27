module.exports = {

	   	getFormattedDate : function(arg){	
	   		var today = new Date(arg.toString());   			    
		    var dd = today.getDate();
		    var mm = today.getMonth()+1; //January is 0!

		    var yyyy = today.getFullYear();
		    if(dd<10){
		        dd='0'+dd
		    } 
		    if(mm<10){
		        mm='0'+mm
		    } 
		    return dd + '/' + mm + '/' + yyyy;
	    }	

};