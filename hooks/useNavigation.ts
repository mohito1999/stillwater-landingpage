import { useNavigate, useLocation } from 'react-router-dom';

export const useNavigation = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const handleNavigation = (e: React.MouseEvent | React.TouchEvent, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            if (pathname !== '/') {
                // Navigate to home page first, then hash navigation will be handled by useEffect in App or Navbar
                navigate('/' + href);
            } else {
                // Already on home, just scroll
                const targetId = href.startsWith('#') ? href.slice(1) : href;
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    // Update URL hash without reload
                    window.history.pushState(null, '', href);
                }
            }
        } else {
            // Page switch
            e.preventDefault();
            const targetPath = href.startsWith('/') ? href : `/${href}`;
            navigate(targetPath);
            window.scrollTo(0, 0);
        }
    };

    return { handleNavigation };
};
