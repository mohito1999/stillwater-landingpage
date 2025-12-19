import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from './ui/Container';
import { COMPANY_NAME, NAV_ITEMS } from '../constants';
import { ChevronDown } from 'lucide-react';
import { useNavigation } from '../hooks/useNavigation';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const { pathname, hash } = useLocation();
  const { handleNavigation } = useNavigation();


  return (
    <nav className="w-full border-b border-stone-200 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-6 md:py-8 gap-4 md:gap-0">
          {/* Logo / Company Name */}
          <div className="flex-shrink-0 cursor-pointer flex items-center gap-1.5" onClick={(e) => handleNavigation(e, '#')}>
            <Logo className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold tracking-tight text-primary uppercase select-none">
              {COMPANY_NAME}
            </span>
          </div>

          {/* Navigation Items */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 lg:gap-12">
            {NAV_ITEMS.map((item) => {
              if (item.children) {
                return (
                  <div key={item.label} className="relative group">
                    <button className="flex items-center gap-1 text-sm font-medium text-secondary hover:text-accent-blue transition-colors focus:outline-none py-1">
                      {item.label}
                      <ChevronDown className="w-3 h-3 pt-0.5" />
                    </button>
                    {/* Dropdown Menu */}
                    <div className="hidden group-hover:block absolute left-0 top-full pt-1 w-56 z-50">
                      <div className="bg-white border border-stone-200 shadow-lg p-2 flex flex-col gap-1">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            onClick={(e) => handleNavigation(e, child.href)}
                            className="block px-4 py-2 text-sm text-secondary hover:text-accent-blue hover:bg-stone-50 transition-colors cursor-pointer"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              const isWorkWithUs = item.href === '#work-with-us';

              return (
                <a
                  key={item.label}
                  href={isWorkWithUs ? undefined : item.href} // prevent navigation for work-with-us
                  onClick={(e) => {
                    if (!isWorkWithUs) handleNavigation(e, item.href);
                    // Cal.com handles the click for work-with-us via data attributes
                  }}
                  data-cal-link={isWorkWithUs ? "mohitatneurix/stillwater-intro-chat" : undefined}
                  data-cal-namespace={isWorkWithUs ? "stillwater-intro-chat" : undefined}
                  data-cal-config={isWorkWithUs ? '{"layout":"month_view"}' : undefined}
                  className={isWorkWithUs
                    ? "px-6 py-2.5 bg-accent-blue text-white text-sm font-semibold hover:bg-accent-blue-hover transition-all cursor-pointer"
                    : `text-sm font-medium transition-colors relative group py-1 cursor-pointer ${pathname === '/' && hash === item.href ? 'text-accent-blue' : 'text-secondary hover:text-accent-blue'}`
                  }
                >
                  {item.label}
                  {!isWorkWithUs && (
                    <span className={`absolute bottom-0 left-0 h-px bg-accent-blue transition-all duration-300 ${pathname === '/' && hash === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                      }`} />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </nav>
  );
};