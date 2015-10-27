module.exports = {

createAction : function( req , res ){ 
	SavingsProduct.create({
		name : req.param('name') ,
		code : req.param('code') ,
		clienttypes : req.param('clienttypes') ,
		attachcurrency : req.param('attachcurrency') ,
		initial_min : req.param('initial_min') ,
		initial_max : req.param('initial_max') ,
		balance_min : req.param('balance_min') ,
		balance_max : req.param('balance_max') ,
		interestrate_min : req.param('interestrate_min') ,
		interestrate_max : req.param('interestrate_max') ,
		interestrate_value : req.param('interestrate_value') ,
		accural : req.param('accural') ,
		posting : req.param('posting') ,
		cash_deposit_min : req.param('cash_deposit_min') ,
		cash_deposit_max : req.param('cash_deposit_max') ,
		cash_deposit_fees_min : req.param('cash_deposit_fees_min') ,
		cash_deposit_fees_max : req.param('cash_deposit_fees_max') ,
		cash_deposit_fees_value : req.param('cash_deposit_fees_value') ,
		cheque_deposit_min : req.param('cheque_deposit_min') ,
		cheque_deposit_max : req.param('cheque_deposit_max') ,
		cheque_deposit_fees_min : req.param('cheque_deposit_fees_min') ,
		cheque_deposit_fees_max : req.param('cheque_deposit_fees_max') ,
		cheque_deposit_fees_value : req.param('cheque_deposit_fees_value') ,
		withdraw_min : req.param('withdraw_min') ,
		withdraw_max : req.param('withdraw_max') ,
		withdraw_type : req.param('withdraw_type') ,
		withdraw_fees_min : req.param('withdraw_fees_min') ,
		withdraw_fees_max : req.param('withdraw_fees_max') ,
		withdraw_fees_value : req.param('withdraw_fees_value') ,
		transfer_min : req.param('transfer_min') ,
		transfer_max : req.param('transfer_max') ,
		transfer_type : req.param('transfer_type') ,
		transfer_fees_min : req.param('transfer_fees_min') ,
		transfer_fees_max : req.param('transfer_fees_max') ,
		transfer_branch_type : req.param('transfer_branch_type') ,
		transfer_fees_value : req.param('transfer_fees_value') ,
		entryfees_min : req.param('entryfees_min') ,
		entryfees_max : req.param('entryfees_max') ,
		entryfees_value : req.param('entryfees_value') ,
		reopenfees_min : req.param('reopenfees_min') ,
		reopenfees_max : req.param('reopenfees_max') ,
		reopenfees_value : req.param('reopenfees_value') ,
		closefees_min : req.param('closefees_min') ,
		closefees_max : req.param('closefees_max') ,
		closefees_value : req.param('closefees_value') ,
		managementfees_min : req.param('managementfees_min') ,
		managementfees_max : req.param('managementfees_max') ,
		managementfees_value : req.param('managementfees_value') ,
		managementfees_type : req.param('managementfees_type') ,
		fixed_overdraft_fees_min : req.param('fixed_overdraft_fees_min') ,
		fixed_overdraft_fees_max : req.param('fixed_overdraft_fees_max') ,
		fixed_overdraft_fees_value : req.param('fixed_overdraft_fees_value') ,
		agio_min : req.param('agio_min') ,
		agio_max : req.param('agio_max') ,
		agio_value : req.param('agio_value') ,
		agio_type : req.param('agio_type') ,
		use_terms : req.param('use_terms') ,
		num_of_periods_min : req.param('num_of_periods_min') ,
		num_of_periods_max : req.param('num_of_periods_max') ,
		posting_frequency : req.param('posting_frequency') 
	}).exec(function(err ,SavingsProduct){
		if(err)
			ErrorService.reportError(err,res);
		return res.view('');
	});
} , 

updateAction : function( req , res ){ 
	SavingsProduct.update({
},{
		name : req.param('name') ,
		code : req.param('code') ,
		clienttypes : req.param('clienttypes') ,
		attachcurrency : req.param('attachcurrency') ,
		initial_min : req.param('initial_min') ,
		initial_max : req.param('initial_max') ,
		balance_min : req.param('balance_min') ,
		balance_max : req.param('balance_max') ,
		interestrate_min : req.param('interestrate_min') ,
		interestrate_max : req.param('interestrate_max') ,
		interestrate_value : req.param('interestrate_value') ,
		accural : req.param('accural') ,
		posting : req.param('posting') ,
		cash_deposit_min : req.param('cash_deposit_min') ,
		cash_deposit_max : req.param('cash_deposit_max') ,
		cash_deposit_fees_min : req.param('cash_deposit_fees_min') ,
		cash_deposit_fees_max : req.param('cash_deposit_fees_max') ,
		cash_deposit_fees_value : req.param('cash_deposit_fees_value') ,
		cheque_deposit_min : req.param('cheque_deposit_min') ,
		cheque_deposit_max : req.param('cheque_deposit_max') ,
		cheque_deposit_fees_min : req.param('cheque_deposit_fees_min') ,
		cheque_deposit_fees_max : req.param('cheque_deposit_fees_max') ,
		cheque_deposit_fees_value : req.param('cheque_deposit_fees_value') ,
		withdraw_min : req.param('withdraw_min') ,
		withdraw_max : req.param('withdraw_max') ,
		withdraw_type : req.param('withdraw_type') ,
		withdraw_fees_min : req.param('withdraw_fees_min') ,
		withdraw_fees_max : req.param('withdraw_fees_max') ,
		withdraw_fees_value : req.param('withdraw_fees_value') ,
		transfer_min : req.param('transfer_min') ,
		transfer_max : req.param('transfer_max') ,
		transfer_type : req.param('transfer_type') ,
		transfer_fees_min : req.param('transfer_fees_min') ,
		transfer_fees_max : req.param('transfer_fees_max') ,
		transfer_branch_type : req.param('transfer_branch_type') ,
		transfer_fees_value : req.param('transfer_fees_value') ,
		entryfees_min : req.param('entryfees_min') ,
		entryfees_max : req.param('entryfees_max') ,
		entryfees_value : req.param('entryfees_value') ,
		reopenfees_min : req.param('reopenfees_min') ,
		reopenfees_max : req.param('reopenfees_max') ,
		reopenfees_value : req.param('reopenfees_value') ,
		closefees_min : req.param('closefees_min') ,
		closefees_max : req.param('closefees_max') ,
		closefees_value : req.param('closefees_value') ,
		managementfees_min : req.param('managementfees_min') ,
		managementfees_max : req.param('managementfees_max') ,
		managementfees_value : req.param('managementfees_value') ,
		managementfees_type : req.param('managementfees_type') ,
		fixed_overdraft_fees_min : req.param('fixed_overdraft_fees_min') ,
		fixed_overdraft_fees_max : req.param('fixed_overdraft_fees_max') ,
		fixed_overdraft_fees_value : req.param('fixed_overdraft_fees_value') ,
		agio_min : req.param('agio_min') ,
		agio_max : req.param('agio_max') ,
		agio_value : req.param('agio_value') ,
		agio_type : req.param('agio_type') ,
		use_terms : req.param('use_terms') ,
		num_of_periods_min : req.param('num_of_periods_min') ,
		num_of_periods_max : req.param('num_of_periods_max') ,
		posting_frequency : req.param('posting_frequency') 
	}).exec(function(err ,SavingsProduct){
		if(err)
			ErrorService.reportError(err,res);
		return res.view('');
	});
} , 

destroyAction : function( req , res ){ 
	SavingsProduct.destroy({
	}).exec(function(err ,SavingsProduct){
		if(err)
			ErrorService.reportError(err,res);
		return res.view('');
	});
} , 

};



	addPage : function ( req , res ) {
		return res.view('products/savings/add');
	}
	