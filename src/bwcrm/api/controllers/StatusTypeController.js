/**
 * ProjTypeController
 *
 * @description :: Server-side logic for managing ContTypes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	statusTypeAdd :  function (req , res ) {
		StatusType.count({ statustype : req.param('statustype')}).exec(function ( err , count ){
			if(err)
				ErrorService.reportError(err , res);				
			if(count === 0)
			{
			    StatusType.create({
				  	statustype : req.param('statustype') 
				}).exec(function(err , sttyp){
					sails.log('Status Type Created : ' + sttyp.statustype);
					return res.redirect('/statusTypeboard?q=added');			
				});
			}			
			else
			{
				sails.log('Duplicate status Type : ' + req.param('statustype'));
				return res.redirect('/statusTypeboard?q=alreadythere');
			}
		});
	} ,
		
	listStatusTypes : function ( req , res ) { 		
		StatusType.find().populateAll().exec(function(err , sttypes){
			if(err)
				ErrorService.reportError(err , res);					
			else
			{
				return res.json(sttypes);
			}
		});
	} ,	

    statusTypeUpdate : function ( req , res ) {
        StatusType.findOne({ id : req.param('sid')}).exec(function(err , mystType){
                if(err)
                    return res.json({ error : err });
              StatusType.update({
                    id : req.param('sid')
                } ,
                {
				  	statustype : req.param('pstatustype') 
                }).exec(function(err , sttyp){
                    if(err)
                        ErrorService.reportError(err , res);                                            
                    return res.redirect('/statusTypeboard?q=updated');  
                });                 

        });
    } ,

	deleteStatusType : function ( req , res ){ 
		StatusType.destroy({ id : req.param('id')}).exec(function ( err , projType ){
			if(err)
				return res.json({ error : err });
			else 
				return res.json({ status : 'OK' })
		});
	} ,

	//Page Renderer
	
	statusTypeBoardPage : function( req , res ) {
		return res.view('statustype/statustypeboardpage' , { query : req.param('q')});
	}  

};  