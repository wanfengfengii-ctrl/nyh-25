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
		client: {start:"_app/immutable/entry/start.BAq-K6w4.js",app:"_app/immutable/entry/app.BRyozMoS.js",imports:["_app/immutable/entry/start.BAq-K6w4.js","_app/immutable/chunks/D4l4VEa5.js","_app/immutable/chunks/YK3oDBfS.js","_app/immutable/chunks/DxTIuSTY.js","_app/immutable/chunks/CHbX2CAS.js","_app/immutable/entry/app.BRyozMoS.js","_app/immutable/chunks/YK3oDBfS.js","_app/immutable/chunks/aaScoccQ.js","_app/immutable/chunks/BimzPX6F.js","_app/immutable/chunks/CHbX2CAS.js","_app/immutable/chunks/DQdumUKV.js","_app/immutable/chunks/DxTIuSTY.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
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
