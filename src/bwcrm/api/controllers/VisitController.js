/**
 * Visit Controller
 *
 * @description :: Server-side logic for managing Requirement
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	/*visitAdd :  function ( req , res ) {
		Project.findOne({ id : req.param('id')}).exec(function(err , myproject){
			if((req.param('salesexec') === "Select Sales Executive") && ((req.param('markexec') !== "Select Marketing Executive"))) 
			{
					User.findOne({ id : req.param('markexec')}).exec(function(err , muser){
				//Customer.find({ id : req.param('id')}).exec(function(err , cust){
						Visit.create({	
						//cid : Customer.getNextID('cid') ,
						proj : req.param('id') ,
				     	projname : req.param('projname') ,
				    	cust : req.param('cuid'),
				    	custname : req.param('custname') ,
				    	custname : req.param('custname'),
				    	loc :req.param('loc'),
				    	contnum : req.param('contnum') ,
				    	st : req.param('st') ,
				    	nfudate : req.param('nfudate') ,
				    	salesexec : '' ,
						markexec : req.param('markexec'),
						sexec : '' ,
						mexec : muser.ename 
						}).exec(function(err , vt){
							sails.log('Visit Created  ' );	
							return res.redirect('/visitboard?q=added');		
					});
				});
			}
			else if((req.param('salesexec') !== "Select Sales Executive") && ((req.param('markexec') === "Select Marketing Executive")))
			{

				User.findOne({ id : req.param('salesexec')}).exec(function(err , suser){
							Visit.create({	
							//cid : Customer.getNextID('cid') ,
							proj : req.param('id') ,
					     	projname : req.param('projname') ,
					    	cust : req.param('cuid'),
					    	custname : req.param('custname') ,
					    	custname : req.param('custname'),
					    	loc :req.param('loc'),
					    	contnum : req.param('contnum') ,
					    	st : req.param('st') ,
					    	nfudate : req.param('nfudate') ,
					    	salesexec : req.param('salesexec') ,
							markexec : '',
							sexec : suser.ename ,
							mexec :  ''
							}).exec(function(err , vt){
								sails.log('Visit Created  ');	
								return res.redirect('/visitboard?q=added');		
						});
				});				
			}
			else
			{		
				User.findOne({ id : req.param('salesexec')}).exec(function(err , suser){
				User.findOne({ id : req.param('markexec')}).exec(function(err , muser){
					//Customer.find({ id : req.param('id')}).exec(function(err , cust){
							Visit.create({	
							//cid : Customer.getNextID('cid') ,
							proj : req.param('id') ,
					     	projname : req.param('projname') ,
					    	cust : req.param('cuid'),
					    	custname : req.param('custname') ,
					    	custname : req.param('custname'),
					    	loc :req.param('loc'),
					    	contnum : req.param('contnum') ,
					    	st : req.param('st') ,
					    	nfudate : req.param('nfudate') ,
					    	salesexec : req.param('salesexec') ,
							markexec : req.param('markexec'),
							sexec : suser.ename ,
							mexec : muser.ename 
							}).exec(function(err , vt){
								sails.log('Visit Created  ' );	
								return res.redirect('/visitboard?q=added');		
						});
					});
				});
			}											
		});
				
	} ,*/

	/*visitAdd :  function ( req , res ) {
		
	    if(req.session.currentrole.title==='Sales Executive')
		{	    		
	    	Visit.create({				
				proj : req.param('vprojid') ,
		     	projname : req.param('vvprojname') ,
		    	cust : req.param('vcusid'),
		    	custname : req.param('vvcusname') ,
		    	requi : req.param('vvid') ,
		    	reqtype :req.param('vvreqtype'),
		    	measure : req.param('vvmeasure') ,
		    	approx : req.param('vvapprox') ,
		    	remarks : req.param('vvremarks') ,
		    	status : req.param('rstatustype') ,
	    		salesexec : req.session.user,
	    		sexec : req.session.user.ename,
	    		markexec : '',
				mexec :  '' ,
				updatedby : '',
				updby : '' ,
				fudate : ''
			}).exec(function(err , vt){
				sails.log('Visit Created ');	
				return res.redirect('/viewproj?id=' + req.param('vcusid'));		
			});
	    }
	    else if(req.session.currentrole.title==='Marketing Executive')
	    { 
	    	Visit.create({				
				proj : req.param('vprojid') ,
		     	projname : req.param('vvprojname') ,
		    	cust : req.param('vcusid'),
		    	custname : req.param('vvcusname') ,
		    	requi : req.param('vvid') ,
		    	reqtype :req.param('vvreqtype'),
		    	measure : req.param('vvmeasure') ,
		    	approx : req.param('vvapprox') ,
		    	remarks : req.param('vvremarks') ,
		    	status : req.param('rstatustype') ,
	    		salesexec : '',
	    		sexec : '',
				markexec : req.session.user,
				mexec :  req.session.user.ename ,
				updatedby : '',
				updby : '',
				fudate : ''
				}).exec(function(err , vt){
				sails.log('Visit Created ');	
				return res.redirect('/viewproj?id=' + req.param('vcusid'));		
			});
		}
		else
		{			
			Visit.create({				
				proj : req.param('vprojid') ,
		     	projname : req.param('vvprojname') ,
		    	cust : req.param('vcusid'),
		    	custname : req.param('vvcusname') ,
		    	requi : req.param('vvid') ,
		    	reqtype :req.param('vvreqtype'),
		    	measure : req.param('vvmeasure') ,
		    	approx : req.param('vvapprox') ,
		    	remarks : req.param('vvremarks') ,
		    	status : req.param('rstatustype') ,
				salesexec : '',
	    		sexec : '',
				markexec : '',
				mexec :  '' ,
				updatedby : req.session.user,
				updby : req.session.user.ename,
				fudate : ''
				}).exec(function(err , vt){
				sails.log('Visit Created ');	
				return res.redirect('/viewproj?id=' + req.param('vcusid'));		
			});
		}
	} ,*/

	visitAdd : function ( req , res ) { 
	
	if((req.param('salesexec') !== "Select Sales Executive") && ((req.param('markexec') !== "Select Marketing Executive"))){
		User.findOne({ id : req.param('salesexec')}).exec(function(err , suser){
			User.findOne({ id : req.param('markexec')}).exec(function(err , muser){
				
				Project.update({
					id : req.param('id')
				} ,
				{
			    	projtype : req.param('projtype') ,
			    	description : req.param('description') ,
			    	startdate : new Date(req.param('startdate')).toString(),
			    	enddate : new Date(req.param('enddate')).toString(),
			    	addr : req.param('addr') ,
			    	buildstage : req.param('buildstage') 
				}).exec(function(err , proj){
					if(err)
						ErrorService.reportError(err , res);	
					if(req.param('chimid')!=='')
					{
						StatusType.findOne({ id : req.param('cstatustype')}).exec(function(err , cs){
							Requ.update({
								id : req.param('chimid')
							},
							{
								measureqty : req.param('chimmeasure') ,
								approx : req.param('chimapprox') , 
								reqdate : new Date(req.param('chimreqdate')).toString(),
								remarks : req.param('chimremarks') ,
								status : cs.statustype
							}).exec(function(err , rcu){
								if(err)
									ErrorService.reportError(err , res);
							});
							Visit.create({	
						    	cust : req.param('id1'),
						    	custname : req.param('custname') ,
						    	proj : req.param('id') ,
								projname : req.param('projname') ,
								requi : req.param('chimid'),
						    	reqtype : 'Chimney',
				    			measureqty : req.param('chimmeasure') ,
						    	approx : req.param('chimapprox') ,
						    	reqdate : new Date(req.param('chimreqdate')).toString(),
						    	remarks : req.param('chimremarks') ,
								status : cs.statustype, 
								salesexec : req.param('salesexec'),
								markexec : req.param('markexec'),
								sexec : suser.ename,
								mexec : muser.ename
								}).exec(function(err , cv){
									sails.log('Visit Created : ');	
							});
						});
					}
					else if((req.param('chimmeasure') !== '') || (req.param('chimapprox') !== '') || (req.param('chimreqdate') !== '') || (req.param('chimremarks') !== ''))
					{
						StatusType.findOne({ id : req.param('cstatustype')}).exec(function(err , cs){
							Requ.create({	
								proj : req.param('id') ,
								projname : req.param('projname') ,
						    	cust : req.param('id1'),
						    	custname : req.param('custname') ,
						    	reqtype : 'Chimney',
				    			measureqty : req.param('chimmeasure') ,
						    	approx : req.param('chimapprox') ,
						    	reqdate : new Date(req.param('chimreqdate')).toString(),
						    	remarks : req.param('chimremarks') ,
								status : cs.statustype
								}).exec(function(err , rcc){
									sails.log('Requirement Created : ' + rcc.reqtype);	
							});
							Visit.create({	
						    	cust : req.param('id1'),
						    	custname : req.param('custname') ,
						    	proj : req.param('id') ,
								projname : req.param('projname') ,
								requi : req.param('chimid'),
						    	reqtype : 'Chimney',
				    			measureqty : req.param('chimmeasure') ,
						    	approx : req.param('chimapprox') ,
						    	reqdate : new Date(req.param('chimreqdate')).toString(),
						    	remarks : req.param('chimremarks') ,
								status : cs.statustype,
								salesexec : req.param('salesexec'),
								markexec : req.param('markexec'),
								sexec : suser.ename,
								mexec : muser.ename
								}).exec(function(err , cv){
									sails.log('Visit Created : ');	
							});
						});
					}
					if(req.param('solid')!=='')
					{
						StatusType.findOne({ id : req.param('sstatustype')}).exec(function(err , ss){
							Requ.update({
								id : req.param('solid')
							},
							{
								measureqty : req.param('solmeasure') ,
								approx : req.param('solapprox') , 
								reqdate : new Date(req.param('solreqdate')).toString(),
								remarks : req.param('solremarks') ,
								status : ss.statustype
							}).exec(function(err , rs){
								if(err)
									ErrorService.reportError(err , res);
							});
							Visit.create({	
								proj : req.param('id') ,
								projname : req.param('projname') ,
						    	cust : req.param('id1'),
						    	custname : req.param('custname') ,
						    	requi : req.param('solid'),
						    	reqtype : 'Solar',
				    			measureqty : req.param('solmeasure') ,
						    	approx : req.param('solapprox') ,
						    	reqdate : new Date(req.param('solreqdate')).toString(),
						    	remarks : req.param('solremarks') ,
								status : ss.statustype, 
								salesexec : req.param('salesexec'),
								markexec : req.param('markexec'),
								sexec : suser.ename,
								mexec : muser.ename
								}).exec(function(err , sv){
									sails.log('Visit Created : ');	
							});
						});
					}
					else if((req.param('solmeasure') !== '') || (req.param('solapprox') !== '') || (req.param('solreqdate') !== '') || (req.param('solremarks') !== ''))
					{
						StatusType.findOne({ id : req.param('sstatustype')}).exec(function(err , ss){	
							Requ.create({	
								proj : req.param('id') ,
								projname : req.param('projname') ,
						    	cust : req.param('id1'),
						    	custname : req.param('custname') ,
						    	reqtype : 'Solar',
				    			measureqty : req.param('solmeasure') ,
						    	approx : req.param('solapprox') ,
						    	reqdate : new Date(req.param('solreqdate')).toString(),
						    	remarks : req.param('solremarks') ,
								status : ss.statustype
								}).exec(function(err , rsc){
									sails.log('Requirement Created : ' + rsc.reqtype);	
							});
							Visit.create({	
								proj : req.param('id') ,
								projname : req.param('projname') ,
						    	cust : req.param('id1'),
						    	custname : req.param('custname') ,
						    	requi : req.param('solid'),
						    	reqtype : 'Solar',
				    			measureqty : req.param('solmeasure') ,
						    	approx : req.param('solapprox') ,
						    	reqdate : new Date(req.param('solreqdate')).toString(),
						    	remarks : req.param('solremarks') ,
								status : ss.statustype, 
								salesexec : req.param('salesexec'),
								markexec : req.param('markexec'),
								sexec : suser.ename,
								mexec : muser.ename
								}).exec(function(err , sv){
									sails.log('Visit Created : ');	
							});
						});
					}
					if(req.param('wallid')!=='')
					{
						StatusType.findOne({ id : req.param('wstatustype')}).exec(function(err , ws){	
							Requ.update({
								id : req.param('wallid')
							},
							{
								measureqty : req.param('wtilemeasure') ,
								approx : req.param('wtileapprox') , 
								reqdate : new Date(req.param('wtilereqdate')).toString(),
								remarks : req.param('wtileremarks') ,
								status : ws.statustype
							}).exec(function(err , rw){
								if(err)
									ErrorService.reportError(err , res);
							});
							Visit.create({	
								proj : req.param('id') ,
								projname : req.param('projname') ,
						    	cust : req.param('id1'),
						    	custname : req.param('custname') ,
						    	requi : req.param('wallid'),
						    	reqtype : 'Wall Tiles',
								measureqty : req.param('wtilemeasure') ,
								approx : req.param('wtileapprox') , 
								reqdate : new Date(req.param('wtilereqdate')).toString(),
								remarks : req.param('wtileremarks') ,
								status : ws.statustype, 
								salesexec : req.param('salesexec'),
								markexec : req.param('markexec'),
								sexec : suser.ename,
								mexec : muser.ename
								}).exec(function(err , wv){
									sails.log('Visit Created : ');	
							});
						});
					}
					else if((req.param('wtilemeasure') !== '') || (req.param('wtileapprox') !== '') || (req.param('wtilereqdate') !== '') || (req.param('wtileremarks') !== ''))
					{
						StatusType.findOne({ id : req.param('wstatustype')}).exec(function(err , ws){
							Requ.create({	
								proj : req.param('id') ,
								projname : req.param('projname') ,
						    	cust : req.param('id1'),
						    	custname : req.param('custname') ,
						    	reqtype : 'Wall Tiles',
								measureqty : req.param('wtilemeasure') ,
								approx : req.param('wtileapprox') , 
								reqdate : new Date(req.param('wtilereqdate')).toString(),
								remarks : req.param('wtileremarks') ,
								status : ws.statustype
								}).exec(function(err , rwc){
									sails.log('Requirement Created : ' + rwc.reqtype);	
							});
							Visit.create({	
								proj : req.param('id') ,
								projname : req.param('projname') ,
						    	cust : req.param('id1'),
						    	custname : req.param('custname') ,
						    	requi : req.param('wallid'),
						    	reqtype : 'Wall Tiles',
								measureqty : req.param('wtilemeasure') ,
								approx : req.param('wtileapprox') , 
								reqdate : new Date(req.param('wtilereqdate')).toString(),
								remarks : req.param('wtileremarks') ,
								status : ws.statustype ,
								salesexec : req.param('salesexec'),
								markexec : req.param('markexec'),
								sexec : suser.ename,
								mexec : muser.ename
								}).exec(function(err , wv){
									sails.log('Visit Created : ');	
							});
						});
					}				
					if(req.param('floorid')!=='')
					{
						StatusType.findOne({ id : req.param('fstatustype')}).exec(function(err , fs){
							Requ.update({
								id : req.param('floorid')
							},
							{
								measureqty : req.param('ftilemeasure') ,
								approx : req.param('ftileapprox') , 
								reqdate : new Date(req.param('ftilereqdate')).toString(),
								remarks : req.param('ftileremarks') ,
								status : fs.statustype
							}).exec(function(err , rf){
								if(err)
									ErrorService.reportError(err , res);
							});
							Visit.create({	
								proj : req.param('id') ,
								projname : req.param('projname') ,
						    	cust : req.param('id1'),
						    	custname : req.param('custname') ,
						    	requi : req.param('floorid'),
						    	reqtype : 'Floor Tiles',
								measureqty : req.param('ftilemeasure') ,
								approx : req.param('ftileapprox') , 
								reqdate : new Date(req.param('ftilereqdate')).toString(),
								remarks : req.param('ftileremarks'),
								status : fs.statustype, 
								salesexec : req.param('salesexec'),
								markexec : req.param('markexec'),
								sexec : suser.ename,
								mexec : muser.ename
								}).exec(function(err , fv){
									sails.log('Visit Created : ');	
							});
						});
					}
					else if((req.param('ftilemeasure') !== '') || (req.param('ftileapprox') !== '') || (req.param('ftilereqdate') !== '') || (req.param('ftileremarks') !== ''))
					{
						StatusType.findOne({ id : req.param('fstatustype')}).exec(function(err , fs){
							Requ.create({	
								proj : req.param('id') ,
								projname : req.param('projname') ,
						    	cust : req.param('id1'),
						    	custname : req.param('custname') ,
						    	reqtype : 'Floor Tiles',
								measureqty : req.param('ftilemeasure') ,
								approx : req.param('ftileapprox') , 
								reqdate : new Date(req.param('ftilereqdate')).toString(),
								remarks : req.param('ftileremarks'),
								status : fs.statustype
								}).exec(function(err , rfc){
									sails.log('Requirement Created : ' + rfc.reqtype);	
							});
							Visit.create({	
								proj : req.param('id') ,
								projname : req.param('projname') ,
						    	cust : req.param('id1'),
						    	custname : req.param('custname') ,
						    	requi : req.param('floorid'),
						    	reqtype : 'Floor Tiles',
								measureqty : req.param('ftilemeasure') ,
								approx : req.param('ftileapprox') , 
								reqdate : new Date(req.param('ftilereqdate')).toString(),
								remarks : req.param('ftileremarks'),
								status : fs.statustype, 
								salesexec : req.param('salesexec'),
								markexec : req.param('markexec'),
								sexec : suser.ename,
								mexec : muser.ename
								}).exec(function(err , fv){
									sails.log('Visit Created : ');	
							});
						});
					}	
					if(req.param('sanitid')!=='')
					{
						StatusType.findOne({ id : req.param('sastatustype')}).exec(function(err , sas){
							Requ.update({
								id : req.param('sanitid')
							},
							{
								measureqty : req.param('sanitmeasure') ,
								approx : req.param('sanitapprox') , 
								reqdate : new Date(req.param('sanitreqdate')).toString(),
								remarks : req.param('sanitremarks') ,
								status : sas.statustype
							}).exec(function(err , rsa){
								if(err)
									ErrorService.reportError(err , res);
							});
							Visit.create({	
								proj : req.param('id') ,
								projname : req.param('projname') ,
						    	cust : req.param('id1'),
						    	custname : req.param('custname') ,
						    	requi : req.param('sanitid'),
						    	reqtype : 'Sanitarywares',
								measureqty : req.param('sanitmeasure') ,
								approx : req.param('sanitapprox') , 
								reqdate : new Date(req.param('sanitreqdate')).toString(),
								remarks : req.param('sanitremarks') ,
								status : sas.statustype, 
								salesexec : req.param('salesexec'),
								markexec : req.param('markexec'),
								sexec : suser.ename,
								mexec : muser.ename
								}).exec(function(err , sav){
									sails.log('Visit Created : ');	
							});
						});
					}
					else if((req.param('sanitmeasure') !== '') || (req.param('sanitapprox') !== '') || (req.param('sanitreqdate') !== '') || (req.param('sanitremarks') !== ''))
					{
						StatusType.findOne({ id : req.param('sastatustype')}).exec(function(err , sas){
							Requ.create({	
								proj : req.param('id') ,
								projname : req.param('projname') ,
						    	cust : req.param('id1'),
						    	custname : req.param('custname') ,
						    	reqtype : 'Sanitarywares',
								measureqty : req.param('sanitmeasure') ,
								approx : req.param('sanitapprox') , 
								reqdate : new Date(req.param('sanitreqdate')).toString(),
								remarks : req.param('sanitremarks') ,
								status : sas.statustype
								}).exec(function(err , rsac){
									sails.log('Requirement Created : ' + rsac.reqtype);	
							});
							Visit.create({	
								proj : req.param('id') ,
								projname : req.param('projname') ,
						    	cust : req.param('id1'),
						    	custname : req.param('custname') ,
						    	requi : req.param('sanitid'),
						    	reqtype : 'Sanitarywares',
								measureqty : req.param('sanitmeasure') ,
								approx : req.param('sanitapprox') , 
								reqdate : new Date(req.param('sanitreqdate')).toString(),
								remarks : req.param('sanitremarks') ,
								status : sas.statustype, 
								salesexec : req.param('salesexec'),
								markexec : req.param('markexec'),
								sexec : suser.ename,
								mexec : muser.ename
								}).exec(function(err , sav){
									sails.log('Visit Created : ');	
							});
						});
					}			
					if(req.param('pipeid')!=='')
					{
						StatusType.findOne({ id : req.param('pstatustype')}).exec(function(err , ps){	
							Requ.update({
								id : req.param('pipeid')
							},
							{
								measureqty : req.param('pipemeasure') ,
								approx : req.param('pipeapprox') , 
								reqdate : new Date(req.param('pipereqdate')).toString(),
								remarks : req.param('piperemarks') ,
								status : ps.statustype
							}).exec(function(err , rp){
								if(err)
									ErrorService.reportError(err , res);
							});
							Visit.create({	
								proj : req.param('id') ,
								projname : req.param('projname') ,
						    	cust : req.param('id1'),
						    	custname : req.param('custname') ,
						    	requi : req.param('pipeid'),
						    	reqtype : 'Pipes and Fittings',
								measureqty : req.param('pipemeasure') ,
								approx : req.param('pipeapprox') , 
								reqdate : new Date(req.param('pipereqdate')).toString(),
								remarks : req.param('piperemarks') ,
								status : ps.statustype, 
								salesexec : req.param('salesexec'),
								markexec : req.param('markexec'),
								sexec : suser.ename,
								mexec : muser.ename
								}).exec(function(err , pv){
									sails.log('Visit Created : ');	
							});
						});								
					}
					else if((req.param('pipemeasure') !== '') || (req.param('pipeapprox') !== '') || (req.param('pipereqdate') !== '') || (req.param('piperemarks') !== ''))
					{
						StatusType.findOne({ id : req.param('pstatustype')}).exec(function(err , ps){	
							Requ.create({	
								proj : req.param('id') ,
								projname : req.param('projname') ,
						    	cust : req.param('id1'),
						    	custname : req.param('custname') ,
						    	reqtype : 'Pipes and Fittings',
								measureqty : req.param('pipemeasure') ,
								approx : req.param('pipeapprox') , 
								reqdate : new Date(req.param('pipereqdate')).toString(),
								remarks : req.param('piperemarks') ,
								status : ps.statustype
								}).exec(function(err , rpc){
									sails.log('Requirement Created : ' + rpc.reqtype);	
							});
							Visit.create({	
								proj : req.param('id') ,
								projname : req.param('projname') ,
						    	cust : req.param('id1'),
						    	custname : req.param('custname') ,
						    	requi : req.param('pipeid'),
						    	reqtype : 'Pipes and Fittings',
								measureqty : req.param('pipemeasure') ,
								approx : req.param('pipeapprox') , 
								reqdate : new Date(req.param('pipereqdate')).toString(),
								remarks : req.param('piperemarks') ,
								status : ps.statustype, 
								salesexec : req.param('salesexec'),
								markexec : req.param('markexec'),
								sexec : suser.ename,
								mexec : muser.ename
								}).exec(function(err , pv){
									sails.log('Visit Created : ');	
							});
						});
					}			
					return res.redirect('/viewproj?id=' + req.param('id1'))
					//return res.redirect('/custboard');	
					//return res.view('customer/detailboardpage' , {query : req.param('q') } );
					//return res.redirect('/projboard?q=updated');
				});	
			});
		});
		}	
	} ,





	listVisit : function ( req , res ) { 		
		Visit.find().populateAll().exec(function(err , vts){
			if(err)
				ErrorService.reportError(err , res);					
			else
			{
				for(var i =0 ; i < vts.length ; i ++){
					vts[i].fudate = DateService.getFormattedDate(vts[i].fudate);	
				}
				return res.json(vts);
			}

		});
	} ,

	listFP : function ( req , res ) { 
		sails.log(new Date(req.param('d')).toString());		
		Visit.find({fpdate : new Date(req.param('d')).toString()}).populateAll().exec(function(err , vts){
			if(err)
				ErrorService.reportError(err , res);					
			else
			{					
				return res.view('/' , { p_fp : vts });
			}

		});
	} ,


	visitUpdate : function ( req , res ) {
	 		User.findOne({ id : req.param('salesexec')}).exec(function(err , suser){
			User.findOne({ id : req.param('markexec')}).exec(function(err , muser){
			
				Visit.update({
					id : req.param('id')
				} ,
				 {		
				 		//scust : req.param('scust'),
						custname : req.param('custname') ,
				    	loc :req.param('loc'),
				    	contnum : req.param('contnum') ,
				    	st : req.param('st') ,
				    	nfudate : req.param('nfudate') ,
				    	salesexec : req.param('salesexec') ,
						markexec : req.param('markexec'), 
						
				}).exec(function(err , vt){
					if(err)
						ErrorService.reportError(err ,vt);											
					return res.redirect('/visitboard?q=updated');
				});	
				});	
				});	
						
	} , 	

	deleteVisit : function ( req , res ){ 
		Visit.destroy({ id : req.param('id')}).exec(function ( err ,vt){
			if(err)
				return res.json({ error : err });
			else 
				return res.json({ status : 'OK' })
		});
	} ,

	//Page Renderer

	visitBoardPage : function( req , res ) {

			return res.view('visit/visitboardpage' , {  query : req.param('q')});
			
	} , 
	requvisitEditPage : function( req , res ) {

			return res.view('visit/visitboardpage' , {  query : req.param('q')});
			
	} , 

	visitAddPage : function( req , res ) { 
		//Customer.findOne({ id : req.param('id')}).exec(function(err , scust){

		StatusType.find().exec(function(err , mystatustypes){
			if(err)
				ErrorService.reportError(err , res);
			ProjType.find().exec(function(err , myprojtypes){
				if(err)
					ErrorService.reportError(err , res);
				Project.findOne({id : req.param('id')}).exec(function(err , sproj){
					if(err)
						ErrorService.reportError(err , res);
					sproj.startdate = DateService.getFormattedDate(sproj.startdate);					
					sproj.enddate = DateService.getFormattedDate(sproj.enddate);
					Requ.find({projname : sproj.projname}).exec(function(err,require){
						if(err)
							ErrorService.reportError(err , res);
						Role.findOne({ title : 'Sales Executive'}).exec(function(err , salesrole){
							User.find({ role : salesrole.id}).exec(function(err , salesuser){
								if(err)
									ErrorService.reportError(err , res);
								Role.findOne({ title : 'Marketing Executive'}).exec(function(err , markrole){
									User.find({ role : markrole.id}).exec(function(err , markuser){
										
										if(err)
											ErrorService.reportError(err , res);
										return res.view('visit/visitaddpage'  , { statustype : mystatustypes , projtypes : myprojtypes , proj : sproj , requi : require , suser : salesuser , muser : markuser , query : req.param('q') } );
									});
									
								});				
							});
						});
					});
				});
			});
		});
	} ,

	visitEditPage : function ( req , res ) {	
		Visit.findOne({ id : req.param('id')}).exec(function(err , svt){
			if(err)
				ErrorService.reportError(err , res);

			Role.findOne({ title : 'Sales Executive'}).exec(function(err , salesrole){
				User.find({ role : salesrole.id}).exec(function(err , salesuser){
					if(err)
						ErrorService.reportError(err , res);
					Role.findOne({ title : 'Marketing Executive'}).exec(function(err , markrole){
						User.find({ role : markrole.id}).exec(function(err , markuser){
							
							if(err)
								ErrorService.reportError(err , res);
							return res.view('visit/visiteditpage'  , { p_vt : svt, suser : salesuser , muser : markuser , query : req.param('q') } );
						});
						
					});				
				});
			});

		});
	} ,

	passReqID : function ( req , res ){ 
		Requ.findOne({ id : req.param('id')}).exec(function(err , myrequ){
			if(err)
				return res.json({ error : err });
			else 
			{
				return res.json({ status : myrequ.id })
			}
		});
	} ,	

	listReqVisit: function ( req , res ) {	
		Visit.find({ requi : req.param('id')  }).populateAll().exec(function(err , visi){
			if(err)
				ErrorService.reportError(err , res);					
			else
			{
				return res.json(visi);
			}
		});
	} ,	

	passProjID : function ( req , res ){ 
		Project.findOne({ id : req.param('id')}).exec(function(err , myproj){
			if(err)
				return res.json({ error : err });
			else 
			{
				return res.json({ status : myproj.id })
			}
		});
	} ,	

	listProjVisit: function ( req , res ) {	
		Visit.find({ proj : req.param('id')  }).populateAll().exec(function(err , visi){
			if(err)
				ErrorService.reportError(err , res);					
			else
			{
				return res.json(visi);
			}
		});
	} ,	
}; 