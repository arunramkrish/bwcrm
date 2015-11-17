/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    controller : 'UserController' ,
    action : 'loginPage'
  } ,

  '/dashboard' : {
    controller : 'UserController' , 
    action : 'homePage'
  } ,

  //User Controller 

  'POST /signup' : {
    controller : 'UserController' , 
    action : 'signup'
  } ,

  'POST /login' : {
    controller : 'UserController' ,
    action : 'login'
  } ,

  'GET /logout' : { 
    controller : 'UserController' , 
    action : 'logout'
  } , 

  'POST /userupdate' : { 
    controller : 'UserController' ,
    action : 'userUpdate'
  } ,

  'POST /userchgpwd' : { 
    controller : 'UserController' ,
    action : 'userChgPwd'
  } ,

  'GET /deleteuser' : {
    controller : 'UserController' ,
    action :'deleteUser'
  } ,

  'GET /listusers' : {
    controller : 'UserController' ,
    action : 'listUsers'
  } ,

  'GET /userboard' : {
    controller : 'UserController' ,
    action : 'userBoardPage'
  } ,

  'GET /signup' : {
    controller : 'UserController' , 
    action : 'userAddPage'
  } , 

  'GET /useredit' : {
    controller : 'UserController' ,
    action : 'userEditPage'
  } ,

  'GET /userchgpass' : {
    controller : 'UserController' ,
    action : 'userChgPwdPage'
  } ,

  //Role Controller 

  'GET /roleadd' : {
    controller : 'RoleController' ,
    action : 'roleAddPage'
  } ,

  'POST /roleadd' : {
    controller : 'RoleController' ,
    action : 'roleAdd'
  } ,

  'POST /roletest' : {
    controller : 'RoleController' ,
    action : 'roletest'    
  } ,

  'GET /roleboard' : {
    controller : 'RoleController' ,
    action : 'roleBoardPage'
  } ,

  'GET /listroles' : {
    controller : 'RoleController' ,
    action : 'listroles'
  } ,

  'POST /roleupdate' : {
    controller : 'RoleController' ,
    action : 'roleUpdate'
  } ,

  'GET /roleupdate' : {
    controller : 'RoleController' ,
    action : 'roleEditPage'
  } , 

  'GET /roledelete' : {
    controller : 'RoleController' ,
    action : 'roleDelete'
  } ,  

  //Contact Type Controller 

  'GET /listconttypes' : {
    controller : 'ContTypeController' ,
    action : 'listContTypes'
  } ,

  'GET /conttypeboard' : {
    controller : 'ContTypeController' ,
    action : 'contTypeBoardPage'
  } ,

  'POST /conttypeadd' : {
    controller : 'ContTypeController' ,
    action : 'contTypeAdd'
  } ,

  'GET /deleteconttype' : {
    controller : 'ContTypeController' ,
    action :'deleteContType'
  } ,

  'POST /conttypeupdate' : { 
    controller : 'ContTypeController' ,
    action : 'contTypeUpdate'
  } ,

  //Status Type Controller 

  'GET /liststatustypes' : {
    controller : 'StatusTypeController' ,
    action : 'liststatusTypes'
  } ,

  'GET /statustypeboard' : {
    controller : 'StatusTypeController' ,
    action : 'statusTypeBoardPage'
  } ,

  'POST /statustypeadd' : {
    controller : 'StatusTypeController' ,
    action : 'statusTypeAdd'
  } ,

  'GET /deletestatustype' : {
    controller : 'StatusTypeController' ,
    action :'deletestatusType'
  } ,

  'POST /statustypeupdate' : { 
    controller : 'StatusTypeController' ,
    action : 'statusTypeUpdate'
  } ,
  
  //Product Type Controller 

  'GET /listpdttypes' : {
    controller : 'PdtTypeController' ,
    action : 'listPdtTypes'
  } ,

  'GET /pdttypeboard' : {
    controller : 'PdtTypeController' ,
    action : 'pdtTypeBoardPage'
  } ,

  'POST /pdttypeadd' : {
    controller : 'PdtTypeController' ,
    action : 'pdtTypeAdd'
  } ,

  'GET /deletepdttype' : {
    controller : 'PdtTypeController' ,
    action :'deletePdtType'
  } ,

  'POST /pdttypeupdate' : { 
    controller : 'PdtTypeController' ,
    action : 'pdtTypeUpdate'
  } ,

  'GET /pdttypelist' : {
    controller : 'PdtTypeController' ,
    action :'pdtTypeList'
  } ,  

  //Project Type Controller 

  'GET /listprojtypes' : {
    controller : 'ProjTypeController' ,
    action : 'listProjTypes'
  } ,

  'GET /projtypeboard' : {
    controller : 'ProjTypeController' ,
    action : 'projTypeBoardPage'
  } ,

  'POST /projtypeadd' : {
    controller : 'ProjTypeController' ,
    action : 'projTypeAdd'
  } ,

  'GET /deleteprojtype' : {
    controller : 'ProjTypeController' ,
    action :'deleteProjType'
  } ,

  'POST /projtypeupdate' : { 
    controller : 'ProjTypeController' ,
    action : 'projTypeUpdate'
  } ,

  //Customer Controller

  'GET /custadd' : {
    controller : 'CustomerController' , 
    action : 'custAddPage'
  } , 

  'POST /custadd' : {
    controller : 'CustomerController' , 
    action : 'custAdd'
  } ,

  'GET /listcust' : {
    controller : 'CustomerController' ,
    action : 'listCust'
  } ,

  'POST /custupdate' : { 
    controller : 'CustomerController' ,
    action : 'custUpdate'
  } ,

  'GET /deletecust' : {
    controller : 'CustomerController' ,
    action :'deleteCust'
  } ,

  'GET /custboard' : {
    controller : 'CustomerController' ,
    action : 'custBoardPage'
  } ,

  'GET /custedit' : {
    controller : 'CustomerController' ,
    action : 'custEditPage'
  } ,

  'GET /viewproj' : {
    controller : 'CustomerController' , 
    action : 'DetailBoardPage'
  } ,  

  'GET /custsearchpage' : {
    controller : 'CustomerController' , 
    action : 'custSearchPage'
  } ,  

  'POST /custboard' : { 
    controller : 'CustomerController' ,
    action : 'custSearch'
  } ,  

  'GET /listcustsearch' : {
    controller : 'CustomerController' ,
    action : 'listCustSearch'
  } ,

  //Project Controller

  'GET /projadd' : {
    controller : 'ProjectController' , 
    action : 'projAddPage'
  } , 

  'POST /projreqadd' : {
    controller : 'ProjectController' , 
    action : 'projReqAdd'
  } ,


  


  'GET /projboard' : {
    controller : 'ProjectController' ,
    action : 'projBoardPage'
  } ,

  'GET /projboardcust' : {
    controller : 'ProjectController' ,
    action : 'projBoardPageCust'
  } ,  



  'POST /projadd' : {
    controller : 'ProjectController' , 
    action : 'projAdd'
  } ,

  'GET /listproj' : {
    controller : 'ProjectController' ,
    action : 'listProj'
  } ,
  'GET /listproj1' : {
    controller : 'ProjectController' ,
    action : 'listProj1'
  } ,

  'GET /deleteproj' : {
    controller : 'ProjectController' ,
    action :'projDelete'
  } ,

  'GET /passid' : {
    controller : 'ProjectController' ,
    action :'passID'
  } ,

  'GET /projedit' : {
    controller : 'ProjectController' ,
    action : 'projEditPage'
  } ,

  'POST /projupdate' : { 
    controller : 'ProjectController' ,
    action : 'projUpdate'
  } ,

  'GET /pdttypelist' : {
    controller : 'ProjectController' , 
    action : 'pdtTypeList'
  } ,



  'GET /listcustproj' : {
    controller : 'ProjectController' , 
    action : 'listCustProj'
  } ,

  'GET /listcustreq' : {
    controller : 'ProjectController' , 
    action : 'listCustReq'
  } ,
  
  'GET /listprojreq' : {
    controller : 'ProjectController' , 
    action : 'listProjReq'
  } ,

  'GET /listprojreq1' : {
    controller : 'ProjectController' , 
    action : 'listProjReq1'
  } ,

  'GET /listprojvendors' : {
    controller : 'ProjectController' , 
    action : 'listProjVendors'
  } ,

  'GET /listcustvisit' : {
    controller : 'ProjectController' , 
    action : 'listCustVisit'
  } ,

  'GET /listcustfp' : {
    controller : 'ProjectController' , 
    action : 'listCustFp'
  } ,

  'GET /listcontacts' : {
    controller : 'ProjectController' , 
    action : 'ConatctBoardPage'
  } ,

  'GET /listprojcontacts' : {
    controller : 'ProjectController' , 
    action : 'listProjContacts'
  } ,

  //Project Requirement 


  // 'GET /projreq' : {
  //   controller : 'ProjectController' , 
  //   action : 'projreqPage'
  // } , 

  // 'POST /projreq' : {
  //   controller : 'ProjectController' , 
  //   action : 'projreqlist'
  // } 

  // 'GET /projreqlist' : {
  //   controller : 'ProjectController' , 
  //   action : 'projreqlist'
  // } , 


  'GET /reqadd' : {
    controller : 'RequirementController' , 
    action : 'reqAddPage'
  } , 
  'POST /reqadd' : {
    controller : 'RequirementController' , 
    action : 'reqAdd'
  } ,

  'GET /listreq' : {
    controller : 'RequirementController' ,
    action : 'listReq'
  } ,

  'POST /requpdate' : { 
    controller : 'RequirementController' ,
    action : 'reqUpdate'
  } ,

  'GET /deletereq' : {
    controller : 'RequirementController' ,
    action :'deleteReq'
  } ,

  'GET /reqboard' : {
    controller : 'RequirementController' ,
    action : 'reqBoardPage'
  } ,

  'GET /reqedit' : {
    controller : 'RequirementController' ,
    action : 'reqEditPage'
  } ,

  'GET /statustypelist' : {
    controller : 'RequirementController' , 
    action : 'StatusTypeList'
  } ,

//contacts

'GET /contadd' : {
    controller : 'ContactController' , 
    action : 'contAddPage'
  } , 

  'POST /contadd' : {
    controller : 'ContactController' , 
    action : 'contAdd'
  } ,


  'GET /listcont' : {
    controller : 'ContactController' ,
    action : 'listCont'
  } ,

  'POST /contupdate' : { 
    controller : 'ContactController' ,
    action : 'contUpdate'
  } ,

  'GET /deletecont' : {
    controller : 'ContactController' ,
    action :'deleteCont'
  } ,

  'GET /contboard' : {
    controller : 'ContactController' ,
    action : 'contBoardPage'
  } ,

   'GET /projcontboard' : {
    controller : 'ContactController' ,
    action : 'projcontBoardPage'
  } ,


  'GET /contedit' : {
    controller : 'ContactController' ,
    action : 'contEditPage'
  } , 


//visit

  'GET /visitadd' : {
    controller : 'VisitController' , 
    action : 'visitAddPage'
  } , 

  'POST /visitadd' : {
    controller : 'VisitController' , 
    action : 'visitAdd'
  } ,

  'GET /listvisit' : {
    controller : 'VisitController' ,
    action : 'listVisit'
  } ,

  'POST /visitupdate' : { 
    controller : 'VisitController' ,
    action : 'visitUpdate'
  } ,

  'GET /deletevisit' : {
    controller : 'VisitController' ,
    action :'deleteVisit'
  } ,

  'GET /visitboard' : {
    controller : 'VisitController' ,
    action : 'visitBoardPage'
  } ,

  'GET /visitedit' : {
    controller : 'VisitController' ,
    action : 'visitEditPage'
  } ,

  'GET /requvisit' : {
    controller : 'VisitController' ,
    action : 'requvisitEditPage'
  } ,

  'GET /passreqid' : {
    controller : 'VisitController' ,
    action :'passReqID'
  } ,

  'GET /listreqvisit' : {
    controller : 'VisitController' , 
    action : 'listReqVisit'
  } ,

  'GET /passprojid' : {
    controller : 'VisitController' ,
    action :'passProjID'
  } ,

  'GET /listprojvisit' : {
    controller : 'VisitController' , 
    action : 'listProjVisit'
  } ,


  'GET /listfp' : {
    controller : 'VisitController' , 
    action : 'listFP'
  } ,


//Follow up
'GET /fuadd' : {
    controller : 'FollowupController' , 
    action : 'fuAddPage'
  } , 

  'POST /fuadd' : {
    controller : 'FollowupController' , 
    action : 'fuAdd'
  } ,

  'GET /listfu' : {
    controller : 'FollowupController' ,
    action : 'listFu'
  } ,

  'POST /fuupdate' : { 
    controller : 'FollowupController' ,
    action : 'fuUpdate'
  } ,

  'GET /deletefu' : {
    controller : 'FollowupController' ,
    action :'deleteFu'
  } ,

  'GET /fuboard' : {
    controller : 'FollowupController' ,
    action : 'fuBoardPage'
  } ,

  'GET /fuedit' : {
    controller : 'FollowupController' ,
    action : 'fuEditPage'
  } ,
 
  'POST /fpvisitadd' : { 
    controller : 'FollowupController' ,
    action : 'fpVisitAdd'
  } ,

//Follow up action log


  'GET /fualogadd' : {
    controller : 'FollowupController' , 
    action : 'fualogAddPage'
  } , 

  'POST /fualogadd' : {
    controller : 'FollowupController' , 
    action : 'fualogAdd'
  } ,
  'GET /listfualog' : {
    controller : 'FollowupController' ,
    action : 'listFualog'
  } ,

  'POST /fualogupdate' : { 
    controller : 'FollowupController' ,
    action : 'fualogUpdate'
  } ,

  'GET /deletefualog' : {
    controller : 'FollowupController' ,
    action :'deleteFualog'
  } ,

  'GET /fualogboard' : {
    controller : 'FollowupController' ,
    action : 'fualogBoardPage'
  } ,

  'GET /fualogedit' : {
    controller : 'FollowupController' ,
    action : 'fualogEditPage'
  } ,
 
//Reports

  'GET /report/requirement' : {
    controller : 'ReportController' , 
    action : 'reportsRequirement'
  } , 

  'GET /reports/requgraph' : {
  controller : 'ReportController' ,
  action : 'getRequirementGraph'
  } ,

  'GET /report/searchreqdate' : {
    controller : 'ReportController' , 
    action : 'reportsSearchReqDatePage'
  } ,

  'POST /reportsSearchReqDate' : {
    controller : 'ReportController' , 
    action : 'reportsSearchReqDate'
  } ,

  //Vendor Controller 

  'GET /listvendors' : {
    controller : 'VendorController' ,
    action : 'listVendors'
  } ,

  'GET /vendorboard' : {
    controller : 'VendorController' ,
    action : 'vendorBoardPage'
  } ,

  'POST /vendoradd' : {
    controller : 'VendorController' ,
    action : 'vendorAdd'
  } ,

  'GET /deletevendor' : {
    controller : 'VendorController' ,
    action :'deleteVendor'
  } ,

  'POST /vendorupdate' : { 
    controller : 'VendorController' ,
    action : 'vendorUpdate'
  } ,

  'POST /vendorupdate1' : { 
    controller : 'VendorController' ,
    action : 'vendorUpdate1'
  } ,

  'GET /ventypelist' : {
    controller : 'VendorController' , 
    action : 'venTypeList'
  } 




  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
