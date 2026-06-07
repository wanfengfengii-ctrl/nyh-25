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
		client: {start:"_app/immutable/entry/start.DlzA07sm.js",app:"_app/immutable/entry/app.C-YgjVIi.js",imports:["_app/immutable/entry/start.DlzA07sm.js","_app/immutable/chunks/Da9aMGFQ.js","_app/immutable/chunks/CbNMObeC.js","_app/immutable/chunks/Co30PYDo.js","_app/immutable/entry/app.C-YgjVIi.js","_app/immutable/chunks/CbNMObeC.js","_app/immutable/chunks/B5jYMjmH.js","_app/immutable/chunks/CccdY9tH.js","_app/immutable/chunks/Co30PYDo.js","_app/immutable/chunks/B11h_Szs.js","_app/immutable/chunks/CW55drJ9.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
