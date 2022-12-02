const { exec } = require( 'child_process' );

module.exports = ( command, workingDir ) => new Promise( ( resolve, reject ) => exec( command, { cwd: workingDir, }, ( error, stdout ) => error ? reject( error ) : resolve( stdout.trim() ) ));
