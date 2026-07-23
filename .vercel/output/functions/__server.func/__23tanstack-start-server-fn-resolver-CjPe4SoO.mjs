//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-CjPe4SoO.js
var manifest = { "8ed6abfc2a8c2143894b10ada065b6f64bcafe2a6adcc0b13e0d53227ba7a123": {
	functionName: "createStripePaymentIntentFn_createServerFn_handler",
	importer: () => import("./_ssr/stripePaymentIntent-t1wrRHNJ.mjs")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
