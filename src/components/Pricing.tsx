import React from 'react'
import { HiCheck } from 'react-icons/hi'
import { HiSparkles } from 'react-icons/hi2'
import { redirect } from 'next/navigation'
import Link from 'next/link'

interface PricingTier {
    name: string
    price: string
    description: string
    features: string[]
    buttonText: string
    isPopular?: boolean
    onButtonPress: '/generate' | '/buy_plan'
}

export default function Pricing() {
    const tiers: PricingTier[] = [
        {
            name: "Basic",
            price: "Free",
            description: "Perfect for personal use and small projects",
            features: [
                "Generate unlimited QR codes",
                "Download as PNG",
                "SSL Certification"
            ],
            buttonText: "Get Started",
            onButtonPress: '/generate'
        },
        {
            name: "Pro",
            price: "$5",
            description: "Ideal for businesses and professionals",
            features: [
                "Everything in Basic",
                "Custom colors",
                "Custom logos",
                "Multiple file formats",
                "Number of scans",
            ],
            buttonText: "Start Free Trial",
            isPopular: true,
            onButtonPress: '/buy_plan'
        },
        {
            name: "Enterprise",
            price: "$12",
            description: "For large teams and organizations",
            features: [
                "Everything in Pro",
                "Advanced analytics",
                "Team management",
                "Dedicated support",
                "Custom QR Codes"
            ],
            buttonText: "Contact Sales",
            onButtonPress: '/buy_plan'
        },
    ]

    {/* redirect to a page */ }
    const onButtonClick = (page: string) => redirect(`/${page}`)

    return (
        <div className='mb-10 px-4'>
            {/* Header */}
            <div className='text-center mb-12'>
                <h2 className='text-3xl font-bold mb-4'>Simple, Transparent Pricing</h2>
                <p className='text-[var(--muted)] max-w-xl mx-auto'>
                    Choose the perfect plan for your needs. All plans include unlimited QR code generation.
                </p>
            </div>

            {/* Pricing Cards */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                {tiers.map((tier) => (
                    <div
                        key={tier.name}
                        className={`
                                relative rounded-2xl p-8 bg-white flex flex-col justify-between
                                ${tier.isPopular
                                ? 'border-2 border-[var(--main)] ring-1 ring-[var(--main)]/10 shadow-lg'
                                : 'border border-[var(--border)]'
                            }
                        `}
                    >
                        <div>
                            {/* Popular Badge */}
                            {tier.isPopular && (
                                <div className='absolute -top-4 left-1/2 -translate-x-1/2'>
                                    <div className='flex items-center gap-1 bg-[var(--main)] text-white px-3 py-1 rounded-full text-sm font-medium'>
                                        <HiSparkles className="h-4 w-4" />
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            {/* Tier Header */}
                            <div className='text-center mb-8'>
                                <h3 className='text-lg font-semibold mb-2'>{tier.name}</h3>
                                <div className='mb-3'>
                                    <span className='text-4xl font-bold'>{tier.price}</span>
                                    {tier.price !== "Free" && <span className='text-[var(--muted)]'>/month</span>}
                                </div>
                                <p className='text-[var(--muted)] text-sm'>{tier.description}</p>
                            </div>

                            {/* Features List */}
                            <ul className='space-y-4 mb-8'>
                                {tier.features.map((feature) => (
                                    <li key={feature} className='flex items-start gap-3'>
                                        <HiCheck className='h-5 w-5 text-[var(--main)] flex-shrink-0 mt-0.5' />
                                        <span className='text-[var(--muted)]'>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                        </div>

                        {/* CTA Button */}
                        <Link href={tier.onButtonPress}>
                            <button
                                className={`
                                w-full rounded-lg px-4 py-2.5 text-sm font-medium
                                ${tier.isPopular
                                        ? 'bg-[var(--main)] text-white hover:bg-[var(--main-hover)]'
                                        : 'border border-[var(--main)] text-[var(--main)] hover:bg-[var(--main)] hover:text-white'
                                    }
                                transition-colors duration-200
                                `}
                            >
                                {tier.buttonText}
                            </button>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Bottom Note */}
            <p className='text-center text-[var(--muted)] text-sm mt-8'>
                All plans include a 14-day free trial. No credit card required.
            </p>
        </div>
    )
}