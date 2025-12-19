import React from 'react';
import { Container } from './ui/Container';
import { Logo } from './Logo';
import { COMPANY_NAME, FOOTER_COPY } from '../constants';
import { useNavigation } from '../hooks/useNavigation';

export const Footer: React.FC = () => {
  const { handleNavigation } = useNavigation();

  return (
    <footer className="w-full bg-stone-100 border-t border-stone-200 py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

          {/* Company & Positioning */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <Logo className="w-6 h-6 text-primary" />
              <h2 className="text-lg font-bold tracking-tight text-primary uppercase">
                {COMPANY_NAME}
              </h2>
            </div>
            <p className="text-base text-secondary max-w-sm leading-relaxed">
              {FOOTER_COPY.positioning}
            </p>
            <div className="pt-4 text-xs text-stone-400">
              © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
            </div>
          </div>

          {/* Links Column */}
          <div className="md:col-start-4 md:col-span-1 flex flex-col gap-4">
            <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">
              Menu
            </span>
            {FOOTER_COPY.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavigation(e, link.href)}
                className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors w-fit cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

        </div>
      </Container>
    </footer>
  );
};