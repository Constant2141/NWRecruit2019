const qiniu = require('qiniu')
    , accessKey = 'yotWA1VqqiMGxYU_Ru8Op_wqGjhDeK98la55lpby'
    , secretKey = '4vTogWiAZM9EJtgxY7y3WbLsEtUIfXF_sFv2m4OU'
    , mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
    , config = new qiniu.conf.Config()
    , bucketManager = new qiniu.rs.BucketManager(mac, config)
    , QINIU_DOMAIN = 'https://io.chenpt.cc'
    , opt = {
		scope: 'constant',
		bucket: 'constant', 
		expires: 1200, 
	}


// Set Zone 
config.zone = qiniu.zone.Zone_z2; 

function key2url(key){
	return bucketManager.publicDownloadUrl(QINIU_DOMAIN, key); 
} 

function qiniuToken(){
	let putPolicy = new qiniu.rs.PutPolicy(opt);
	let uploadToken = putPolicy.uploadToken(mac);

	return uploadToken; 
}


function upload(localFile, key){
	let token = qiniuToken(); 
	let putExtra = new qiniu.form_up.PutExtra();
	let formUploader = new qiniu.form_up.FormUploader(config);

	return new Promise((res, rej) => {
		formUploader.putFile(
			token, key,
			localFile, putExtra,
			(respErr, respBody, respInfo) => {
				if (respErr) {
					rej(respErr); 
					return ; 
				}

				if (respInfo.statusCode == 200) {
					respBody.img = key2url(respBody.key); 
					res(respBody); 
				} else {
					rej(respBody); 
				}
			}
		);
	})
}

function fetch(target_url, key){
	console.log('[ ToFetch ]', target_url); 
	return new Promise((res, rej) => {
		bucketManager.fetch(
			target_url,
			opt.bucket,
			key,
			function(err, respBody, respInfo) {
				if (err) {
					console.log('[ ERROR ] qnx', err);
					rej(err); 
				} else {
					if (respInfo.statusCode === 200) {
						respBody.url = key2url(respBody.key);
					}

					console.log('[ FETCH ]', respInfo.statusCode, respBody.url);

					res(respBody); 
				}
			});
	})
}

module.exports = {
	qiniuToken: qiniuToken, 
	upload: upload, 
	fetch: fetch
}