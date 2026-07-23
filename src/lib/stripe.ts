import { loadStripe } from "@stripe/stripe-js";

// Retrieve Stripe Publishable Key from environment or fallback test sandbox key
const stripePublishableKey =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_STRIPE_PUBLISHABLE_KEY) ||
  "pk_test_51PxDemoStripePublishableKeyAutoniqueClinicOS1234567890";

export const stripePromise = loadStripe(stripePublishableKey);
