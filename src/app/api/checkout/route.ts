import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not configured");
  }
  return new Stripe(key);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { plan } = body;

    const validPlans = ["starter", "professional", "business"];
    const normalizedPlan = plan?.toLowerCase();

    if (!normalizedPlan || !validPlans.includes(normalizedPlan)) {
      return NextResponse.json(
        { error: "Invalid plan selected" },
        { status: 400 }
      );
    }

    const stripe = getStripe();
    const origin = request.headers.get("origin") || "https://website-phi-ten-25.vercel.app";

    // Price amounts in cents
    const priceAmounts: Record<string, number> = {
      starter: 9900,
      professional: 24900,
      business: 49900,
    };

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `AuditAlly ${plan.charAt(0).toUpperCase() + plan.slice(1)} Plan`,
              description: `Monthly subscription to AuditAlly ${plan} tier`,
            },
            unit_amount: priceAmounts[normalizedPlan],
            recurring: {
              interval: "month",
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/pricing?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    const message = error instanceof Error ? error.message : "Failed to create checkout session";
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
