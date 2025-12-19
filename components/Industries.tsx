import React from 'react';
import { Container } from './ui/Container';
import { INDUSTRIES_COPY } from '../constants';
import { Ship, Stethoscope } from 'lucide-react';

export const Industries: React.FC = () => {
  return (
    <section className="py-24 bg-stone-50 border-b border-stone-200" id="logistics">
      <Container>
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-primary tracking-tight">
            {INDUSTRIES_COPY.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logistics Card */}
          <div className="bg-white border border-stone-200 p-8 sm:p-12 hover:border-accent-blue transition-colors duration-300">
            <Ship className="w-8 h-8 text-accent-blue mb-8" strokeWidth={1.5} />
            <h3 className="text-2xl font-medium text-primary mb-6">
              {INDUSTRIES_COPY.logistics.title}
            </h3>
            <ul className="space-y-3">
              {INDUSTRIES_COPY.logistics.items.map((item, idx) => (
                <li key={idx} className="text-secondary border-b border-stone-100 pb-3 last:border-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Healthcare Card */}
          <div className="bg-white border border-stone-200 p-8 sm:p-12 hover:border-accent-blue transition-colors duration-300" id="healthcare">
            <Stethoscope className="w-8 h-8 text-accent-blue mb-8" strokeWidth={1.5} />
            <h3 className="text-2xl font-medium text-primary mb-6">
              {INDUSTRIES_COPY.healthcare.title}
            </h3>
            <ul className="space-y-3">
              {INDUSTRIES_COPY.healthcare.items.map((item, idx) => (
                <li key={idx} className="text-secondary border-b border-stone-100 pb-3 last:border-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};