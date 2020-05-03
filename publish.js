/* eslint-disable no-console */
const { Client } = require('ssh2');
const SftpUpload = require('sftp-upload');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const options = {
	host: '45.55.42.198',
	username: 'root',
	path: './build',
	remoteDir: '/var/www/new_version/',
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
		const conn = new Client();
		conn.on('ready', () => {
			console.log('Connected to server');
			conn.exec('cd /var/www && ./updater.sh', (err, stream) => {
				if (err) throw err;
				stream
					.on('close', () => {
						conn.end();
					})
					.on('data', data => {
						console.log(`Message from server:  ${data}`);
						console.log(`Live pushed to ${url}`);
					})
					.stderr.on('data', data => {
						console.log(`Error:  ${data}`);
					});
			});
		}).connect({
			host: '45.55.42.198',
			port: 22,
			username: 'root',
			privateKey: fs.readFileSync(path.resolve('../../.ssh', 'id_rsa')),
		});
	})
	.upload();
