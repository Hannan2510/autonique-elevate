import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { t as Stripe } from "../_libs/stripe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stripePaymentIntent-t1wrRHNJ.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var createStripePaymentIntentFn_createServerFn_handler = createServerRpc({
	id: "8ed6abfc2a8c2143894b10ada065b6f64bcafe2a6adcc0b13e0d53227ba7a123",
	name: "createStripePaymentIntentFn",
	filename: "src/lib/stripePaymentIntent.ts"
}, (opts) => createStripePaymentIntentFn.__executeServer(opts));
var createStripePaymentIntentFn = createServerFn({ method: "POST" }).validator((data) => data).handler(createStripePaymentIntentFn_createServerFn_handler, async ({ data }) => {
	const secretKey = typeof process !== "undefined" && process.env?.STRIPE_SECRET_KEY || "sk_test_51PxDemoStripeSecretKeyAutoniqueClinicOS1234567890";
	if (!secretKey || secretKey.includes("DemoStripeSecretKey")) {
		const mockId = `pi_3M${Math.random().toString(36).substring(2, 12)}`;
		return {
			clientSecret: `${mockId}_secret_${Math.random().toString(36).substring(2, 15)}`,
			id: mockId,
			isDemo: true
		};
	}
	try {
		const paymentIntent = await new Stripe(secretKey, { apiVersion: "2026-01-28" }).paymentIntents.create({
			amount: Math.round(data.amount * 100),
			currency: (data.currency || "usd").toLowerCase(),
			metadata: data.metadata || {},
			automatic_payment_methods: { enabled: true }
		});
		return {
			clientSecret: paymentIntent.client_secret,
			id: paymentIntent.id,
			isDemo: false
		};
	} catch (err) {
		console.warn("[Stripe Sandbox API]", err?.message || err);
		const mockId = `pi_3M${Math.random().toString(36).substring(2, 12)}`;
		return {
			clientSecret: `${mockId}_secret_${Math.random().toString(36).substring(2, 15)}`,
			id: mockId,
			isDemo: true,
			error: err?.message
		};
	}
});
//#endregion
export { createStripePaymentIntentFn_createServerFn_handler };
