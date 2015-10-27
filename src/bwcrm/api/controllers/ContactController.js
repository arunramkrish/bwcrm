/**
 * RequirementController
 *
 * @description :: Server-side logic for managing Requirement
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {


			contAdd :  function ( req , res ) {

		// 	Contact.count({ ctype : req.param('ctype')}).exec(function ( err , count ){
		// 	if(err)
		// 		ErrorService.reportError(err , res);
		// 	if(count === 0)
		// 	{
		// //Project.findOne({ id : req.param('id')}).exec(function(err , myproject){

						Contact.create({	
						//cid : Customer.getNextID('cid') ,
						// proj : req.param('id') ,
				  //    	projname : req.param('projname') ,
				  //   	cust : req.param('cuid'),
				  //   	custname : req.param('custname') ,
				    	ctype : req.param('ctype') ,
		    			cname : req.param('cname') ,
				    	caddr1 : req.param('caddr1') ,
				    	caddr2 : req.param('caddr2') ,
				    	loc :req.param('loc'),
				    	trc:req.param('trc'),
				    	lnum:req.param('lnum'),
				    	mnum:req.param('mnum'),
				    	email:req.param('email')
						}).exec(function(err , cont){
					//		sails.log('Contacts Created : ' + cont.cname);	
							return res.redirect('/contboard?q=added');		
					});
	

			

			
	} ,

	listCont : function ( req , res ) { 		
		Contact.find().populateAll().exec(function(err , cont){
			if(err)
				ErrorService.reportError(err , res);					
			else
			{
				
				return res.json(cont);
			}
		});
	} ,

	contUpdate : function ( req , res ) { 		
				Contact.update({
					id : req.param('id')
				} ,
				{
					
						ctype : req.param('ctype') ,
		    			contnum : req.param('contnum') ,
				    	cname : req.param('cname') ,
				    	caddr1 : req.param('caddr1') ,
				    	caddr2 : req.param('caddr2') ,
				    	loc :req.param('loc'),
				    	trc:req.param('trc'),
				    	lnum:req.param('lnum'),
				    	mnum:req.param('mnum'),
				    	email:req.param('email')

				}).exec(function(err , cont){
					if(err)
						ErrorService.reportError(err ,cont);											
					return res.redirect('/contboard?q=updated');
				});					
	} , 

	deleteCont : function ( req , res ){ 
		Contact.destroy({ id : req.param('id')}).exec(function ( err ,cont){
			if(err)
				return res.json({ error : err });
			else 
				return res.json({ status : 'OK' })
		});
	} ,

	//Page Renderer

	contBoardPage : function( req , res ) {
							
		return res.view('contact/contboardpage' , { query : req.param('q')});
		
	} , 

	projcontBoardPage : function( req , res ) {
							
		return res.view('contact/projcontboardpage' , { query : req.param('q')});
		
	} , 

	contAddPage : function( req , res ) { 
		
		Project.findOne({ id : req.param('id')}).exec(function(err , sproj){
					
						if(err)
							ErrorService.reportError(err , res);
					return res.view('contact/contaddpage' , {  proj : sproj , query : req.param('q') } );
				
		});
	} ,

	contEditPage : function ( req , res ) {	
		Contact.findOne({ id : req.param('id')}).exec(function(err , sreq){
			if(err)
				ErrorService.reportError(err , res);
		return res.view('contact/conteditpage' , { p_cont : sreq , query : req.param('q') } );
		});
	}


}; 