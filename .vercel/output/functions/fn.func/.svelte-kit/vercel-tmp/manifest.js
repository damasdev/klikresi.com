export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","icons/analytic.svg","icons/anteraja.svg","icons/dpex.svg","icons/envelope.svg","icons/etc.svg","icons/google.svg","icons/idx.svg","icons/jne.svg","icons/jnt.svg","icons/jx.svg","icons/lionparcel.svg","icons/notification.svg","icons/pos.svg","icons/rex.svg","icons/rpx.svg","icons/sap.svg","icons/shipper.svg","icons/sicepat.svg","icons/tag.svg","icons/tiki.svg","icons/truck.svg","icons/wahana.svg","images/dashboard.webp","images/developer.webp","images/logo.svg","images/summary.webp","robots.txt"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".webp":"image/webp",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.db4decbc.js","app":"_app/immutable/entry/app.d85144a7.js","imports":["_app/immutable/entry/start.db4decbc.js","_app/immutable/chunks/scheduler.e367d6f5.js","_app/immutable/chunks/singletons.bc2369e4.js","_app/immutable/entry/app.d85144a7.js","_app/immutable/chunks/scheduler.e367d6f5.js","_app/immutable/chunks/index.4f31dce3.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js'))
		],
		routes: [
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/oauth",
				pattern: /^\/oauth\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
