export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.BC6-5jUZ.js",app:"_app/immutable/entry/app.CTk4Py6N.js",imports:["_app/immutable/entry/start.BC6-5jUZ.js","_app/immutable/chunks/CZ95Ho_y.js","_app/immutable/chunks/onGPnXmB.js","_app/immutable/chunks/BYP7nSbY.js","_app/immutable/entry/app.CTk4Py6N.js","_app/immutable/chunks/onGPnXmB.js","_app/immutable/chunks/BbeqyZwP.js","_app/immutable/chunks/6ofpDSTB.js","_app/immutable/chunks/BYP7nSbY.js","_app/immutable/chunks/CliYfAgJ.js","_app/immutable/chunks/BGGfSDgV.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/calibration",
				pattern: /^\/calibration\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
