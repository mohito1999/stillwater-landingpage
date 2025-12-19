import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { CASE_STUDIES_CONTENT, COMPANY_NAME } from '../constants';
import { ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, Cpu } from 'lucide-react';
import { useNavigation } from '../hooks/useNavigation';

export const CaseStudyPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { handleNavigation } = useNavigation();

    const data = id ? CASE_STUDIES_CONTENT[id as keyof typeof CASE_STUDIES_CONTENT] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!data) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] bg-background">
                <h1 className="text-2xl font-semibold text-primary mb-4">Case study not found</h1>
                <Button onClick={() => navigate('/case-studies')} variant="outline">
                    <ArrowLeft className="mr-2 w-4 h-4" /> Back to Case Studies
                </Button>
            </div>
        );
    }

    return (
        <div className="flex flex-col animate-fade-in bg-background">
            {/* SECTION 1: HERO */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-stone-200">
                <Container>
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-6">
                            <Button
                                variant="ghost"
                                className="pl-0 hover:bg-transparent text-stone-400 hover:text-primary transition-colors mb-2"
                                onClick={() => navigate('/case-studies')}
                            >
                                <ArrowLeft className="mr-1 w-4 h-4" /> Back to Case Studies
                            </Button>
                        </div>
                        <span className="text-xs font-mono text-stone-400 uppercase tracking-widest block mb-6">
                            {data.hero.label}
                        </span>
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-primary mb-8 ml-0">
                            {data.hero.title}
                        </h1>
                        <p className="text-xl sm:text-2xl text-secondary font-normal leading-relaxed max-w-3xl mb-12">
                            {data.hero.summary}
                        </p>

                        <div className="inline-flex flex-col border-l-4 border-accent-blue pl-6 py-2">
                            <span className="text-5xl sm:text-6xl font-bold text-primary tracking-tighter mb-1">
                                {data.hero.outcome.value}
                            </span>
                            <span className="text-lg text-secondary font-medium">
                                {data.hero.outcome.label}
                            </span>
                        </div>
                    </div>
                </Container>
            </section>

            {/* SECTION 2: CLIENT & CONTEXT */}
            <section className="py-24 bg-stone-50 border-b border-stone-200">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <h2 className="text-2xl font-semibold text-primary tracking-tight">
                                {data.client.title}
                            </h2>
                        </div>
                        <div className="lg:col-span-8 space-y-8">
                            <p className="text-lg text-secondary leading-relaxed">
                                {data.client.content}
                            </p>
                            <ul className="space-y-3">
                                {data.client.constraints.map((c: string, idx: number) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2.5 flex-shrink-0" />
                                        <span className="text-base text-secondary">{c}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            {/* SECTION 3: THE PROBLEM */}
            <section className="py-24 bg-background border-b border-stone-200">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <h2 className="text-2xl font-semibold text-primary tracking-tight">
                                {data.problem.title}
                            </h2>
                        </div>
                        <div className="lg:col-span-8">
                            <div className="space-y-6 mb-8">
                                {data.problem.points.map((p: string, idx: number) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <AlertTriangle className="w-5 h-5 text-stone-300 mt-1 flex-shrink-0" />
                                        <span className="text-lg text-primary">{p}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-xl font-medium text-stone-900 border-t border-stone-100 pt-6 italic">
                                "{data.problem.impact}"
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* SECTION 4: WHY IT FAILED */}
            <section className="py-24 bg-stone-100/50 border-b border-stone-200">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <h2 className="text-2xl font-semibold text-primary tracking-tight">
                                {data.failure.title}
                            </h2>
                        </div>
                        <div className="lg:col-span-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                {data.failure.points.map((p: string, idx: number) => (
                                    <div key={idx} className="bg-white p-6 border border-stone-200 shadow-sm">
                                        <span className="text-base text-secondary">{p}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-lg font-semibold text-primary">
                                {data.failure.closing}
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* SECTION 5: OWNERSHIP */}
            <section className="py-24 bg-primary text-stone-200 border-b border-stone-800">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <h2 className="text-2xl font-semibold text-white tracking-tight">
                                {data.ownership.title}
                            </h2>
                        </div>
                        <div className="lg:col-span-8">
                            <p className="text-xl text-stone-300 mb-8 leading-relaxed">
                                {data.ownership.intro}
                            </p>
                            <ul className="grid grid-cols-1 gap-4">
                                {data.ownership.scope.map((item: string, idx: number) => (
                                    <li key={idx} className="flex items-center gap-4 p-4 border border-stone-700 bg-stone-800/30">
                                        <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0" />
                                        <span className="text-lg text-white font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            {/* SECTION 6: SOLUTION */}
            <section className="py-24 bg-background border-b border-stone-200">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <h2 className="text-2xl font-semibold text-primary tracking-tight">
                                {data.solution.title}
                            </h2>
                        </div>
                        <div className="lg:col-span-8 space-y-8">
                            <p className="text-lg text-secondary leading-relaxed">
                                {data.solution.body}
                            </p>
                            <div className="space-y-4 border-l-2 border-stone-200 pl-6">
                                {data.solution.principles.map((p: string, idx: number) => (
                                    <p key={idx} className="text-lg font-medium text-primary">
                                        {p}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* SECTION 7: SYSTEM DESIGN */}
            <section className="py-24 bg-stone-50 border-b border-stone-200 overflow-hidden">
                <Container>
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-primary tracking-tight mb-4">
                            {data.system.title}
                        </h2>
                        <p className="text-lg text-secondary max-w-3xl">
                            {data.system.description}
                        </p>
                    </div>

                    {/* Schematic Diagram */}
                    <div className="relative w-full max-w-4xl mx-auto py-12">
                        {/* Connecting Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-stone-200 -z-10 md:-translate-x-1/2" />

                        <div className="flex flex-col gap-8 md:gap-12 relative">
                            {data.system.components.map((comp: any, idx: number) => (
                                <div key={idx} className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                    {/* Node */}
                                    <div className="w-full md:w-1/2 flex justify-start md:justify-end items-center">
                                        <div className={`p-6 bg-white border border-stone-300 shadow-sm w-full md:w-auto md:min-w-[280px] z-10 relative group hover:border-accent-blue transition-colors ${idx % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                                            <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-stone-200 rotate-45 border border-stone-300 z-0 ${idx % 2 !== 0 ? '-left-2' : '-right-2 hidden md:block'} ${idx % 2 !== 0 ? 'md:-right-2 md:left-auto md:hidden' : ''}`}></div>

                                            <span className="text-xs font-mono text-stone-400 uppercase tracking-widest block mb-1">
                                                Layer {idx + 1}
                                            </span>
                                            <h3 className="text-lg font-bold text-primary mb-1">
                                                {comp.title}
                                            </h3>
                                            <p className="text-sm text-secondary">
                                                {comp.desc}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Center Icon */}
                                    <div className="hidden md:flex flex-shrink-0 w-12 h-12 bg-white border-2 border-primary rounded-full items-center justify-center z-20">
                                        <span className="text-xs font-bold text-primary">{idx + 1}</span>
                                    </div>
                                    <div className="md:w-1/2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* SECTION 8: READINESS */}
            <section className="py-24 bg-background border-b border-stone-200">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <h2 className="text-2xl font-semibold text-primary tracking-tight">
                                {data.readiness.title}
                            </h2>
                        </div>
                        <div className="lg:col-span-8 space-y-8">
                            <p className="text-lg text-secondary leading-relaxed">
                                {data.readiness.body}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {data.readiness.areas.map((area: string, idx: number) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 bg-stone-50 rounded-lg">
                                        <Cpu className="w-4 h-4 text-stone-400" />
                                        <span className="text-base text-primary font-medium">{area}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-lg font-semibold text-primary italic">
                                {data.readiness.closing}
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* SECTION 9: RESULTS */}
            <section className="py-24 bg-primary text-stone-100 border-b border-stone-800">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <h2 className="text-2xl font-semibold text-white tracking-tight">
                                {data.results.title}
                            </h2>
                        </div>
                        <div className="lg:col-span-8">
                            <div className="bg-stone-800/50 border border-stone-700 p-8 sm:p-12 mb-8">
                                <p className="text-5xl sm:text-7xl font-bold text-white mb-2 tracking-tighter">
                                    {data.results.primary.value}
                                </p>
                                <p className="text-xl text-stone-400 font-medium">
                                    {data.results.primary.label}
                                </p>
                            </div>
                            <div className="space-y-4">
                                {data.results.secondary.map((res: string, idx: number) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="w-2 h-2 rounded-full bg-accent-blue mt-2.5" />
                                        <p className="text-lg text-stone-300">{res}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* SECTION 10: WHY IT WORKED */}
            <section className="py-24 bg-stone-100 border-b border-stone-200">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <h2 className="text-2xl font-semibold text-primary tracking-tight">
                                {data.whyWorked.title}
                            </h2>
                        </div>
                        <div className="lg:col-span-8">
                            <ul className="space-y-6">
                                {data.whyWorked.points.map((p: string, idx: number) => (
                                    <li key={idx} className="flex items-center gap-4">
                                        <ShieldCheck className="w-6 h-6 text-stone-400 flex-shrink-0" />
                                        <span className="text-xl text-primary font-medium">{p}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            {/* SECTION 11: CTA */}
            <section className="py-32 bg-background flex flex-col items-center text-center">
                <Container>
                    <div className="max-w-3xl mx-auto space-y-10">
                        <h2 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight leading-tight">
                            {data.cta.headline}
                        </h2>
                        <div>
                            <Button
                                data-cal-link="mohitatneurix/stillwater-intro-chat"
                                data-cal-namespace="stillwater-intro-chat"
                                data-cal-config='{"layout":"month_view"}'
                            >
                                {data.cta.button}
                                <ArrowRight className="ml-3 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};
