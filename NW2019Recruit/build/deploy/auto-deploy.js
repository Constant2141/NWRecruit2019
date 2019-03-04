// auto-deploy.js
const Client = require('ssh2-sftp-client')
    , sftp = new Client()
    , fs = require('fs-extra')
    , path = require('path')
    , globby = require('globby')
    , qnx = require('./qnx')
    , logger = require('./logger')

let DIST_BASE = path.join(__dirname, '../../dist').replace(/\\/g, '/'); 
let DIST_BASE_Glob = path.join(__dirname, '../../dist/**/*.*'); 

let REMOTE_BASE = '/home/wwwroot/wx.zqyy.site/';
let IP = `47.106.21.195`;
let acc = 'root';
let pwd = `wanna.2141`;

let allFiles = globby(DIST_BASE_Glob).then(paths => {
	return paths.map(path => {
		return path.replace(DIST_BASE, '').slice(1)
	})
}).then(upload)

let notStartWishDot = list => {
	return list.filter(item => {
		let { name } = item; 

		return !name.startsWith('.'); 
	});
}

function upload2server(LOCAL_index, REMOTE_index) {
	let connection = sftp.connect({
		host: IP,
		port: '22',
		username: acc,
		password: pwd
	});

	return connection.then(ok => {
		return sftp.put(LOCAL_index, REMOTE_index); 
	}).then(ok => {
		logger('Success'.data, 'index.html'.info);
		sftp.end();
	}).catch(err => {
		logger('ERR', err); 
		sftp.end();
	});
}

function upload2qiniu(local, file) {
	return qnx.upload(local, file).then(res => {
		logger('Success'.data, file.info); 
	}).catch(msg => {
		if (msg.error === 'file exists'){
			// console.log('[ Ignore  ]', file); 
			logger('Ignore', file); 
		} else {
			logger('ERR', msg.error); 
		}
	});
}

async function upload(files){
	let index = files[0]; 
	let LOCAL_index = DIST_BASE + '/' + index ; 
	let REMOTE_index = REMOTE_BASE + index; 

	console.log(REMOTE_index);

	await upload2server(LOCAL_index, REMOTE_index);

	let remain = files.slice(1); 
	
	for (let i = 0; i < remain.length; i ++) {
		let file = remain[i];
		let local = DIST_BASE + '/' + file; 

		await upload2qiniu(local, file);
	}

	console.log(' ');
	logger('AllDone'.data, 'http://wx.zqyy.site'.warn); 
}
