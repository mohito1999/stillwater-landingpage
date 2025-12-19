import React from 'react';
import { Container } from './ui/Container';
import { SOVEREIGNTY_COPY } from '../constants';

export const Sovereignty: React.FC = () => {
  return (
    <section className="py-24 bg-primary text-stone-200 border-b border-stone-800">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">

          <div className="space-y-2">
            <h2 className="text-lg font-mono text-stone-300 uppercase tracking-widest mb-6">
              {SOVEREIGNTY_COPY.title}
            </h2>
            <div className="space-y-4">
              {SOVEREIGNTY_COPY.points.map((point, idx) => (
                <p key={idx} className="text-3xl sm:text-4xl font-medium text-white tracking-tight">
                  {point}
                </p>
              ))}
            </div>
          </div>

          <div className="max-w-md border-l border-stone-500 pl-8 py-2">
            <p className="text-lg text-stone-300 leading-relaxed">
              {SOVEREIGNTY_COPY.supporting}
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
};