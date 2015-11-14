/**
 * ProjTypeController
 *
 * @description :: Server-side logic for managing ContTypes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	projTypeAdd :  function (req , res ) {
		ProjType.count({ projtype : req.param('projtype')}).exec(function ( err , count ){
			if(err)
				ErrorService.reportError(err , res);				
			if(count === 0)
			{
			    ProjType.create({
				  	projtype : req.param('projtype') 
				}).exec(function(err , projtyp){
					sails.log('Project Type Created : ' + projtyp.projtype);
					return res.redirect('/projTypeboard?q=added');			
				});
			}			
			else
			{
				sails.log('Duplicate Project Type : ' + req.param('projtype'));
				return res.redirect('/projTypeboard?q=alreadythere');
			}
		});
	} ,

	listProjTypes : function ( req , res ) { 		
		ProjType.find().populateAll().exec(function(err , projtypes){
			if(err)
				ErrorService.reportError(err , res);					
			else
			{
				return res.json(projtypes);
			}
		});
	} ,	

    projTypeUpdate : function ( req , res ) {
        ProjType.findOne({ id : req.param('pid')}).exec(function(err , myprojType){
            if(err)
                return res.json({ error : err });
            ProjType.update({
                id : req.param('pid')
            } ,
            {
			  	projtype : req.param('pprojtype') 
            }).exec(function(err , projtyp){
                if(err)
                    ErrorService.reportError(err , res);                                            
                return res.redirect('/projTypeboard?q=updated');  
            });                 
        });
    } ,

	deleteProjType : function ( req , res ){ 
		ProjType.destroy({ id : req.param('id')}).exec(function ( err , projType ){
			if(err)
				return res.json({ error : err });
			else 
				return res.json({ status : 'OK' })
		});

	} ,

	//Page Renderer
	
	projTypeBoardPage : function( req , res ) {
		return res.view('projtype/projtypeboardpage' , { query : req.param('q')});
	}  

};  