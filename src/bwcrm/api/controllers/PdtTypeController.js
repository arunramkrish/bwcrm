/**
 * PdtTypeController
 *
 * @description :: Server-side logic for managing ContTypes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	pdtTypeAdd :  function (req , res ) {
		PdtType.count({ pdttype : req.param('pdttype')}).exec(function ( err , count ){
			if(err)
				ErrorService.reportError(err , res);				
			if(count === 0)
			{
			    PdtType.create({
				  	pdttype : req.param('pdttype') 
				}).exec(function(err , pdttyp){
					sails.log('Product Type Created : ' + pdttyp.pdttype);
					return res.redirect('/PdtTypeboard?q=added');			
				});
			}			
			else
			{
				sails.log('Duplicate Product Type : ' + req.param('pdttype'));
				return res.redirect('/PdtTypeboard?q=alreadythere');
			}
		});
	} ,
		

	listPdtTypes : function ( req , res ) { 		
		PdtType.find().populateAll().exec(function(err , pdttypes){
			if(err)
				ErrorService.reportError(err , res);					
			else
			{
				return res.json(pdttypes);
			}
		});
	} ,	

    pdtTypeUpdate : function ( req , res ) {
        PdtType.findOne({ id : req.param('pid')}).exec(function(err , myPdtType){
                if(err)
                    return res.json({ error : err });
                PdtType.update({
                    id : req.param('pid')
                } ,
                {
				  	pdttype : req.param('ppdttype') 
                }).exec(function(err , pdttyp){
                    if(err)
                        ErrorService.reportError(err , res);                                            
                    return res.redirect('/PdtTypeboard?q=updated');  
                });                 

        });
    } ,

	deletePdtType : function ( req , res ){ 
		PdtType.destroy({ id : req.param('id')}).exec(function ( err , PdtType ){
			if(err)
				return res.json({ error : err });
			else 
				return res.json({ status : 'OK' })
		});

	} ,

	//Page Renderer
	
	pdtTypeBoardPage : function( req , res ) {
		return res.view('pdttype/pdttypeboardpage' , { query : req.param('q')});
	}  ,

	pdtTypeList : function ( req , res ) {
		PdtType.find().exec(function(err , pdt ){
			if(err)
				ErrorService.reportError(err , res);
			else
				return res.json(pdt);
		});
	}	

};  