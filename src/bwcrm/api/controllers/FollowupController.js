/**
 * RequirementController
 *
 * @description :: Server-side logic for managing Requirement
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	fuAdd :  function ( req , res ) {
		Project.findOne({ id : req.param('id')}).exec(function(err , myproject){
			if((req.param('salesexec') === "Select Sales Executive") && ((req.param('markexec') !== "Select Marketing Executive"))) 
			{			
					User.findOne({ id : req.param('markexec')}).exec(function(err , muser){

							Followup.create({	
							//cid : Customer.getNextID('cid') ,
							 
					  //   	projtype : myproject.projtype,
					    	//cust : mycust.id,
					    	proj : req.param('id') ,
					     	projname : req.param('projname') ,
					    	cust : req.param('cuid'),
					    	custname : req.param('custname') ,
					    	salesexec : '' ,
							markexec : req.param('markexec') ,
							sexec : '' ,
							mexec : muser.ename,
							ftype : req.param('ftype') ,
							fudate : new Date(req.param('fudate')).toString(),
							st : req.param('st'),
							rm : req.param('rm')
					    	}).exec(function(err , fu){
								sails.log('Follow-up Created : ' + fu.ftype);	
								return res.redirect('/fuboard?q=added');		
						});
					});
			}
			else if((req.param('salesexec') !== "Select Sales Executive") && ((req.param('markexec') === "Select Marketing Executive")))
			{
				User.findOne({ id : req.param('salesexec')}).exec(function(err , suser){

							Followup.create({	
							//cid : Customer.getNextID('cid') ,
							 
					  //   	projtype : myproject.projtype,
					    	//cust : mycust.id,
					    	proj : req.param('id') ,
					     	projname : req.param('projname') ,
					    	cust : req.param('cuid'),
					    	custname : req.param('custname') ,
					    	salesexec : req.param('salesexec') ,
							markexec : '' ,
							sexec : suser.ename ,
							mexec : '',
							ftype : req.param('ftype') ,
							fudate : new Date(req.param('fudate')).toString(),
							st : req.param('st'),
							rm : req.param('rm')
					    	}).exec(function(err , fu){
								sails.log('Follow-up Created : ' + fu.ftype);	
								return res.redirect('/fuboard?q=added');		
						});
				});				
			}
			else
			{
				User.findOne({ id : req.param('salesexec')}).exec(function(err , suser){
					User.findOne({ id : req.param('markexec')}).exec(function(err , muser){

							Followup.create({	
							//cid : Customer.getNextID('cid') ,
							 
					  //   	projtype : myproject.projtype,
					    	//cust : mycust.id,
					    	proj : req.param('id') ,
					     	projname : req.param('projname') ,
					    	cust : req.param('cuid'),
					    	custname : req.param('custname') ,
					    	salesexec : req.param('salesexec') ,
							markexec : req.param('markexec') ,
							sexec : suser.ename ,
							mexec : muser.ename,
							ftype : req.param('ftype') ,
							fudate : new Date(req.param('fudate')).toString(),
							st : req.param('st'),
							rm : req.param('rm')
					    	}).exec(function(err , fu){
								sails.log('Follow-up Created : ' + fu.ftype);	
								return res.redirect('/fuboard?q=added');		
						});
					});
				});
			}
		});									
			
	} ,
	

	listFu : function ( req , res ) { 		
		Followup.find().populateAll().exec(function(err , fu){
			if(err)
				ErrorService.reportError(err , res);					
			else
			{
				for(var i =0 ; i < fu.length ; i ++){
					fu[i].fudate = DateService.getFormattedDate(fu[i].fudate);					
				}
				return res.json(fu);
			}
		});
	} ,

	fuUpdate : function ( req , res ) { 		
				Followup.update({
					id : req.param('id')
				} ,
				{
					//projname : req.param('projname') ,
						custname : req.param('custname') ,
				    	projname : req.param('projname') ,
				    	salesexec : req.param('salesexec') ,
						markexec : req.param('markexec') ,
						ftype : req.param('ftype') ,
						fudate : new Date(req.param('fudate')).toString(),
						st : req.param('st'),
						rm : req.param('rm')

				}).exec(function(err , fu){
					if(err)
						ErrorService.reportError(err , res);											
					return res.redirect('/fuboard?q=updated');
				});					
	} , 

	deleteFu : function ( req , res ){ 
		Followup.destroy({ id : req.param('id')}).exec(function ( err ,fu ){
			if(err)
				return res.json({ error : err });
			else 
				return res.json({ status : 'OK' })
		});
	} ,

	//Page Renderer

	fuBoardPage : function( req , res ) {
		Project.findOne({ projname : 'projname'}).exec(function(err , sproj){
					
						if(err)
							ErrorService.reportError(err , res);
		return res.view('followup/fuboardpage' , { proj : sproj , query : req.param('q')});
		});
	} , 

	fuAddPage : function( req , res ) {
		if (!req.param('id')) {
			console.log("Project id is not passed");
		}
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
						return res.view('followup/fuaddpage' , { proj : sproj , suser : salesuser , muser : markuser , query : req.param('q') } );
					});
				});				
			});
		});
	});
				
	} ,
	fualogAddPage : function( req , res ) {
		Followup.findOne({ id : req.param('id')}).exec(function(err , sfu){

	Role.findOne({ title : 'Sales Executive'}).exec(function(err , salesrole){
			User.find({ role : salesrole.id}).exec(function(err , salesuser){
				if(err)
					ErrorService.reportError(err , res);
				Role.findOne({ title : 'Marketing Executive'}).exec(function(err , markrole){
					User.find({ role : markrole.id}).exec(function(err , markuser){
						if(err)
							ErrorService.reportError(err , res);
					sfu.fudate = DateService.getFormattedDate(sfu.fudate);	
					
						return res.view('followup/fualogaddpage' , { p_fu : sfu, suser : salesuser , muser : markuser , query : req.param('q') } );
					});
				});				
			});
		});

		});			
	} ,

	fuEditPage : function ( req , res ) {	
		Followup.findOne({ id : req.param('id')}).exec(function(err , sreq){
			if(err)
				ErrorService.reportError(err , res);
			sreq.fudate = DateService.getFormattedDate(sreq.fudate);					
			
			return res.view('followup/fueditpage' , { p_fu : sreq , query : req.param('q') } );
		});
	}, 

listFualog : function ( req , res ) { 		
		Actionlog.find().populateAll().exec(function(err , fualog){
			if(err)
				ErrorService.reportError(err , res);					
			else
			{
				for(var i =0 ; i < fualog.length ; i ++){
					fualog[i].fudate = DateService.getFormattedDate(fualog[i].fudate);	
					fualog[i].nfudate = DateService.getFormattedDate(fualog[i].nfudate);						
				}
				return res.json(fualog);
			}
		});
	} ,

	fualogAdd :  function ( req , res ) {
		Project.findOne({ id : req.param('id')}).exec(function(err , myproject){

		if((req.param('salesexec') === "Select Sales Executive") && ((req.param('markexec') !== "Select Marketing Executive"))) 
			{			
				//	User.findOne({ id : req.param('markexec')}).exec(function(err , muser){

		
						Actionlog.create({	
					
				    	custname : req.param('custname') ,
				    	projname : req.param('projname') ,
				    	salesexec : '' ,
						markexec : req.param('markexec') ,
						sexec : '',
						mexec :  req.param('markexec') ,
						ftype : req.param('ftype') ,
						fudate : new Date(req.param('fudate')).toString(),
						nfudate : new Date(req.param('nfudate')).toString(),
						st : req.param('st'),
						rm : req.param('rm')
				    	}).exec(function(err , fu){
							sails.log('Next Follow-up Created : ' );	
							return res.redirect('/fualogboard?q=added');		
						});
				    
											
			}
			else if((req.param('salesexec') !== "Select Sales Executive") && ((req.param('markexec') === "Select Marketing Executive")))
			{
				//User.findOne({ id : req.param('salesexec')}).exec(function(err , suser){


					Actionlog.create({	
					
				    	custname : req.param('custname') ,
				    	projname : req.param('projname') ,
				    	salesexec : req.param('salesexec') ,
						markexec : '' ,
						sexec : req.param('salesexec') ,
						mexec : '',
						ftype : req.param('ftype') ,
						fudate : new Date(req.param('fudate')).toString(),
						nfudate : new Date(req.param('nfudate')).toString(),
						st : req.param('st'),
						rm : req.param('rm')
				    	}).exec(function(err , fu){
							sails.log('Next Follow-up Created : ' );	
							return res.redirect('/fualogboard?q=added');		
						});


							
			}
			else
			{
				//User.findOne({ id : req.param('salesexec')}).exec(function(err , suser){
					//User.findOne({ id : req.param('markexec')}).exec(function(err , muser){

					Actionlog.create({	
					
				    	custname : req.param('custname') ,
				    	projname : req.param('projname') ,
				    	salesexec : req.param('salesexec') ,
						markexec : req.param('markexec') ,
						sexec : req.param('salesexec') ,
						mexec : req.param('markexec') ,
						ftype : req.param('ftype') ,
						fudate : new Date(req.param('fudate')).toString(),
						nfudate : new Date(req.param('nfudate')).toString(),
						st : req.param('st'),
						rm : req.param('rm')
				    	}).exec(function(err , fu){
							sails.log('Next Follow-up Created : ' );	
							return res.redirect('/fualogboard?q=added');		
						});
					
				
			}
		});									
			
	} ,

	fualogUpdate : function ( req , res ) { 		
				Actionlog.update({
					id : req.param('id')
				} ,
				{
					//projname : req.param('projname') ,
						ccustname : req.param('custname') ,
				    	projname : req.param('projname') ,
				    	salesexec : req.param('salesexec') ,
						markexec : req.param('markexec') ,
						sexec : req.param('salesexec') ,
						mexec : req.param('salesexec') ,
						ftype : req.param('ftype') ,
						fudate : new Date(req.param('fudate')).toString(),
						nfudate : new Date(req.param('nfudate')).toString(),
						st : req.param('st'),
						rm : req.param('rm')
				}).exec(function(err , fu){
					if(err)
						ErrorService.reportError(err , res);											
					return res.redirect('/fualogboard?q=updated');
				});					
	} , 

	

	fualogBoardPage : function( req , res ) {
		Project.findOne({ projname : 'projname'}).exec(function(err , sproj){
					
						if(err)
							ErrorService.reportError(err , res);
		return res.view('followup/fualogboardpage' , { proj : sproj , query : req.param('q')});
		});
	} , 
	listFualog : function ( req , res ) { 		
		Actionlog.find().populateAll().exec(function(err , fu){
			if(err)
				ErrorService.reportError(err , res);					
			else
			{
				for(var i =0 ; i < fu.length ; i ++){
					fu[i].fudate = DateService.getFormattedDate(fu[i].fudate);	
					fu[i].nfudate = DateService.getFormattedDate(fu[i].nfudate);					
				}
				return res.json(fu);
			}
		});
	} ,

	
	deleteFualog : function ( req , res ){ 
		Actionlog.destroy({ id : req.param('id')}).exec(function ( err ,fu ){
			if(err)
				return res.json({ error : err });
			else 
				return res.json({ status : 'OK' })
		});
	} ,

	//Page Renderer

	fualogBoardPage : function( req , res ) {
		Project.findOne({ projname : 'projname'}).exec(function(err , sproj){
					
						if(err)
							ErrorService.reportError(err , res);
		return res.view('followup/fualogboardpage' , { proj : sproj , query : req.param('q')});
		});
	} , 

	fualogEditPage : function ( req , res ) {	
		Actionlog.findOne({ id : req.param('id')}).exec(function(err , sfu){
			if(err)
				ErrorService.reportError(err , res);
			sfu.fudate = DateService.getFormattedDate(sfu.fudate);	
				sfu.nfudate = DateService.getFormattedDate(sfu.nfudate);				
			
			return res.view('followup/fualogeditpage' , { p_fu : sfu , query : req.param('q') } );
		});
	} ,

	fpVisitAdd :  function ( req , res ) {
		Visit.update({
			id : req.param('fpvisid')
		} ,
		{
			fudate : new Date(req.param('fpdate')).toString()
		}).exec(function(err , vi){
			if(err)
				ErrorService.reportError(err , res);											
			/*Followup.create({					
		    	proj : req.param('fpprojid') ,
		     	projname : req.param('fpprojname') ,
		    	cust : req.param('fpcusid'),
		    	custname : req.param('fpcusname') ,
		    	reuiq : req.param('fpreqid'),
		    	salesexec : req.param('fpsalesexec') ,
				markexec : req.param('fpmarkexec') ,
				sexec : req.param('fpsexec') ,
				mexec : req.param('fpmexec'),
				updatedby : req.param('fpupdatedby'),
				updby : req.param('fpupdby'),
				fudate : new Date(req.param('fpdate')).toString(),
		    	}).exec(function(err , fu){
					sails.log('Follow-up Created : ');	
					return res.redirect('/viewproj?id=' + req.param('fpcusid'));	
			});*/
		});					
	} ,

}; 