/**
 * ReportController
 *
 * @description :: Server-side logic for managing Reports
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	getSavingsAndLoanContractGraph : function(req , res ){
		SavingsContract.find().exec(function(err , sc){
			if(err )
				ErrorService.reportError(err, res );
			LoanContract.find().exec(function(err , lc){
				if(err )
					ErrorService.reportError(err, res );
				return res.json({ data :[
										{
											label : 'Savings Contracts' ,
											value : sc.length ,
											color: "#46BFBD",
									        highlight: "#5AD3D1"
										} ,
										{
											label : 'Loan Contracts' ,
											value : lc.length ,
											color:"#F7464A",
									        highlight: "#FF5A5E"
										}
									]
								});
			});
		});
	} ,

	getEconomicActivityGraph : function ( req , res){

		EconomicActivity.find().exec(function(err , ea ){
			for(var i = 0 ; i < ea.length ; i++){
				ea[i].value = 0 ;
				ea[i].label = ea[i].name ;
			}

			IndividualClient.find().populate('ea').exec(function(err , ic ){

				for(var i = 0 ; i < ic.length ; i++ ){
					for(var j = 0 ;  j < ea.length ; j++){
						if(ic[i].ea.id.localeCompare(ea[j].id) == 0 ){
							ea[j].value++;
						}
					}
				}

				for(var i = 0 ; i < ea.length ; i ++ ){
					ea[i].color = '#'+Math.floor(Math.random()*16777215).toString(16);
				}

				res.json({ data : ea });
			});
		});
	}
	
};

