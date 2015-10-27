module.exports = {

	reportsRequirement : function(req , res ){
		Requ.find({st : 'Follow-Up'}).populateAll().exec(function(err, fp){
			if(err )
				ErrorService.reportError(err, res );
		Requ.find({st : 'Billed'}).exec(function(err , bill){
			if(err )
				ErrorService.reportError(err, res );	
		Requ.find({st : 'Outside Purchase'}).exec(function(err , outpur){
			if(err )
				ErrorService.reportError(err, res );	
		Requ.find({st : 'Not required'}).exec(function(err , notreq){
			if(err )
				ErrorService.reportError(err, res );	
		Requ.find({st : 'Quatation given'}).exec(function(err , quote){
			if(err )
				ErrorService.reportError(err, res );			
			res.locals.layout = 'report_layout';
			sails.log(outpur);
			return res.view('reports/requirement' , { p_fp : fp, p_bill : bill, p_outpur : outpur, p_notreq : notreq, p_quote : quote });
		});
		});
		});
		});
		});

	} ,


	getRequirementGraph : function(req , res ){
		Requ.find({st : 'Follow-Up'}).exec(function(err , fpcount){
			if(err )
				ErrorService.reportError(err, res );
		Requ.find({st : 'Billed'}).exec(function(err , billcount){
			if(err )
				ErrorService.reportError(err, res );	
		Requ.find({st : 'Outside Purchase'}).exec(function(err , outpurcount){
			if(err )
				ErrorService.reportError(err, res );	
		Requ.find({st : 'Not required'}).exec(function(err , notreqcount){
			if(err )
				ErrorService.reportError(err, res );	
		Requ.find({st : 'Quatation given'}).exec(function(err , quotecount){
			if(err )
				ErrorService.reportError(err, res );															
				return res.json({ data :[
										{
											label : 'Follow-Up' ,
											value : fpcount.length ,
											color: "red",
									        highlight: "#5AD3D1"
										} ,
										{
											label : 'Billed' ,
											value : billcount.length ,
											color:"green",
									        highlight: "#FF5A5E"
										} ,
										{
											label : 'Outside Purchase' ,
											value : outpurcount.length ,
											color:"blue",
									        highlight: "#FF5A5E"
										} ,
										{
											label : 'Not required' ,
											value : notreqcount.length ,
											color:"black",
									        highlight: "#FF5A5E",
									        labelFontSize : '10',
        									labelAlign : 'left'
										} ,
										{
											label : 'Quatation given' ,
											value : quotecount.length ,
											color:"brown",
									        highlight: "#FF5A5E"
										}										
									]
								});
		});
		});
		});
		});
		});
	} ,


	reportsSearchReqDate : function(req , res ){
		Requ.find({createdAt : {'$gte': req.param('fromdate'), '$lt': req.param('todate')}}).exec(function(err, requ){
			if(err )
				ErrorService.reportError(err, res );	
			res.locals.layout = 'report_layout';				
			return res.view('reports/searchreqdateout' , { p_requ : requ });
		});

	} ,


	reportsSearchReqDatePage : function( req , res ) {
		return res.view('reports/searchreqbydate' , { query : req.param('q')});
	} , 



};

