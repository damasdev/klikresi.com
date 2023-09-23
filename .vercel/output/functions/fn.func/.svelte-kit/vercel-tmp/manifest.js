export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","icons/analytic.svg","icons/anteraja.svg","icons/dpex.svg","icons/envelope.svg","icons/etc.svg","icons/idx.svg","icons/jne.svg","icons/jnt.svg","icons/jx.svg","icons/lionparcel.svg","icons/notification.svg","icons/pos.svg","icons/rex.svg","icons/rpx.svg","icons/sap.svg","icons/shipper.svg","icons/sicepat.svg","icons/tag.svg","icons/tiki.svg","icons/truck.svg","icons/wahana.svg","images/dashboard.webp","images/developer.webp","images/logo.svg","images/summary.webp"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.1de82aa2.js","app":"_app/immutable/entry/app.35876cda.js","imports":["_app/immutable/entry/start.1de82aa2.js","_app/immutable/chunks/scheduler.2aecb5fb.js","_app/immutable/chunks/paths.3b255979.js","_app/immutable/entry/app.35876cda.js","_app/immutable/chunks/scheduler.2aecb5fb.js","_app/immutable/chunks/index.b69b95a3.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
