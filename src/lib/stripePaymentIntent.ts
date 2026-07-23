import { createServerFn } from "@tanstack/react-start";
import Stripe from "stripe";

export interface PaymentIntentResult {
  clientSecret: string | null;
  id: string;
  isDemo: boolean;
  error?: string;
}

export const createStripePaymentIntentFn = createServerFn({ method: "POST" })
  .validator((data: { amount: number; currency?: string; metadata?: Record<string, string> }) => data)
  .handler(async ({ data }): Promise<PaymentIntentResult> => {
    const secretKey =
      (typeof process !== "undefined" && process.env?.STRIPE_SECRET_KEY) ||
      "sk_test_51PxDemoStripeSecretKeyAutoniqueClinicOS1234567890";

    // If fallback demo key is active, generate sandbox clientSecret
    if (!secretKey || secretKey.includes("DemoStripeSecretKey")) {
      const mockId = `pi_3M${Math.random().toString(36).substring(2, 12)}`;
      const mockSecret = `${mockId}_secret_${Math.random().toString(36).substring(2, 15)}`;
      return {
        clientSecret: mockSecret,
        id: mockId,
        isDemo: true,
      };
    }

    try {
      const stripe = new Stripe(secretKey, {
        apiVersion: "2026-01-28" as any,
      });

      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(data.amount * 100), // convert dollars to cents
        currency: (data.currency || "usd").toLowerCase(),
        metadata: data.metadata || {},
        automatic_payment_methods: {
          enabled: true,
        },
      });

      return {
        clientSecret: paymentIntent.client_secret,
        id: paymentIntent.id,
        isDemo: false,
      };
    } catch (err: any) {
      console.warn("[Stripe Sandbox API]", err?.message || err);
      const mockId = `pi_3M${Math.random().toString(36).substring(2, 12)}`;
      return {
        clientSecret: `${mockId}_secret_${Math.random().toString(36).substring(2, 15)}`,
        id: mockId,
        isDemo: true,
        error: err?.message,
      };
    }
  });
