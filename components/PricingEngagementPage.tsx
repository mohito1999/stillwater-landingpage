import React from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { RCM_PRICING_COPY } from '../constants';
import { ArrowRight, Check, ShieldCheck, Zap, Server, Lock } from 'lucide-react';

export const PricingEngagementPage: React.FC = () => {
    return (
        <div className="flex flex-col animate-fade-in text-primary">
            {/* SECTION 1: HERO */}
            <section className="relative w-full flex flex-col justify-center min-h-[60vh] py-24 border-b border-stone-200 bg-background overflow-hidden">
                <div className="absolute inset-0 z-0 bg-grid pointer-events-none opacity-60" />
                <div className="absolute top-[15%] left-[5%] w-24 h-24 border border-stone-200/60 pointer-events-none animate-drift-slow z-0" />
                <div className="absolute bottom-[20%] right-[10%] w-32 h-32 border border-stone-200/60 pointer-events-none animate-drift-medium z-0" />

                <Container className="relative z-10">
                    <div className="max-w-5xl">
                        <div className="pl-0 md:pl-8 md:border-l-4 md:border-primary/10">
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-primary mb-8 whitespace-pre-line">
                                {RCM_PRICING_COPY.hero.headline}
                            </h1>
                            <p className="text-xl sm:text-2xl text-secondary font-normal leading-relaxed max-w-3xl mb-10">
                                {RCM_PRICING_COPY.hero.subHeadline}
                            </p>
                            <p className="text-sm uppercase tracking-wide text-stone-500 font-medium">
                                {RCM_PRICING_COPY.hero.supporting}
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* SECTION 2: ENGAGEMENT OVERVIEW */}
            <section className="py-24 bg-stone-50 border-b border-stone-200">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <h2 className="text-3xl font-semibold text-primary tracking-tight sticky top-24">
                                {RCM_PRICING_COPY.overview.title}
                            </h2>
                        </div>
                        <div className="lg:col-span-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 border border-stone-200">
                                {RCM_PRICING_COPY.overview.points.map((point, idx) => (
                                    <div key={idx} className="bg-background p-8 md:p-10 flex flex-col gap-4">
                                        <div className="w-8 h-8 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-primary font-mono text-xs font-medium">
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-primary mb-2">
                                                {point.title}
                                            </h3>
                                            <p className="text-secondary leading-relaxed">
                                                {point.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* SECTION 3: PAID PILOT & ACTIVATION */}
            <section className="py-24 bg-background border-b border-stone-200">
                <Container>
                    <div className="mb-16">
                        <h2 className="text-3xl font-semibold text-primary tracking-tight mb-4">
                            {RCM_PRICING_COPY.pilot.title}
                        </h2>
                        <p className="text-lg text-secondary max-w-3xl">
                            {RCM_PRICING_COPY.pilot.positioning}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Pilot Card */}
                        <div className="lg:col-span-8 lg:col-start-3 bg-white border border-stone-200 shadow-sm p-8 sm:p-10">
                            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 border-b border-stone-100 pb-8 gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-primary mb-1">Pilot Engagement</h3>
                                    <span className="text-stone-500">{RCM_PRICING_COPY.pilot.details.duration}</span>
                                </div>
                                <div className="text-left sm:text-right">
                                    <span className="text-4xl font-bold text-primary block">{RCM_PRICING_COPY.pilot.details.fee}</span>
                                    <span className="text-sm text-stone-400">{RCM_PRICING_COPY.pilot.details.feeNote}</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                                <div>
                                    <h4 className="text-sm font-semibold text-stone-400 uppercase tracking-wide mb-4">What's Included</h4>
                                    <ul className="space-y-4">
                                        {RCM_PRICING_COPY.pilot.includes.map((inc, idx) => (
                                            <li key={idx} className="flex justify-between items-center text-base border-b border-stone-100 last:border-0 pb-2 last:pb-0">
                                                <span className="text-secondary">{inc.item}</span>
                                                <span className="font-medium text-primary">{inc.value}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-stone-50 p-6 border border-stone-100 h-fit">
                                    <h4 className="text-sm font-semibold text-stone-400 uppercase tracking-wide mb-4">Usage Overages</h4>
                                    <div className="space-y-4">
                                        {RCM_PRICING_COPY.pilot.overages.map((over, idx) => (
                                            <div key={idx} className="flex justify-between items-center text-sm">
                                                <span className="text-secondary">{over.type}</span>
                                                <span className="font-mono text-primary">{over.cost}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* SECTION 4: PRODUCTION PRICING PLANS */}
            <section className="py-24 bg-stone-50 border-b border-stone-200">
                <Container>
                    <div className="mb-16">
                        <h2 className="text-3xl font-semibold text-primary tracking-tight mb-2">
                            {RCM_PRICING_COPY.production.title}
                        </h2>
                        <p className="text-stone-500 text-sm">
                            * {RCM_PRICING_COPY.production.disclaimer}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {RCM_PRICING_COPY.production.plans.map((plan, idx) => (
                            <div key={idx} className={`bg-white border p-8 flex flex-col ${idx === 1 ? 'border-primary shadow-md relative' : 'border-stone-200'}`}>
                                {idx === 1 && (
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 uppercase tracking-widest shadow-sm">
                                        Most Common
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-primary mb-2 tracking-tight">{plan.name}</h3>
                                <div className="mb-6 pb-6 border-b border-stone-100">
                                    <span className="text-3xl font-bold text-primary">{plan.fee}</span>
                                </div>

                                {/* Includes */}
                                <div className="mb-8 space-y-4">
                                    <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wide">Included Monthly</h4>
                                    {plan.includes.map((inc, i) => (
                                        <div key={i} className="flex justify-between text-sm">
                                            <span className="text-secondary">{inc.label}</span>
                                            <span className="font-medium text-primary">{inc.value}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Overages */}
                                <div className="mb-8 space-y-3 bg-stone-50 p-4 -mx-4">
                                    <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-2">Overages</h4>
                                    {plan.overages.map((ov, i) => (
                                        <div key={i} className="flex justify-between text-xs text-stone-500">
                                            <span>{ov.label}</span>
                                            <span className="font-mono">{ov.value}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto pt-6 border-t border-stone-100">
                                    <div className="flex items-center gap-2 text-sm font-medium text-primary mb-2">
                                        <ShieldCheck className="w-4 h-4 text-stone-400" />
                                        {plan.support}
                                    </div>
                                    <p className="text-xs text-stone-400 italic">
                                        {plan.hosting && <span className="block mb-1 text-primary not-italic font-medium"><Server className="w-3 h-3 inline mr-1" /> {plan.hosting}</span>}
                                        {plan.supporting}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* SECTION 5: DEPLOYMENT & SECURITY */}
            <section className="py-24 bg-background border-b border-stone-200">
                <Container>
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-semibold text-primary tracking-tight mb-8">
                            {RCM_PRICING_COPY.deployment.title}
                        </h2>
                        <div className="space-y-6">
                            {RCM_PRICING_COPY.deployment.points.map((point, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-6 border border-stone-200 bg-stone-50/50">
                                    <Lock className="w-6 h-6 text-stone-400 flex-shrink-0" />
                                    <p className="text-lg text-primary">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* SECTION 6: NEXT STEPS */}
            <section className="py-32 bg-stone-900 text-stone-50 flex flex-col items-center text-center">
                <Container>
                    <div className="max-w-2xl mx-auto space-y-10">
                        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
                            {RCM_PRICING_COPY.cta.title}
                        </h2>
                        <p className="text-xl text-stone-300">
                            {RCM_PRICING_COPY.cta.text}
                        </p>
                        <div>
                            <Button
                                className="bg-white !text-primary hover:bg-stone-200 border-white"
                                data-cal-link="mohitatneurix/stillwater-intro-chat"
                                data-cal-namespace="stillwater-intro-chat"
                                data-cal-config='{"layout":"month_view"}'
                            >
                                {RCM_PRICING_COPY.cta.button}
                                <ArrowRight className="ml-3 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};
