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
			    	master : PermissionService.getMasterArray(req.param('master')) ,
			    	usermanagement : PermissionService.getUserManagementArray(req.param('usermanagement')) ,
			    	customer : PermissionService.getCustomerArray(req.param('customer')) ,
			    	project : PermissionService.getProjectArray(req.param('project')) ,
			    	report : PermissionService.getReportArray(req.param('report')) ,
			    	contact : PermissionService.getContactArray(req.param('contact'))			    	
				}).exec(function(err , role){
					sails.log('Role Created : ' + role.title );
					return res.redirect('/roleboard?q=added');		
				});
			}			
			else
			{
				sails.log('Duplicate role : ' + req.param('title'));
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
			    	master : PermissionService.getMasterArray(req.param('master')) ,
			    	usermanagement : PermissionService.getUserManagementArray(req.param('usermanagement')) ,
			    	customer : PermissionService.getCustomerArray(req.param('customer')) ,
			    	project : PermissionService.getProjectArray(req.param('project')) ,
			    	report : PermissionService.getReportArray(req.param('report')) ,
			    	contact : PermissionService.getContactArray(req.param('contact'))			    	
				}).exec(function(err , role){
					if(err)
						ErrorService.reportError(err , res);
					return res.redirect('/roleboard?q=updated');		
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
	    var usermanagement_arr = PermissionService.getUserManagementArray(req.param('usermanagement'));
	    return res.send({ um : usermanagement_arr });
	} ,
	
	//Page Renderer
	
	roleAddPage : function ( req , res ) {
		return res.view('role/roleaddpage' ,  { query : req.param('q') , id : req.param('id') });
	} ,
	
	roleBoardPage : function ( req , res ) {
		return res.view('role/roleboardpage' , { query : req.param('q')});
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