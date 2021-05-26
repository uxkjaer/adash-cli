let chalk = require('chalk');
const AsciiTable = require('ascii-table');
const log = console.log;

module.exports = (data) => {
	log(chalk.bold.green(' PASS '));
	// @ToDo:  on verbose
	var table = new AsciiTable('Test Summary')
	table.setHeading('Package','Total tests','Total Success', 'Total fails','Statements Count','Statements Covered','Statements Uncovered')
	
	data.SUMARIES.map(test => {
		if (test.TYPE ==='DEVC'){
			log(chalk.green('PASS: ') + test.TYPE + ' ' + test.NAME );
			table.addRow(test.NAME, test.TOTAL_TESTS, test.TOTAL_SUCCESS, test.TOTAL_FAILED, test.STATEMENTS_COUNT, test.STATEMENTS_COVERED, test.STATEMENTS_UNCOVERED);
			let obj = data.SUMARIES.filter((osum) => (osum.PACKAGE_OWN = test.PACKAGE_OWN) && osum.TYPE !== 'DEVC');
			obj.map((objSum) => {
				table.addRow(`  - ${objSum.NAME}`, objSum.TOTAL_TESTS, objSum.TOTAL_SUCCESS, objSum.TOTAL_FAILED, objSum.STATEMENTS_COUNT, objSum.STATEMENTS_COVERED, objSum.STATEMENTS_UNCOVERED);
			})
		}
		
	});
	log(table.toString());
};
