/**
 * VendorController
 *
 * @description :: Server-side logic for managing Vendors
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	vendorAdd :  function (req , res ) {
		Vendor.count({ venid : req.param('venid')}).exec(function ( err , count ){
			if(err)
				ErrorService.reportError(err , res);				
			if(count === 0)
			{
			    Vendor.create({
				  	venid : req.param('venid') ,
				  	ventype : req.param('ventype') ,
				  	name : req.param('name') ,
				    addr : req.param('addr') ,
				    pincode : req.param('pincode') ,
				  	mobno : req.param('mobno') ,
				    llno : req.param('llno') ,
				    email : req.param('email') 
				}).exec(function(err , vend){
					sails.log('Vendor Created : ' + vend.venid);
					return res.redirect('/vendorboard?id=' + req.param('customerid'));			
				});
			}			
			else
			{
				sails.log('Duplicate Vendor : ' + req.param('venid'));
				return res.redirect('/vendorboard?id=' + req.param('customerid'));
			}
		});
	} ,
		

	listVendors : function ( req , res ) { 		
		Vendor.find().populateAll().exec(function(err , vendors){
			if(err)
				ErrorService.reportError(err , res);					
			else
			{
				return res.json(vendors);
			}
		});
	} ,	

    vendorUpdate : function ( req , res ) {
        Vendor.findOne({ id : req.param('vid')}).exec(function(err , myvendor){
                if(err)
                    return res.json({ error : err });
                Vendor.update({
                    id : req.param('vid')
                } ,
                {
                    venid : req.param('vvenid') ,
                    ventype : req.param('vventype') ,
                    name : req.param('vname') ,
                    addr : req.param('vaddr') ,
                    pincode : req.param('vpincode') ,
                    mobno : req.param('vmobno') ,
                    llno : req.param('vlandlineno') ,
                    email : req.param('vemail') 
                }).exec(function(err , vend){
                    if(err)
                        ErrorService.reportError(err , res);                                            
                    return res.redirect('/vendorboard?q=updated');  
                });                 

        });
    } ,

    vendorUpdate1 : function ( req , res ) {
        Vendor.findOne({ id : req.param('vid')}).exec(function(err , myvendor){
                if(err)
                    return res.json({ error : err });
                Vendor.update({
                    id : req.param('vid')
                } ,
                {
                    venid : req.param('vvenid') ,
                    ventype : req.param('vventype') ,
                    name : req.param('vname') ,
                    addr : req.param('vaddr') ,
                    pincode : req.param('vpincode') ,
                    mobno : req.param('vmobno') ,
                    llno : req.param('vlandlineno') ,
                    email : req.param('vemail') 
                }).exec(function(err , vend){
                    if(err)
                        ErrorService.reportError(err , res);                                            
                    return res.redirect('/projboard');  
                });                 

        });
    } ,    

	deleteVendor : function ( req , res ){ 
		Vendor.destroy({ id : req.param('id')}).exec(function ( err , vendor ){
			if(err)
				return res.json({ error : err });
			else 
				return res.json({ status : 'OK' })
		});

	} ,

	//Page Renderer
	
	vendorBoardPage : function( req , res ) {
		return res.view('vendor/vendorboardpage' , { query : req.param('q')});
	}  ,

	venTypeList : function ( req , res ) {
		ContType.find().exec(function(err , vend ){
			if(err)
				ErrorService.reportError(err , res);
			else
				return res.json(vend);
		});
	}
	
};  