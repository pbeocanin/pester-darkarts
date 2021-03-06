const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
	fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
	parser: 'babel-eslint',
	extends: ['airbnb', 'prettier', 'prettier/react'],
	plugins: ['prettier', 'react'],
	env: {
		browser: true,
		node: true,
		jest: true,
		es6: true,
	},
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		'prettier/prettier': ['error', prettierOptions],
		'arrow-body-style': [2, 'as-needed'],
		'class-methods-use-this': 0,
		'comma-dangle': [2, 'always-multiline'],
		'import/imports-first': 0,
		'import/newline-after-import': 0,
		'import/no-dynamic-require': 0,
		'import/no-extraneous-dependencies': 0,
		'import/no-named-as-default': 0,
		'import/no-unresolved': 2,
		'import/no-webpack-loader-syntax': 0,
		'import/prefer-default-export': 0,

		'jsx-a11y/anchor-is-valid': [
			0,
			{
				components: ['Link'],
				specialLink: ['to', 'hrefLeft', 'hrefRight'],
				aspects: ['noHref', 'invalidHref', 'preferButton'],
			},
		],
		'jsx-a11y/label-has-for': [
			2,
			{
				components: ['Label'],
				required: {
					some: ['nesting', 'id'],
				},
				allowChildren: false,
			},
		],
		'jsx-a11y/label-has-associated-control': [
			2,
			{
				components: ['Label'],
				required: {
					some: ['nesting', 'id'],
				},
				allowChildren: false,
			},
		],
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1,
			},
		],
		'max-len': 0,
		'newline-per-chained-call': 0,
		'no-confusing-arrow': 0,
		'no-console': ['warn', { allow: ['error'] }],
		'no-use-before-define': 0,
		'prefer-template': 2,
		'react/jsx-closing-tag-location': 0,
		'react/forbid-prop-types': 0,
		'react/jsx-first-prop-new-line': [2, 'multiline'],
		'react/jsx-filename-extension': 0,
		'react/jsx-no-target-blank': 0,
		'react/require-default-props': 0,
		'react/require-extension': 0,
		'import/extensions': ['never'],
		'react/self-closing-comp': 0,
		'react/sort-comp': 0,
		'react/no-array-index-key': 0,
		'require-yield': 0,
		'import/no-useless-path-segments': 0,
	},
	settings: {
		'import/resolver': {
			webpack: {
				config: './internals/webpack/webpack.prod.babel.js',
			},
		},
	},
};
