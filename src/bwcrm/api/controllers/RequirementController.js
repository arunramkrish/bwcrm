/**
 * RequirementController
 *
 * @description :: Server-side logic for managing Requirement
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	/*reqAdd :  function ( req , res ) {
		Project.findOne({ id : req.param('id')}).exec(function(err , myproject){

						Requ.create({	
						//cid : Customer.getNextID('cid') ,
						proj : req.param('id') ,
				     	projname : req.param('projname') ,
				    	cust : req.param('cuid'),
				    	custname : req.param('custname') ,
				    	reqtype : req.param('reqtype') ,
		    			nfudate : new Date(req.param('nfudate')).toString(),
				    	st : req.param('st') ,
				    	meas : req.param('meas') ,
				    	av : req.param('av') ,
				    	opr :req.param('opr'),
				    	bn:req.param('bn')
						}).exec(function(err , req){
							sails.log('Requirement Created : ' + req.reqtype);	
							return res.redirect('/reqboard?q=added');		
					});
				});
												
			
	} ,*/

	reqAdd :  function (req , res ) {
			
		if(req.param('chim'))
		{
			Requ.create({	
				proj : req.param('id') ,
		     	projname : req.param('projname') ,
		    	cust : req.param('cuid'),
		    	custname : req.param('custname') ,
		    	reqtype : 'Chimney',
    			measureqty : req.param('chimmeasure') ,
		    	approx : req.param('chimapprox') ,
		    	reqdate : new Date(req.param('chimreqdate')).toString(),
		    	remarks : req.param('chimremarks') ,
				}).exec(function(err , req){
					sails.log('Requirement Created : ' + req.reqtype);	
					//return res.redirect('/reqboard?q=added');		
			});
		}
		if(req.param('sol'))
		{
			Requ.create({	
				proj : req.param('id'),
		     	projname : req.param('projname'),
		    	cust : req.param('cuid'),
		    	custname : req.param('custname') ,
		    	reqtype : 'Solar',
    			measureqty : req.param('solmeasure') ,
		    	approx : req.param('solapprox') ,
		    	reqdate : new Date(req.param('solreqdate')).toString() ,
		    	remarks : req.param('solremarks') ,
				}).exec(function(err , req){
					sails.log('Requirement Created : ' + req.reqtype);	
					//return res.redirect('/reqboard?q=added');		
			});
		}
		if(req.param('wtile'))
		{
			Requ.create({	
				proj : req.param('id'),
		     	projname : req.param('projname'),
		    	cust : req.param('cuid'),
		    	custname : req.param('custname') ,
		    	reqtype : 'Wall Tiles',
    			measureqty : req.param('wtilemeasure') ,
		    	approx : req.param('wtileapprox') ,
		    	reqdate : new Date(req.param('wtilereqdate')).toString() ,
		    	remarks : req.param('wtileremarks') ,
				}).exec(function(err , req){
					sails.log('Requirement Created : ' + req.reqtype);	
					//return res.redirect('/reqboard?q=added');		
			});
		}
		if(req.param('ftile'))
		{
			Requ.create({	
				proj : req.param('id') ,
		     	projname : req.param('projname') ,
		    	cust : req.param('cuid'),
		    	custname : req.param('custname') ,
		    	reqtype : 'Floor Tiles',
    			measureqty : req.param('ftilemeasure') ,
		    	approx : req.param('ftileapprox') ,
		    	reqdate : new Date(req.param('ftilereqdate')).toString() ,
		    	remarks : req.param('ftileremarks') ,
				}).exec(function(err , req){
					sails.log('Requirement Created : ' + req.reqtype);	
					//return res.redirect('/reqboard?q=added');		
			});
		}
		if(req.param('sanit'))
		{
			Requ.create({	
				proj : req.param('id'),
		     	projname : req.param('projname') ,
		    	cust : req.param('cuid'),
		    	custname : req.param('custname') ,
		    	reqtype : 'Sanitarywares',
    			measureqty : req.param('sanitmeasure') ,
		    	approx : req.param('sanitapprox') ,
		    	reqdate : new Date(req.param('sanitreqdate')).toString() ,
		    	remarks : req.param('sanitremarks') ,
				}).exec(function(err , req){
					sails.log('Requirement Created : ' + req.reqtype);	
					//return res.redirect('/reqboard?q=added');		
			});
		}
		if(req.param('pipe'))
		{
			Requ.create({	
				proj : req.param('id'),
		     	projname : req.param('projname'),
		    	cust : req.param('cuid'),
		    	custname : req.param('custname')  ,
		    	reqtype : 'Pipes and Fittings',
    			measureqty : req.param('pipemeasure') ,
		    	approx : req.param('pipeapprox') ,
		    	reqdate : new Date(req.param('pipereqdate')).toString() ,
		    	remarks : req.param('piperemarks') ,
				}).exec(function(err , req){
					sails.log('Requirement Created : ' + req.reqtype);	
					//return res.redirect('/reqboard?q=added');		
			});
		}																		
		return res.redirect('/viewproj?id=' + req.param('cuid'));
					
	} ,





	listReq : function ( req , res ) { 		
		Requ.find().populateAll().exec(function(err , requ){
			if(err)
				ErrorService.reportError(err , res);					
			else
			{
				for(var i =0 ; i < requ.length ; i ++){
					requ[i].nfudate = DateService.getFormattedDate(requ[i].nfudate);					
				}
				return res.json(requ);
			}
		});
	} ,

	reqUpdate : function ( req , res ) { 	
				Requ.update({
					id : req.param('rid')
				} ,
				{	
	    			measureqty : req.param('rmeasure') ,
			    	approx : req.param('rapprox') ,	
			    	reqdate : new Date(req.param('rreqdate')).toString() ,
			    	remarks : req.param('rremarks') ,				   	

				}).exec(function(err , requ){
					if(err)
						ErrorService.reportError(err , res);	
					return res.redirect('/viewproj?id=' + req.param('cusid'));
				});					
	} , 

	deleteReq : function ( req , res ){ 
		Requ.destroy({ id : req.param('id')}).exec(function ( err ,requ ){
			if(err)
				return res.json({ error : err });
			else 
				return res.json({ status : 'OK' })
		});
	} ,

	//Page Renderer

	reqBoardPage : function( req , res ) {
		Project.findOne({ projname : 'projname'}).exec(function(err , sproj){
					
						if(err)
							ErrorService.reportError(err , res);
		return res.view('requ/reqboardpage' , { proj : sproj , query : req.param('q')});
		});
	} , 

	reqAddPage : function( req , res ) { 
		
		Project.findOne({id : req.param('id')}).exec(function(err , sproj){
					
						if(err)
							ErrorService.reportError(err , res);
					return res.view('requ/reqaddpage' , {  proj : sproj , query : req.param('q') } );
				
		});
	} ,

	reqEditPage : function ( req , res ) {	
		Requ.findOne({ id : req.param('id')}).exec(function(err , sreq){
			if(err)
				ErrorService.reportError(err , res);
			sreq.nfudate = DateService.getFormattedDate(sreq.nfudate);					
			
			return res.view('requ/reqeditpage' , { p_requ : sreq , query : req.param('q') } );
		});
	} ,

	statusTypeList : function ( req , res ) {
		StatusType.find().exec(function(err , stat ){
			if(err)
				ErrorService.reportError(err , res);
			else
				return res.json(stat);
		});
	}
}; 