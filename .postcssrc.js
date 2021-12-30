
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')

module.exports = ({ file }) => {
	let rootValue
	// vant 37.5 [link](https://github.com/youzan/vant/issues/1181)
	if (file && file.dirname && file.dirname.indexOf('vant') > -1) {
		rootValue = 37.5 // 针对vant ui 字体变小所有对vant下目录根据375来配置rem
	} else {
		rootValue = 75
	}
	return {
		plugins: [
			autoprefixer(),
			pxtorem({
				rootValue: rootValue,
				propList: ['*'],
				minPixelValue: 2
			})
		]
	}
}

//不兼容vant 
// https://github.com/michael-ciniawsky/postcss-load-config
// module.exports = {
// 	plugins: {
// 		autoprefixer: {
// 			overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8']
// 		},
// 		'postcss-pxtorem': {
// 			rootValue: 75,//750的设计稿,如果是375的设计稿 写37.5
// 			propList: ['*']
// 		}
// 	}
// }
