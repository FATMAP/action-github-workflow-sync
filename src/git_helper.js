const nodeexec = require( '../node-exec' );
const gh_core  = require( '@actions/core' );
const log      = require( '../logger/index' );
const toolkit  = require( 'actions-js-toolkit' );

const findExistingPullRequest = async( local_path ) => {
	let cmd    = `gh pr list --state=open --search-"minor CHORE Files Sync From ${toolkit.input.env( 'GITHUB_REPOSITORY')}"`;
	let status = false;

	await nodeexec( `${cmd}`).then( (response) => {
		log.success( 'Existing PR found' );
		status = response;
	} ).catch( ( error ) => {
		log.error( 'Unable to find an existing PR' );
		gh_core.error( error );
		status = false;
	} );
	return status;
};


module.exports = {
    findExistingPullRequest: findExistingPullRequest,
}
