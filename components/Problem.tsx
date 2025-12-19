import React from 'react';
import { Container } from './ui/Container';
import { PROBLEM_COPY } from '../constants';
import { AlertTriangle, ServerCrash, Users, ShieldAlert } from 'lucide-react';

const icons = [AlertTriangle, Users, ServerCrash, ShieldAlert];

export const Problem: React.FC = () => {
  return (
    <section className="py-24 bg-surface border-b border-stone-200" id="what-we-do">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Section Title */}
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-semibold text-primary tracking-tight sticky top-24">
              {PROBLEM_COPY.title}
            </h2>
          </div>

          {/* Grid of Problems */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 border border-stone-200">
              {PROBLEM_COPY.points.map((point, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <div key={index} className="bg-background p-8 md:p-10 flex flex-col gap-4">
                    <Icon className="w-6 h-6 text-accent-blue" />
                    <div>
                      <h3 className="text-lg font-medium text-primary mb-2">
                        {point.title}
                      </h3>
                      <p className="text-secondary leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};