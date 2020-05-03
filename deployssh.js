const SftpUpload = require('sftp-upload');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const options = {
	host: '45.55.42.198',
	username: 'root',
	path: './build',
	remoteDir: '/var/www/app.leotraining.com/',
	privateKey: fs.readFileSync(path.resolve('../../.ssh', 'id_rsa')),
};
const sftp = new SftpUpload(options);
const ProgressBar = require('progress');
const red = '\u001b[41m \u001b[0m';
// eslint-disable-next-line
const green = '\u001b[32m \u001b[39m';
const url = chalk.green.underline('https://app.leotraining.com');

let bar;
fs.readdir('build', (err, files) => {
	bar = new ProgressBar(':current/:total :bar :percent :elapseds', {
		total: files.length,
		complete: red,
	});
});
sftp.on('error', err => {
	throw err;
})
	.on('uploading', progress => {
		bar.tick({
			percent: progress.percent,
		});
	})
	.on('completed', () => {
		// eslint-disable-next-line
		console.log(`Live pushed to ${url}`);
	})
	.upload();
