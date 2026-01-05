import React from 'react';
import { Container } from './ui/Container';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { CASE_STUDIES_COPY } from '../constants';
import { useNavigate } from 'react-router-dom';

export const Engagements: React.FC = () => {
  const navigate = useNavigate();

  // Filter for the specific featured case studies
  const featuredCases = CASE_STUDIES_COPY.cases.filter(c =>
    c.id === 'logistics-01' || c.id === 'healthcare-prior-auth'
  );

  return (
    <section className="py-24 bg-background border-b border-stone-200" id="case-studies">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <h2 className="text-3xl font-semibold text-primary tracking-tight">
            {CASE_STUDIES_COPY.hero.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredCases.map((caseStudy) => (
            <div key={caseStudy.id} className="group bg-stone-50 border border-stone-200 p-8 min-h-[320px] flex flex-col justify-between hover:border-accent-blue transition-colors">
              <div>
                <div className="w-12 h-1 bg-stone-300 group-hover:bg-accent-blue transition-colors mb-6" />
                <p className="text-sm font-semibold text-stone-400 uppercase mb-2">{caseStudy.industry}</p>
                <h3 className="text-2xl font-medium text-primary mb-3">{caseStudy.title}</h3>
                <p className="text-stone-500 leading-relaxed">
                  {caseStudy.summary}
                </p>
              </div>

              <div className="pt-8">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto text-sm py-3 px-6"
                  onClick={() => navigate(caseStudy.link)}
                >
                  Read case study
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};