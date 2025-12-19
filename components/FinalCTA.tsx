import React from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { FINAL_CTA_COPY } from '../constants';
import { ArrowRight } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 bg-background flex flex-col items-center text-center" id="work-with-us">
      <Container>
        <div className="max-w-3xl mx-auto space-y-10">
          <h2 className="text-4xl sm:text-5xl font-semibold text-primary tracking-tight leading-tight">
            {FINAL_CTA_COPY.headline}
          </h2>

          <div>
            <Button
              data-cal-link="mohitatneurix/stillwater-intro-chat"
              data-cal-namespace="stillwater-intro-chat"
              data-cal-config='{"layout":"month_view"}'
            >
              {FINAL_CTA_COPY.cta}
              <ArrowRight className="ml-3 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};