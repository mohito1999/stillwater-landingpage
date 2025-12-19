import React from 'react';
import { Container } from './ui/Container';
import { SOLUTION_COPY } from '../constants';
import { CheckSquare } from 'lucide-react';

export const Solution: React.FC = () => {
  return (
    <section className="py-24 bg-background border-b border-stone-200">
      <Container>
        <div className="flex flex-col gap-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-primary tracking-tight mb-8">
              {SOLUTION_COPY.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Core Idea - Larger Text */}
            <div className="space-y-6">
              {SOLUTION_COPY.core.map((item, idx) => (
                <p key={idx} className={`text-2xl sm:text-3xl leading-tight ${idx === 2 ? 'text-accent-blue font-medium' : 'text-stone-400'}`}>
                  {item}
                </p>
              ))}
            </div>

            {/* Supporting Points - Detailed List */}
            <div className="bg-stone-50 border border-stone-200 p-8 sm:p-12">
              <ul className="space-y-6">
                {SOLUTION_COPY.supporting.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckSquare className="w-5 h-5 text-accent-blue mt-1 flex-shrink-0" />
                    <span className="text-lg text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};