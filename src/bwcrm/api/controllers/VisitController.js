/**
 * Visit Controller
 *
 * @description :: Server-side logic for managing Requirement
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	/*visitAdd :  function ( req , res ) {
		Project.findOne({ id : req.param('id')}).exec(function(err , myproject){
			if((req.param('salesexec') === "Select Sales Executive") && ((req.param('markexec') !== "Select Marketing Executive"))) 
			{
					User.findOne({ id : req.param('markexec')}).exec(function(err , muser){
				//Customer.find({ id : req.param('id')}).exec(function(err , cust){
						Visit.create({	
						//cid : Customer.getNextID('cid') ,
						proj : req.param('id') ,
				     	projname : req.param('projname') ,
				    	cust : req.param('cuid'),
				    	custname : req.param('custname') ,
				    	custname : req.param('custname'),
				    	loc :req.param('loc'),
				    	contnum : req.param('contnum') ,
				    	st : req.param('st') ,
				    	nfudate : req.param('nfudate') ,
				    	salesexec : '' ,
						markexec : req.param('markexec'),
						sexec : '' ,
						mexec : muser.ename 
						}).exec(function(err , vt){
							sails.log('Visit Created  ' );	
							return res.redirect('/visitboard?q=added');		
					});
				});
			}
			else if((req.param('salesexec') !== "Select Sales Executive") && ((req.param('markexec') === "Select Marketing Executive")))
			{

				User.findOne({ id : req.param('salesexec')}).exec(function(err , suser){
							Visit.create({	
							//cid : Customer.getNextID('cid') ,
							proj : req.param('id') ,
					     	projname : req.param('projname') ,
					    	cust : req.param('cuid'),
					    	custname : req.param('custname') ,
					    	custname : req.param('custname'),
					    	loc :req.param('loc'),
					    	contnum : req.param('contnum') ,
					    	st : req.param('st') ,
					    	nfudate : req.param('nfudate') ,
					    	salesexec : req.param('salesexec') ,
							markexec : '',
							sexec : suser.ename ,
							mexec :  ''
							}).exec(function(err , vt){
								sails.log('Visit Created  ');	
								return res.redirect('/visitboard?q=added');		
						});
				});				
			}
			else
			{		
				User.findOne({ id : req.param('salesexec')}).exec(function(err , suser){
				User.findOne({ id : req.param('markexec')}).exec(function(err , muser){
					//Customer.find({ id : req.param('id')}).exec(function(err , cust){
							Visit.create({	
							//cid : Customer.getNextID('cid') ,
							proj : req.param('id') ,
					     	projname : req.param('projname') ,
					    	cust : req.param('cuid'),
					    	custname : req.param('custname') ,
					    	custname : req.param('custname'),
					    	loc :req.param('loc'),
					    	contnum : req.param('contnum') ,
					    	st : req.param('st') ,
					    	nfudate : req.param('nfudate') ,
					    	salesexec : req.param('salesexec') ,
							markexec : req.param('markexec'),
							sexec : suser.ename ,
							mexec : muser.ename 
							}).exec(function(err , vt){
								sails.log('Visit Created  ' );	
								return res.redirect('/visitboard?q=added');		
						});
					});
				});
			}											
		});
				
	} ,*/

	visitAdd :  function ( req , res ) {
		
	    if(req.session.currentrole.title==='Sales Executive')
		{	    		
	    	Visit.create({				
				proj : req.param('vprojid') ,
		     	projname : req.param('vvprojname') ,
		    	cust : req.param('vcusid'),
		    	custname : req.param('vvcusname') ,
		    	requi : req.param('vvid') ,
		    	reqtype :req.param('vvreqtype'),
		    	measure : req.param('vvmeasure') ,
		    	approx : req.param('vvapprox') ,
		    	remarks : req.param('vvremarks') ,
		    	status : req.param('rstatustype') ,
	    		salesexec : req.session.user,
	    		sexec : req.session.user.ename,
	    		markexec : '',
				mexec :  '' ,
				updatedby : '',
				updby : '' ,
				fudate : ''
			}).exec(function(err , vt){
				sails.log('Visit Created ');	
				return res.redirect('/viewproj?id=' + req.param('vcusid'));		
			});
	    }
	    else if(req.session.currentrole.title==='Marketing Executive')
	    { 
	    	Visit.create({				
				proj : req.param('vprojid') ,
		     	projname : req.param('vvprojname') ,
		    	cust : req.param('vcusid'),
		    	custname : req.param('vvcusname') ,
		    	requi : req.param('vvid') ,
		    	reqtype :req.param('vvreqtype'),
		    	measure : req.param('vvmeasure') ,
		    	approx : req.param('vvapprox') ,
		    	remarks : req.param('vvremarks') ,
		    	status : req.param('rstatustype') ,
	    		salesexec : '',
	    		sexec : '',
				markexec : req.session.user,
				mexec :  req.session.user.ename ,
				updatedby : '',
				updby : '',
				fudate : ''
				}).exec(function(err , vt){
				sails.log('Visit Created ');	
				return res.redirect('/viewproj?id=' + req.param('vcusid'));		
			});
		}
		else
		{			
			Visit.create({				
				proj : req.param('vprojid') ,
		     	projname : req.param('vvprojname') ,
		    	cust : req.param('vcusid'),
		    	custname : req.param('vvcusname') ,
		    	requi : req.param('vvid') ,
		    	reqtype :req.param('vvreqtype'),
		    	measure : req.param('vvmeasure') ,
		    	approx : req.param('vvapprox') ,
		    	remarks : req.param('vvremarks') ,
		    	status : req.param('rstatustype') ,
				salesexec : '',
	    		sexec : '',
				markexec : '',
				mexec :  '' ,
				updatedby : req.session.user,
				updby : req.session.user.ename,
				fudate : ''
				}).exec(function(err , vt){
				sails.log('Visit Created ');	
				return res.redirect('/viewproj?id=' + req.param('vcusid'));		
			});
		}
	} ,


	listVisit : function ( req , res ) { 		
		Visit.find().populateAll().exec(function(err , vts){
			if(err)
				ErrorService.reportError(err , res);					
			else
			{
				for(var i =0 ; i < vts.length ; i ++){
					vts[i].fudate = DateService.getFormattedDate(vts[i].fudate);	
				}
				return res.json(vts);
			}

		});
	} ,

	listFP : function ( req , res ) { 
		sails.log(new Date(req.param('d')).toString());		
		Visit.find({fpdate : new Date(req.param('d')).toString()}).populateAll().exec(function(err , vts){
			if(err)
				ErrorService.reportError(err , res);					
			else
			{					
				return res.view('/' , { p_fp : vts });
			}

		});
	} ,


	visitUpdate : function ( req , res ) {
	 		User.findOne({ id : req.param('salesexec')}).exec(function(err , suser){
			User.findOne({ id : req.param('markexec')}).exec(function(err , muser){
			
				Visit.update({
					id : req.param('id')
				} ,
				 {		
				 		//scust : req.param('scust'),
						custname : req.param('custname') ,
				    	loc :req.param('loc'),
				    	contnum : req.param('contnum') ,
				    	st : req.param('st') ,
				    	nfudate : req.param('nfudate') ,
				    	salesexec : req.param('salesexec') ,
						markexec : req.param('markexec'), 
						
				}).exec(function(err , vt){
					if(err)
						ErrorService.reportError(err ,vt);											
					return res.redirect('/visitboard?q=updated');
				});	
				});	
				});	
						
	} , 	

	deleteVisit : function ( req , res ){ 
		Visit.destroy({ id : req.param('id')}).exec(function ( err ,vt){
			if(err)
				return res.json({ error : err });
			else 
				return res.json({ status : 'OK' })
		});
	} ,

	//Page Renderer

	visitBoardPage : function( req , res ) {

			return res.view('visit/visitboardpage' , {  query : req.param('q')});
			
	} , 
	requvisitEditPage : function( req , res ) {

			return res.view('visit/visitboardpage' , {  query : req.param('q')});
			
	} , 

	visitAddPage : function( req , res ) { 
		Customer.findOne({ id : req.param('id')}).exec(function(err , scust){

	Project.findOne({id : req.param('id')}).exec(function(err , sproj){
		if(err)
			ErrorService.reportError(err , res);
		Role.findOne({ title : 'Sales Executive'}).exec(function(err , salesrole){
			User.find({ role : salesrole.id}).exec(function(err , salesuser){
				if(err)
					ErrorService.reportError(err , res);
				Role.findOne({ title : 'Marketing Executive'}).exec(function(err , markrole){
					User.find({ role : markrole.id}).exec(function(err , markuser){
						
						if(err)
							ErrorService.reportError(err , res);
						return res.view('visit/visitnewboardpage'  , { p_cust : scust , proj : sproj , suser : salesuser , muser : markuser , query : req.param('q') } );
					});
					
				});				
			});
		});
		});
	});


		
	} ,

	visitEditPage : function ( req , res ) {	
		Visit.findOne({ id : req.param('id')}).exec(function(err , svt){
			if(err)
				ErrorService.reportError(err , res);

			Role.findOne({ title : 'Sales Executive'}).exec(function(err , salesrole){
				User.find({ role : salesrole.id}).exec(function(err , salesuser){
					if(err)
						ErrorService.reportError(err , res);
					Role.findOne({ title : 'Marketing Executive'}).exec(function(err , markrole){
						User.find({ role : markrole.id}).exec(function(err , markuser){
							
							if(err)
								ErrorService.reportError(err , res);
							return res.view('visit/visiteditpage'  , { p_vt : svt, suser : salesuser , muser : markuser , query : req.param('q') } );
						});
						
					});				
				});
			});

		});
	} ,

	passReqID : function ( req , res ){ 
		Requ.findOne({ id : req.param('id')}).exec(function(err , myrequ){
			if(err)
				return res.json({ error : err });
			else 
			{
				return res.json({ status : myrequ.id })
			}
		});
	} ,	

	listReqVisit: function ( req , res ) {	
		Visit.find({ requi : req.param('id')  }).populateAll().exec(function(err , visi){
			if(err)
				ErrorService.reportError(err , res);					
			else
			{
				return res.json(visi);
			}
		});
	} ,	
}; 