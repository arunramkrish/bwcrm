module.exports = {
	    reportError  : function (err , res) {
	    	sails.log(err);
	    	return res.json({ error : err });
    	} ,

    	logError : function(err){
    		sails.log(err);
    	}
};