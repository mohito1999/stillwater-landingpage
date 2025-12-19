import React, { useState } from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { CASE_STUDIES_COPY } from '../constants';
import { ArrowRight, Filter } from 'lucide-react';
import { useNavigation } from '../hooks/useNavigation';

export const CaseStudiesIndex: React.FC = () => {
    const { handleNavigation } = useNavigation();
    const [filter, setFilter] = useState<string>('All');

    const uniqueIndustries = Array.from(new Set(CASE_STUDIES_COPY.cases.map(c => c.industry)));
    const filters = ['All', ...uniqueIndustries];

    const filteredCases = filter === 'All'
        ? CASE_STUDIES_COPY.cases
        : CASE_STUDIES_COPY.cases.filter(c => c.industry === filter);

    return (
        <div className="flex flex-col animate-fade-in min-h-screen bg-background">
            {/* SECTION 1: HERO */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-stone-200">
                <Container>
                    <div className="max-w-4xl">
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-primary mb-6 whitespace-pre-line">
                            {CASE_STUDIES_COPY.hero.headline}
                        </h1>
                        <p className="text-xl sm:text-2xl text-secondary font-normal leading-relaxed max-w-2xl mb-2">
                            {CASE_STUDIES_COPY.hero.subHeadline}
                        </p>
                        <p className="text-sm uppercase tracking-wide text-stone-400 font-medium">
                            {CASE_STUDIES_COPY.hero.supporting}
                        </p>
                    </div>
                </Container>
            </section>

            {/* SECTION 2: FILTER & GRID */}
            <section className="py-12 md:py-24 bg-stone-50 border-b border-stone-200 min-h-[50vh]">
                <Container>
                    {/* Filters */}
                    <div className="mb-12 flex flex-wrap gap-4 items-center">
                        <span className="text-xs font-mono text-stone-400 uppercase tracking-widest mr-2 flex items-center gap-2">
                            <Filter className="w-4 h-4" /> Filter by:
                        </span>
                        {filters.map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 border ${filter === f
                                    ? 'bg-primary text-white border-primary'
                                    : 'bg-white text-secondary border-stone-200 hover:border-stone-400'
                                    }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
                        {filteredCases.map((study) => (
                            <div
                                key={study.id}
                                className="group bg-white border border-stone-200 p-8 sm:p-10 flex flex-col justify-between hover:border-accent-blue transition-colors duration-300 shadow-sm min-h-[400px]"
                            >
                                <div>
                                    <div className="mb-6">
                                        <span className="text-xs font-mono text-stone-400 uppercase tracking-widest">
                                            {study.industry}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-semibold text-primary mb-6 leading-tight group-hover:text-accent-blue transition-colors">
                                        {study.title}
                                    </h3>
                                    <p className="text-lg text-secondary leading-relaxed mb-8">
                                        {study.summary}
                                    </p>
                                </div>

                                <div className="space-y-8">
                                    {study.outcome && (
                                        <div className="border-l-2 border-accent-blue/20 pl-4">
                                            <p className="text-stone-500 text-sm font-medium uppercase tracking-wide mb-1">Outcome</p>
                                            <p className="text-primary font-medium text-lg">{study.outcome}</p>
                                        </div>
                                    )}
                                    <div className="flex justify-end">
                                        <button
                                            onClick={(e) => handleNavigation(e, study.link)}
                                            className="text-sm font-semibold text-primary group-hover:text-accent-blue transition-colors flex items-center gap-2"
                                        >
                                            Read case study <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {filteredCases.length === 0 && (
                        <div className="py-24 text-center">
                            <p className="text-secondary text-lg">No case studies found for this category.</p>
                        </div>
                    )}
                </Container>
            </section>


            {/* SECTION 5: CTA */}
            <section className="py-32 bg-background flex flex-col items-center text-center">
                <Container>
                    <div className="max-w-3xl mx-auto space-y-10">
                        <h2 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight leading-tight">
                            {CASE_STUDIES_COPY.cta.headline}
                        </h2>
                        <div>
                            <Button
                                data-cal-link="mohitatneurix/stillwater-intro-chat"
                                data-cal-namespace="stillwater-intro-chat"
                                data-cal-config='{"layout":"month_view"}'
                            >
                                {CASE_STUDIES_COPY.cta.button}
                                <ArrowRight className="ml-3 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};
