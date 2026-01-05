import React from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { LOGISTICS_COPY } from '../constants';
import { ArrowRight, CheckSquare, ShieldCheck, AlertTriangle } from 'lucide-react';
import { useNavigation } from '../hooks/useNavigation';
import { useNavigate } from 'react-router-dom';

export const LogisticsPage: React.FC = () => {
  const navigate = useNavigate();
  const { handleNavigation } = useNavigation();

  return (
    <div className="flex flex-col animate-fade-in">
      {/* SECTION 1: HERO */}
      <section className="relative w-full flex flex-col justify-center min-h-[80vh] py-24 overflow-hidden border-b border-stone-200 bg-background">
        {/* ... background elements ... */}
        <div className="absolute inset-0 z-0 bg-grid pointer-events-none opacity-60" />
        <div className="absolute top-[15%] left-[5%] w-24 h-24 border border-stone-200/60 pointer-events-none animate-drift-slow z-0" />
        <div className="absolute bottom-[20%] right-[10%] w-32 h-32 border border-stone-200/60 pointer-events-none animate-drift-medium z-0" />
        <div className="absolute top-[40%] right-[25%] w-16 h-16 border border-stone-200/40 pointer-events-none animate-drift-slow z-0" style={{ animationDelay: '2s' }} />
        <div className="hidden lg:block absolute top-0 bottom-0 left-[20%] w-px bg-stone-200/50 z-0 overflow-hidden">
          <div className="absolute left-0 w-full h-24 bg-accent-blue/5 animate-scan-slow" />
        </div>
        <div className="hidden lg:block absolute top-0 bottom-0 right-[20%] w-px bg-stone-200/50 z-0 overflow-hidden">
          <div className="absolute left-0 w-full h-16 bg-accent-blue/10 animate-scan-fast" style={{ animationDelay: '5s' }} />
        </div>
        <div className="absolute top-[35%] left-0 right-0 h-px bg-stone-200/50 z-0 pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-5xl">
            <div className="pl-0 md:pl-8 md:border-l-4 md:border-primary/10">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-primary mb-8 whitespace-pre-line">
                {LOGISTICS_COPY.hero.headline}
              </h1>
              <p className="text-xl sm:text-2xl text-secondary font-normal leading-relaxed max-w-3xl mb-10">
                {LOGISTICS_COPY.hero.subHeadline}
              </p>

              <div className="space-y-6">
                <p className="text-sm uppercase tracking-wide text-stone-500 font-medium">
                  {LOGISTICS_COPY.hero.supporting}
                </p>
                <div className="pt-2">
                  <Button
                    className="h-16 px-4 sm:px-10 text-sm sm:text-lg w-full sm:w-auto !justify-start sm:!justify-center whitespace-nowrap"
                    data-cal-link="mohitatneurix/stillwater-intro-chat"
                    data-cal-namespace="stillwater-intro-chat"
                    data-cal-config='{"layout":"month_view"}'
                  >
                    {LOGISTICS_COPY.hero.cta}
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: THE REALITY */}
      <section className="py-24 bg-stone-50 border-b border-stone-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-semibold text-primary tracking-tight">
                {LOGISTICS_COPY.reality.title}
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="bg-white border border-stone-200 p-8 sm:p-12 shadow-sm">
                <ul className="space-y-4 mb-8">
                  {LOGISTICS_COPY.reality.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <AlertTriangle className="w-5 h-5 text-stone-400 mt-1 flex-shrink-0" />
                      <span className="text-lg text-secondary font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xl text-primary font-semibold border-t border-stone-100 pt-6">
                  {LOGISTICS_COPY.reality.closing}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: WHY AI FAILS */}
      <section className="py-24 bg-background border-b border-stone-200">
        <Container>
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl font-semibold text-primary tracking-tight">
              {LOGISTICS_COPY.failure.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 border border-stone-200">
            {LOGISTICS_COPY.failure.points.map((point, idx) => (
              <div key={idx} className="bg-background p-8 md:p-10 hover:bg-stone-50 transition-colors">
                <h3 className="text-lg font-medium text-primary">
                  {point.title}
                </h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 4: WHAT WE OWN */}
      <section className="py-24 bg-background border-b border-stone-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-4">
              <h2 className="text-3xl font-semibold text-primary tracking-tight">
                {LOGISTICS_COPY.whatWeOwn.title}
              </h2>
              <p className="text-lg text-secondary">
                {LOGISTICS_COPY.whatWeOwn.intro}
              </p>
            </div>
            <div className="lg:col-span-8">
              {/* Grid of 4 Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {LOGISTICS_COPY.whatWeOwn.areas.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-6 border border-stone-200 bg-stone-50 hover:border-accent-blue transition-colors group">
                    <CheckSquare className="w-5 h-5 text-stone-400 group-hover:text-accent-blue transition-colors" />
                    <span className="text-base font-medium text-primary">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 5: EXAMPLE WORKFLOWS */}
      <section className="py-24 bg-stone-50 border-b border-stone-200">
        <Container>
          <h2 className="text-3xl font-semibold text-primary tracking-tight mb-16">
            Example workflows we manage
          </h2>
          <div className="flex flex-col gap-8">
            {LOGISTICS_COPY.workflows.map((workflow, idx) => (
              <div key={idx} className="bg-white border border-stone-200 p-8 sm:p-12 hover:border-accent-blue transition-colors duration-300 shadow-sm">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  <div className="lg:w-1/3">
                    <span className="text-sm font-mono text-accent-blue block mb-2">WORKFLOW {workflow.id}</span>
                    <h3 className="text-2xl font-bold text-primary leading-tight">
                      {workflow.title}
                    </h3>
                  </div>
                  <div className="lg:w-2/3 space-y-8">
                    <div>
                      <h4 className="text-sm font-semibold text-stone-400 uppercase tracking-wide mb-2">Problem</h4>
                      <p className="text-lg text-secondary">{workflow.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-stone-400 uppercase tracking-wide mb-2">What we build & run</h4>
                      <p className="text-lg text-secondary">{workflow.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-stone-400 uppercase tracking-wide mb-2">Outcome</h4>
                      <p className="text-lg text-primary font-medium">{workflow.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 5.5: FEATURED CASE STUDY (NEW) */}
      <section className="py-24 bg-primary text-stone-50 border-b border-stone-800">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-stone-500"></div>
                <span className="text-xs font-mono text-stone-400 uppercase tracking-widest">
                  {LOGISTICS_COPY.caseStudy.label}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6 text-white leading-tight">
                {LOGISTICS_COPY.caseStudy.headline}
              </h2>
              <p className="text-lg text-stone-400 leading-relaxed mb-8">
                {LOGISTICS_COPY.caseStudy.description}
              </p>
              <Button
                variant="outline"
                className="border-stone-600 text-stone-300 hover:bg-white hover:text-primary hover:border-white transition-all duration-300"
                onClick={() => navigate(LOGISTICS_COPY.caseStudy.link)}
              >
                {LOGISTICS_COPY.caseStudy.cta} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Stat Box */}
            <div className="order-1 lg:order-2">
              <div className="bg-stone-800/50 border border-stone-700 p-8 sm:p-12 relative overflow-hidden group hover:border-stone-500 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <ShieldCheck className="w-24 h-24 text-white" />
                </div>
                <p className="text-sm font-mono text-stone-500 mb-2 uppercase tracking-wide">
                  Key Outcome
                </p>
                <p className="text-5xl sm:text-6xl font-bold text-white mb-4 tracking-tighter">
                  {LOGISTICS_COPY.caseStudy.stat.split(' ')[0]}
                </p>
                <p className="text-xl text-stone-300 font-medium border-t border-stone-700 pt-4">
                  {LOGISTICS_COPY.caseStudy.stat.substring(LOGISTICS_COPY.caseStudy.stat.indexOf(' ') + 1)}
                </p>
                <div className="mt-8 pt-8 border-t border-stone-700/50 text-xs font-mono text-stone-500 leading-relaxed whitespace-pre-line">
                  {LOGISTICS_COPY.caseStudy.context}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 6: HOW IT STARTS */}
      <section className="py-24 bg-background border-b border-stone-200">
        <Container>
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-primary tracking-tight">
              {LOGISTICS_COPY.engagement.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {LOGISTICS_COPY.engagement.steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col">
                <div className="text-xs font-mono text-accent-blue mb-6 border-b border-stone-200 pb-2 flex justify-between">
                  <span>STEP</span>
                  <span>{step.number}</span>
                </div>
                <p className="text-xl font-medium text-primary">
                  {step.title}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-12 border-t border-stone-100">
            <p className="text-lg text-secondary">{LOGISTICS_COPY.engagement.closing}</p>
          </div>
        </Container>
      </section>

      {/* SECTION 7: CONTROL */}
      <section className="py-24 bg-primary text-stone-200 border-b border-stone-800">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
            <div className="space-y-6">
              <h2 className="text-lg font-mono text-stone-300 uppercase tracking-widest mb-6">
                {LOGISTICS_COPY.control.title}
              </h2>
              <div className="space-y-2">
                {LOGISTICS_COPY.control.points.map((point, idx) => (
                  <p key={idx} className="text-3xl sm:text-4xl font-medium text-white tracking-tight">
                    {point}
                  </p>
                ))}
              </div>
            </div>
            <div className="max-w-md border-l border-stone-500 pl-8 py-2">
              <p className="text-lg text-stone-300 leading-relaxed">
                {LOGISTICS_COPY.control.supporting}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 8: CTA */}
      <section className="py-32 bg-background flex flex-col items-center text-center">
        <Container>
          <div className="max-w-3xl mx-auto space-y-10">
            <h2 className="text-4xl sm:text-5xl font-semibold text-primary tracking-tight leading-tight">
              {LOGISTICS_COPY.cta.headline}
            </h2>
            <div>
              <Button
                data-cal-link="mohitatneurix/stillwater-intro-chat"
                data-cal-namespace="stillwater-intro-chat"
                data-cal-config='{"layout":"month_view"}'
              >
                {LOGISTICS_COPY.cta.button}
                <ArrowRight className="ml-3 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};