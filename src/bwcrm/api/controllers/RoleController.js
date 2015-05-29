/**
 * RoleController
 *
 * @description :: Server-side logic for managing Roles
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	roleAdd :  function (req , res ) {

		Role.count({ title : req.param('title')}).exec(function ( err , count ){
			if(err)
				ErrorService.reportError(err , res);				
			if(count === 0)
			{
			    Role.create({
			    	title : req.param('title') ,
			    	description : req.param('description') ,
			    	settings : PermissionService.getSettingsArray(req.param('settings')) ,
			    	//configuration : PermissionService.getConfigurationArray(req.param('configuration')) ,
			    	security : PermissionService.getSecurityArray(req.param('security')) ,
			    	//products : PermissionService.getProductsArray(req.param('products')) ,
			    	//clientandcontract : PermissionService.getClientAndContractArray(req.param('clientandcontract')) ,
			    	//accounting : PermissionService.getAccountingArray(req.param('accounting')) ,
			    	help : PermissionService.stringBoolify(["help"], req.param('help'))[0]
				}).exec(function(err , role){
					sails.log('ROLE CREATED : ' + role.title );
					return res.redirect('/roleboard');		
				});
			}			
			else
			{
				sails.log('TRIED DUPLICATE ROLE : ' + req.param('title'));
				return res.redirect('/roleadd?q=alreadythere');
			}
		});
	} ,

	listroles : function ( req , res ) {
		Role.find().populateAll().exec(function(err , roles){
			if(err)
				ErrorService.reportError(err , res);					
			else
			{
				return res.json(roles);
			}
		});
	} ,

	roleUpdate : function(req , res ) {

			    Role.update({ 
			    	id : req.param('id') 			    
			    } ,
			    {
			    	id : req.param('id') ,
			    	title : req.param('title') ,
			    	description : req.param('description') ,
			    	settings : PermissionService.getSettingsArray(req.param('settings')) ,
			    	//configuration : PermissionService.getConfigurationArray(req.param('configuration')) ,
			    	security : PermissionService.getSecurityArray(req.param('security')) ,
			    	//products : PermissionService.getProductsArray(req.param('products')) ,
			    	//clientandcontract : PermissionService.getClientAndContractArray(req.param('clientandcontract')) ,
			    	//accounting : PermissionService.getAccountingArray(req.param('accounting')) ,
			    	help : PermissionService.stringBoolify(["help"], req.param('help'))[0]
				}).exec(function(err , role){
					if(err)
						ErrorService.reportError(err , res);
					return res.redirect('/roleboard');		
				});		

	} ,

	roleDelete : function ( req , res ){ 
		Role.destroy({ id : req.param('id')}).exec(function ( err , role ){
			if(err)
				return res.json({ error : err });
			else 
				return res.json({ status : 'OK' })
		});
	} ,	

	roletest : function ( req , res ) {
		var settings_arr = PermissionService.getSettingsArray(req.param('settings'));
		return res.send({ yo : settings_arr });
	} ,

	//PAGES 

	roleAddPage : function ( req , res ) {
		return res.view('role/roleaddpage' ,  { query : req.param('q') , id : req.param('id') });
	} ,

	roleBoardPage : function ( req , res ) {
		return res.view('role/roleboardpage');
	} ,

	roleEditPage : function ( req , res ) {
		Role.findOne({ id : req.param('id')}).exec(function(err , p_role){
			if(err)
				ErrorService.reportError(err , res);
			else
			{
				return res.view('role/roleeditpage'  , { query : req.param('q') ,  role : p_role } );
			}			
		})
	}
	
};

