import React from 'react';
import { Container } from './ui/Container';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

export const Engagements: React.FC = () => {
  return (
    <section className="py-24 bg-background border-b border-stone-200" id="case-studies">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <h2 className="text-3xl font-semibold text-primary tracking-tight">
            Selected engagements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="group bg-stone-50 border border-stone-200 p-8 min-h-[320px] flex flex-col justify-between hover:border-accent-blue transition-colors">
            <div>
              <div className="w-12 h-1 bg-stone-300 group-hover:bg-accent-blue transition-colors mb-6" />
              <p className="text-sm font-semibold text-stone-400 uppercase mb-2">Logistics</p>
              <h3 className="text-2xl font-medium text-primary mb-3">Global Freight Forwarder</h3>
              <p className="text-stone-500 leading-relaxed">
                Automated customs declaration workflow involving multi-modal document processing and error correction.
              </p>
            </div>

            <div className="pt-8">
              <Button variant="outline" className="w-full sm:w-auto text-sm py-3 px-6">
                Read case study
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-stone-50 border border-stone-200 p-8 min-h-[320px] flex flex-col justify-between hover:border-accent-blue transition-colors">
            <div>
              <div className="w-12 h-1 bg-stone-300 group-hover:bg-accent-blue transition-colors mb-6" />
              <p className="text-sm font-semibold text-stone-400 uppercase mb-2">Healthcare</p>
              <h3 className="text-2xl font-medium text-primary mb-3">Regional Health System</h3>
              <p className="text-stone-500 leading-relaxed">
                End-to-end denial management and rework automation for high-volume claims processing.
              </p>
            </div>

            <div className="pt-8">
              <Button variant="outline" className="w-full sm:w-auto text-sm py-3 px-6">
                Read case study
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};