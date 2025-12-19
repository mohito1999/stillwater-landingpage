import React from 'react';
import { Container } from './ui/Container';
import { WORK_COPY } from '../constants';

export const HowWeWork: React.FC = () => {
  return (
    <section className="py-24 bg-background border-b border-stone-200" id="how-we-work">
      <Container>
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-primary tracking-tight">
            {WORK_COPY.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {WORK_COPY.steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col group">
              {/* Step Number */}
              <div className="text-xs font-mono text-accent-blue mb-6 border-b border-stone-200 pb-2 flex justify-between">
                <span>STEP</span>
                <span>{step.number}</span>
              </div>
              
              {/* Vertical line visual */}
              <div className="absolute left-0 top-12 bottom-0 w-px bg-stone-200 md:hidden" />

              <h3 className="text-xl font-medium text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-secondary leading-relaxed max-w-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};