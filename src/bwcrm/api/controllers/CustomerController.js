/**
 * CustomerController
 *
 * @description :: Server-side logic for managing Customers
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var shortid = require('shortid');

module.exports = {

	custAdd :  function ( req , res ) {
		Customer.count({ phnum : req.param('phnum')}).exec(function ( err , count ){
			if(err)
				ErrorService.reportError(err , res);				
			if(count === 0)
			{
				if((req.param('salesexec') !== 'Select Sales Executive') && (req.param('markexec') !== 'Select Marketing Executive'))
				{
					User.findOne({ id : req.param('salesexec')}).exec(function(err , suser){
					if(err)
						ErrorService.reportError(err , res);
						User.findOne({ id : req.param('markexec')}).exec(function(err , muser){
							if(err)
								ErrorService.reportError(err , res);		
							Customer.create({	
								cid : shortid.generate() ,				
								custname : req.param('custname') ,
								custtype : req.param('custtype') ,
								phnum : req.param('phnum') ,
								addr : req.param('addr') , 
								locality : req.param('locality') , 					
								pincode : req.param('pincode') ,
								salesexec : req.param('salesexec') ,
								markexec : req.param('markexec') ,
								sexec : suser.ename ,
								mexec : muser.ename 
							}).exec(function(err , cust){
								sails.log('Customer Created : ' + cust.custname);	
								//return res.redirect('/projadd?id=' + cust.id);	
								return res.redirect('/customer/custboardpage');	
							});
						});
					});	
				}
				else if((req.param('salesexec') === 'Select Sales Executive') && (req.param('markexec') !== 'Select Marketing Executive'))
				{
					User.findOne({ id : req.param('markexec')}).exec(function(err , muser){
						if(err)
							ErrorService.reportError(err , res);		
						Customer.create({	
							cid : shortid.generate() ,				
							custname : req.param('custname') ,
							custtype : req.param('custtype') ,
							phnum : req.param('phnum') ,
							addr : req.param('addr') , 
							locality : req.param('locality') , 					
							pincode : req.param('pincode') ,
							salesexec : '' ,
							markexec : req.param('markexec') ,
							sexec : '' ,
							mexec : muser.ename 
						}).exec(function(err , cust){
							sails.log('Customer Created : ' + cust.custname);	
							//return res.redirect('/projadd?id=' + cust.id);		
							return res.redirect('/customer/custboardpage');	
						});
					});
				}
				else if((req.param('salesexec') !== 'Select Sales Executive') && (req.param('markexec') === 'Select Marketing Executive'))
				{
					User.findOne({ id : req.param('salesexec')}).exec(function(err , suser){
						if(err)
							ErrorService.reportError(err , res);
						Customer.create({	
							cid : shortid.generate() ,				
							custname : req.param('custname') ,
							custtype : req.param('custtype') ,
							phnum : req.param('phnum') ,
							addr : req.param('addr') , 
							locality : req.param('locality') , 					
							pincode : req.param('pincode') ,
							salesexec : req.param('salesexec') ,
							markexec : '' ,
							sexec : suser.ename ,
							mexec : ''
						}).exec(function(err , cust){
							sails.log('Customer Created : ' + cust.custname);	
							//return res.redirect('/projadd?id=' + cust.id);		
							return res.redirect('/customer/custboardpage');	
						});
					});	
				}
			}			
			else
			{
				sails.log('Customer Duplicate : ' + req.param('custname'));
				return res.redirect('/custadd?q=alreadythere');
			}
		});
	} ,

	listCust : function ( req , res ) { 		
		Customer.find().populateAll().exec(function(err , cust){
			if(err)
				ErrorService.reportError(err , res);					
			else
			{
				for(var i =0 ; i < cust.length ; i ++){
					cust[i].createdAt = DateService.getFormattedDate(cust[i].createdAt);					
					cust[i].updatedAt = DateService.getFormattedDate(cust[i].updatedAt);	
				}
				return res.json(cust);
			}
		});
	} ,

	custUpdate : function ( req , res ) { 		
				Customer.update({
					id : req.param('id')
				} ,
				{
					custname : req.param('custname') ,
					custtype : req.param('custtype') ,
					phnum : req.param('phnum') ,
					addr : req.param('addr') , 
					locality : req.param('locality') , 					
					pincode : req.param('pincode') ,
					salesexec : req.param('salesexec') ,
					markexec : req.param('markexec')					
				}).exec(function(err , cust){
					if(err)
						ErrorService.reportError(err , res);											
					return res.redirect('/custboard?q=updated');
				});					
	} , 

	deleteCust : function ( req , res ){ 
		Customer.destroy({ id : req.param('id')}).exec(function ( err , cust ){
			if(err)
				return res.json({ error : err });
			else 
				return res.json({ status : 'OK' })
		});
	} ,

	//Page Renderer

	custBoardPage : function( req , res ) {
		return res.view('customer/custboardpage' , { p_cust : '1', query : req.param('q')});
	} , 

	custAddPage : function( req , res ) { 
		Role.findOne({ title : 'Sales Executive'}).exec(function(err , salesrole){
			User.find({ role : salesrole.id}).exec(function(err , salesuser){
				if(err)
					ErrorService.reportError(err , res);
				Role.findOne({ title : 'Marketing Executive'}).exec(function(err , markrole){
					User.find({ role : markrole.id}).exec(function(err , markuser){
						if(err)
							ErrorService.reportError(err , res);
						return res.view('customer/custaddpage' , { suser : salesuser , muser : markuser , query : req.param('q') } );
					});
				});				
			});
		});
	} ,

	custEditPage : function ( req , res ) {	
		Customer.findOne({ id : req.param('id')}).exec(function(err , scust){
			if(err)
				ErrorService.reportError(err , res);
			scust.createdAt = DateService.getFormattedDate(scust.createdAt);					
			scust.updatedAt = DateService.getFormattedDate(scust.updatedAt);	
			sails.log(scust.custname);
			return res.view('customer/custeditpage' , { p_cust : scust , query : req.param('q') } );
		});
	} ,

	custSearchPage : function( req , res ) {
		return res.view('customer/custsearch' , { query : req.param('q')});
	} ,

	custSearch :  function ( req , res ) {	
		Customer.findOne(
			{
				$or: [
						{ 
							phnum : { $exists : true, $in: [req.param('phnum')]}
						} , 
						{
							custname : { $exists : true, $in: [req.param('custname')]}
						}
					]
			}
			).exec(function(err , cust){
			if(err)
				ErrorService.reportError(err , res);
			if(cust === undefined || cust === null)
			{					
				return res.view('customer/custboardpage' , { p_cust : '1', query : req.param('q') } );	
			}
			else
			{
				return res.view('customer/custboardpage' , { p_cust : cust.id, query : req.param('q') } );
			}
		});
	} ,	

	listCustSearch : function ( req , res ) {	
		if(req.param('id') !== '1')
		{
			Customer.findOne({ id : req.param('id')}).exec(function(err , cus){
				if(err)
						ErrorService.reportError(err , res);
				Customer.find({ $or: [{phnum : cus.phnum , custname : cus.custname}]}).populateAll().exec(function(err , cu){
					if(err)
						ErrorService.reportError(err , res);					
					else
					{
						for(var i =0 ; i < cu.length ; i ++){
							cu[i].createdAt = DateService.getFormattedDate(cu[i].createdAt);					
							cu[i].updatedAt = DateService.getFormattedDate(cu[i].updatedAt);	
						}
						return res.json(cu);
					}
				});
			});
		}
		else
		{
			Customer.find().populateAll().exec(function(err , cust){
				if(err)
					ErrorService.reportError(err , res);					
				else
				{
					for(var i =0 ; i < cust.length ; i ++){
						cust[i].createdAt = DateService.getFormattedDate(cust[i].createdAt);					
						cust[i].updatedAt = DateService.getFormattedDate(cust[i].updatedAt);	
					}
					return res.json(cust);
				}
			});
		}
	} ,

	DetailBoardPage : function( req , res ) {
		Customer.findOne({ id : req.param('id')}).exec(function(err , scust){
			if(err)
				ErrorService.reportError(err , res);	
			return res.view('customer/detailboardpage' , { p_cust : scust, query : req.param('q') } );
		});
	} 	

}; 