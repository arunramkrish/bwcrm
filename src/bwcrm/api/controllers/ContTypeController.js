/**
 * ContTypeController
 *
 * @description :: Server-side logic for managing ContTypes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	contTypeAdd :  function (req , res ) {
		ContType.count({ conttypename : req.param('conttypename')}).exec(function ( err , count ){
			if(err)
				ErrorService.reportError(err , res);				
			if(count === 0)
			{
			    ContType.create({
				  	conttypename : req.param('conttypename') 
				}).exec(function(err , conttype){
					sails.log('Contact Type Created : ' + conttype.conttypename);
					return res.redirect('/ContTypeboard?q=added');			
				});
			}			
			else
			{
				sails.log('Duplicate Contact Type : ' + req.param('conttypename'));
				return res.redirect('/ContTypeboard?q=alreadythere');
			}
		});
	} ,
		

	listContTypes : function ( req , res ) { 		
		ContType.find().populateAll().exec(function(err , conttypes){
			if(err)
				ErrorService.reportError(err , res);					
			else
			{
				return res.json(conttypes);
			}
		});
	} ,	

    contTypeUpdate : function ( req , res ) {
        ContType.findOne({ id : req.param('cid')}).exec(function(err , myContType){
                if(err)
                    return res.json({ error : err });
                ContType.update({
                    id : req.param('cid')
                } ,
                {
				  	conttypename : req.param('cconttypename') 
                }).exec(function(err , conttype){
                    if(err)
                        ErrorService.reportError(err , res);                                            
                    return res.redirect('/ContTypeboard?q=updated');  
                });                 

        });
    } ,

	deleteContType : function ( req , res ){ 
		ContType.destroy({ id : req.param('id')}).exec(function ( err , ContType ){
			if(err)
				return res.json({ error : err });
			else 
				return res.json({ status : 'OK' })
		});

	} ,

	//Page Renderer
	
	contTypeBoardPage : function( req , res ) {
		return res.view('contactstype/conttypeboardpage' , { query : req.param('q')});
	}  

};  