import React from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { HERO_COPY } from '../constants';
import { ArrowRight } from 'lucide-react';
import { useNavigation } from '../hooks/useNavigation';

export const Hero: React.FC = () => {
  const { handleNavigation } = useNavigation();

  return (
    <section className="relative w-full flex flex-col justify-center min-h-[80vh] py-24 overflow-hidden border-b border-stone-200 bg-background">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 bg-grid pointer-events-none opacity-60" />

      {/* Abstract Background Shapes (Floating Modules) */}
      <div className="absolute top-[15%] left-[5%] w-24 h-24 border border-stone-200/60 pointer-events-none animate-drift-slow z-0" />
      <div className="absolute bottom-[20%] right-[10%] w-32 h-32 border border-stone-200/60 pointer-events-none animate-drift-medium z-0" />
      <div className="absolute top-[40%] right-[25%] w-16 h-16 border border-stone-200/40 pointer-events-none animate-drift-slow z-0" style={{ animationDelay: '2s' }} />

      {/* Operational Vertical Line 1 (Left) */}
      <div className="hidden lg:block absolute top-0 bottom-0 left-[20%] w-px bg-stone-200/50 z-0 overflow-hidden">
        {/* Moving data block */}
        <div className="absolute left-0 w-full h-24 bg-accent-blue/5 animate-scan-slow" />
      </div>

      {/* Operational Vertical Line 2 (Right) */}
      <div className="hidden lg:block absolute top-0 bottom-0 right-[20%] w-px bg-stone-200/50 z-0 overflow-hidden">
        {/* Moving data block */}
        <div className="absolute left-0 w-full h-16 bg-accent-blue/10 animate-scan-fast" style={{ animationDelay: '5s' }} />
      </div>

      {/* Horizontal Line Intersection */}
      <div className="absolute top-[35%] left-0 right-0 h-px bg-stone-200/50 z-0 pointer-events-none" />

      <Container className="relative z-10">
        {/* Amped up hero with left border accent */}
        <div className="max-w-5xl">
          <div className="pl-0 md:pl-8 md:border-l-4 md:border-primary/10">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-primary mb-8 whitespace-pre-line">
              {HERO_COPY.headline}
            </h1>
            <p className="text-xl sm:text-2xl text-secondary font-normal leading-relaxed max-w-3xl mb-10">
              {HERO_COPY.subHeadline}
            </p>

            <div className="space-y-6">
              <p className="text-sm uppercase tracking-wide text-stone-500 font-medium">
                {HERO_COPY.supporting}
              </p>
              <div className="pt-2">
                <Button
                  className="h-16 px-4 sm:px-10 text-sm sm:text-lg w-full sm:w-auto !justify-start sm:!justify-center whitespace-nowrap"
                  data-cal-link="mohitatneurix/stillwater-intro-chat"
                  data-cal-namespace="stillwater-intro-chat"
                  data-cal-config='{"layout":"month_view"}'
                >
                  {HERO_COPY.cta}
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};