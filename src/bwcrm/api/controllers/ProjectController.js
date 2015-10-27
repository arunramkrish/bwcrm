/**
 * ProjectController
 *
 * @description :: Server-side logic for managing Projects
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	projAdd :  function (req , res ) {
		
		sails.log('am in customer');

		Customer.findOne({ id : req.param('id')}).exec(function(err , mycust){
			if(err)
				ErrorService.reportError(err , res);
			Project.count({ projname : req.param('projname')}).exec(function ( err , count ){
				sails.log(req.param('id'));
				if(err)
					ErrorService.reportError(err , res);				
				if(count === 0)
				{
				    Project.create({
				    	projname : req.param('projname') ,
				    	projtype : req.param('projtype') ,
				    	calltype : req.param('calltype') ,
				    	cust : req.param('id') ,
				    	custname : mycust.custname ,
				    	description : req.param('description') ,
		    			startdate : new Date(req.param('startdate')).toString(),
		    			enddate : new Date(req.param('enddate')).toString(),
				    	addr : req.param('addr') ,
				    	buildstage : req.param('buildstage') 
					}).exec(function(err , proj){
						sails.log('Project Created : ' + proj.projname );
						//return res.redirect('/reqadd?id=' + proj.id);		
						return res.redirect('/viewproj?id=' + proj.custname);
					});
				}			
				else
				{
					sails.log('Duplicate project : ' + req.param('projname'));
					return res.redirect('/projadd?q=alreadythere');
				}
			});
		});
	} ,
	
	listproj : function ( req , res ) {
		Project.find().populateAll().exec(function(err , proj){
			if(err)
				ErrorService.reportError(err , res);					
			else
			{
				for(var i =0 ; i < proj.length ; i ++){
					proj[i].startdate = DateService.getFormattedDate(proj[i].startdate);					
					proj[i].enddate = DateService.getFormattedDate(proj[i].enddate);	
				}
				return res.json(proj);
			}
		});
	} ,
 

	listproj1 : function ( req , res ) {
		Project.find().populateAll().exec(function(err , proj){
			if(err)
				ErrorService.reportError(err , res);					
			else
			{
				for(var i =0 ; i < proj.length ; i ++){
					proj[i].startdate = DateService.getFormattedDate(proj[i].startdate);					
					proj[i].enddate = DateService.getFormattedDate(proj[i].enddate);	
				}
				return res.json(proj);
			}
		});
	} ,

	projDelete : function ( req , res ){ 
		Project.destroy({ id : req.param('id')}).exec(function ( err , proj ){
			if(err)
				return res.json({ error : err });
			else 
				return res.json({ status : 'OK' })
		});
	} ,

	passID : function ( req , res ){ 
		Project.findOne({ id : req.param('id')}).exec(function(err , myproj){
			if(err)
				return res.json({ error : err });
			else 
				return res.json({ status : myproj.id })
		});
	} ,	

	listProjReq1: function ( req , res ) {	
		Requ.find({ proj : req.param('id')  }).populateAll().exec(function(err , requ){
			if(err)
				ErrorService.reportError(err , res);					
			else
			{
				for(var i =0 ; i < requ.length ; i ++){
					requ[i].reqdate = DateService.getFormattedDate(requ[i].reqdate);					
				}
				return res.json(requ);
			}
		});
	} ,

	projUpdate : function ( req , res ) { 
	
		Project.update({
			id : req.param('id')
		} ,
		{
			projname : req.param('projname') ,
	    	projtype : req.param('projtype') ,
	    	calltype : req.param('calltype') ,
	    	description : req.param('description') ,
	    	startdate : new Date(req.param('startdate')).toString(),
	    	enddate : new Date(req.param('enddate')).toString(),
	    	addr : req.param('addr') ,
	    	buildstage : req.param('buildstage') 
		}).exec(function(err , proj){
			if(err)
				ErrorService.reportError(err , res);	
			sails.log(req.param('id1'));
			return res.redirect('/viewproj?id=' + req.param('id1'))
			//return res.redirect('/custboard');	
			//return res.view('customer/detailboardpage' , {query : req.param('q') } );
			//return res.redirect('/projboard?q=updated');
		
		});	
					
	} , 
	
	//Page Renderer

	projBoardPage : function( req , res ) {
		return res.view('project/projboardpage' , { query : req.param('q')});
	} , 

	projBoardPageCust : function( req , res ) {
		Customer.findOne({ id : req.param('id')}).exec(function(err , mycust){
			if(err)
				ErrorService.reportError(err , res);
			return res.view('project/projboardpagecust' ,  { cust : mycust , query : req.param('q') , id : req.param('id') });
		});
	} , 	

	projAddPage : function ( req , res ) {
		StatusType.find().exec(function(err , stattypes){
			if(err)
				ErrorService.reportError(err , res);
			Customer.findOne({ id : req.param('id')}).exec(function(err , mycust){			
			ProjType.find().exec(function(err , projtypes){
				if(err)
					ErrorService.reportError(err , res);			
				Customer.findOne({ id : req.param('id')}).exec(function(err , mycust){
					if(err)
						ErrorService.reportError(err , res);
					//return res.view('project/projaddpage' ,  { cust : mycust , query : req.param('q') , id : req.param('id') , projtype : projtypes , stattype : stattypes});
					return res.view('project/projallinone' ,  { cust : mycust , query : req.param('q') , id : req.param('id') , projtype : projtypes , stattype : stattypes});
				});
				});
			});
		});
	} ,

	projreqPage : function ( req , res ) {
		Project.findOne({ id : req.param('id')}).exec(function(err , mycust){
			if(err)
				ErrorService.reportError(err , res);
			return res.view('project/projreqpage' ,  { cust : mycust , query : req.param('q') , id : req.param('id') });
		});
	} ,

	projreq :  function (req , res ) {
		
		sails.log('am in customer');

		Project.findOne({ id : req.param('id')}).exec(function(err , mycust){
			if(err)
				ErrorService.reportError(err , res);
			Requirement.count({ reqtype : req.param('reqtype')}).exec(function ( err , count ){
				sails.log(req.param('id'));
				if(err)
					ErrorService.reportError(err , res);				
				if(count === 0)
				{
				    Requirement.create({
				    	projname : req.param('projname') ,
				    	projtype : req.param('projtype') ,
				    	cust : req.param('id') ,
				    	custname : mycust.custname ,
				    	reqtype : req.param('reqtype') ,
		    			nfudate : new Date(req.param('nfudate')).toString(),
				    	st : req.param('st') ,
				    	meas : req.param('meas') ,
				    	av : req.param('av') ,
				    	opr :req.param('opr'),
				    	bn:req.param('bn')
					}).exec(function(err , reqt){
						sails.log('Requirement Created : ' + reqt.reqtype );
						return res.redirect('/projreqlist?q=added');		
					});
				}			
				else
				{
					sails.log('Duplicate requirement : ' + req.param('reqname'));
					return res.redirect('/projreq?q=alreadythere');
				}
			});
		});
	} ,
	
	projreqlist : function( req , res ) {
		return res.view('project/projreqlist' , { query : req.param('q')});
	} , 
	
	// projreqlist : function ( req , res ) {
	// 	Requirement.find().populateAll().exec(function(err , req){
	// 		if(err)
	// 			ErrorService.reportError(err , res);					
	// 		else
	// 		{
	// 			for(var i =0 ; i < proj.length ; i ++){
	// 				req[i].nfudate = DateService.getFormattedDate(req[i].nfudate);					
	// 		}
	// 			return res.json(req);
	// 		}
	// 	});
	// } ,

	projEditPage : function ( req , res ) {
		Customer.find().exec(function(err , mycust){
		ProjType.find().exec(function(err , myprojtypes){
			Project.findOne({ id : req.param('id')}).exec(function(err , myproj){
				if(err)
					ErrorService.reportError(err , res);
				myproj.startdate = DateService.getFormattedDate(myproj.startdate);					
				myproj.enddate = DateService.getFormattedDate(myproj.enddate);
				Requ.find({projname : myproj.projname}).populateAll().exec(function(err,require){
					if(err)
						ErrorService.reportError(err , res);	
				});
				return res.view('project/projeditpage' , { p_cust : mycust, proj : myproj , projtypes : myprojtypes , requi : require, query : req.param('q') } );
			});
		});
		});
	} ,

	listCustProj : function ( req , res ) {	
		sails.log(req.param('id'));
		Project.find({ cust : req.param('id') }).populateAll().exec(function(err , proj){
			if(err)
				ErrorService.reportError(err , res);					
			else
			{
				for(var i =0 ; i < proj.length ; i ++){
					proj[i].startdate = DateService.getFormattedDate(proj[i].startdate);					
					proj[i].enddate = DateService.getFormattedDate(proj[i].enddate);	
				}
				return res.json(proj);
			}
		});
	} ,

	listCustReq : function ( req , res ) {	
		sails.log(req.param('id'));
		Requ.find({ cust : req.param('id') }).populateAll().exec(function(err , requ){

			if(err)
				ErrorService.reportError(err , res);					
			else
			{
				for(var i =0 ; i < requ.length ; i ++){
					requ[i].reqdate = DateService.getFormattedDate(requ[i].reqdate);					
				}
				return res.json(requ);
			}
		});
	} ,

	listProjReq : function ( req , res ) {	
		sails.log(req.param('id'));
		Requ.find({ cust : req.param('id')  }).populateAll().exec(function(err , requ){
			if(err)
				ErrorService.reportError(err , res);					
			else
			{
				for(var i =0 ; i < requ.length ; i ++){
					requ[i].reqdate = DateService.getFormattedDate(requ[i].reqdate);					
				}
				return res.json(requ);
			}
		});
	} ,

	listCustVisit : function ( req , res ) {	
		sails.log(req.param('id'));
		Visit.find({ cust : req.param('id') }).populateAll().exec(function(err , vi){
			if(err)
				ErrorService.reportError(err , res);					
			else
			{
				return res.json(vi);
			}
		});
	} ,

	listCustFp : function ( req , res ) {	
		sails.log(req.param('id'));
		Followup.find({ cust : req.param('id') }).populateAll().exec(function(err , fp){
			if(err)
				ErrorService.reportError(err , res);					
			else
			{
				for(var i =0 ; i < fp.length ; i ++){
					fp[i].fudate = DateService.getFormattedDate(fp[i].fudate);					
				}
				return res.json(fp);
			}
		});
	} ,


	pdtTypeList : function ( req , res ) {
		PdtType.find().exec(function(err , pdt ){
			if(err)
				ErrorService.reportError(err , res);
			else
				return res.json(pdt);
		});
	}	,

	projReqAdd :  function (req , res ) {
		
		Customer.findOne({ id : req.param('id')}).exec(function(err , mycust){
			if(err)
				ErrorService.reportError(err , res);
			Project.count({ projname : req.param('projname')}).exec(function ( err , count ){
				sails.log(req.param('id'));
				if(err)
					ErrorService.reportError(err , res);				
				if(count === 0)
				{
				    Project.create({
				    	projname : req.param('projname') ,
				    	projtype : req.param('projtype') ,
				    	cust : req.param('id') ,
				    	custname : mycust.custname ,
				    	description : req.param('description') ,
		    			startdate : new Date(req.param('startdate')).toString(),
		    			enddate : new Date(req.param('enddate')).toString(),
				    	addr : req.param('addr') ,
				    	buildstage : req.param('buildstage') 
					}).exec(function(err , proj){
						sails.log('Project Created : ' + proj.projname );
						//return res.redirect('/reqadd?id=' + proj.id);		
						if(req.param('chim'))
						{
							Requ.create({	
								proj : proj.id ,
						     	projname : proj.projname ,
						    	cust : req.param('id'),
						    	custname : mycust.custname ,
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
								proj : proj.id ,
						     	projname : proj.projname ,
						    	cust : req.param('id'),
						    	custname : mycust.custname ,
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
								proj : proj.id ,
						     	projname : proj.projname ,
						    	cust : req.param('id'),
						    	custname : mycust.custname ,
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
								proj : proj.id ,
						     	projname : proj.projname ,
						    	cust : req.param('id'),
						    	custname : mycust.custname ,
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
								proj : proj.id ,
						     	projname : proj.projname ,
						    	cust : req.param('id'),
						    	custname : mycust.custname ,
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
								proj : proj.id ,
						     	projname : proj.projname ,
						    	cust : req.param('id'),
						    	custname : mycust.custname ,
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
						return res.redirect('/viewproj?id=' + proj.cust);
					});
				}			
				else
				{
					sails.log('Duplicate project : ' + req.param('projname'));
					return res.redirect('/projadd?q=alreadythere');
				}
			});
		});
	} ,

}; 