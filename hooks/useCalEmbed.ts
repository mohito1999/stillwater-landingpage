import { useEffect } from 'react';

declare global {
    interface Window {
        Cal: any;
    }
}

export const useCalEmbed = () => {
    useEffect(() => {
        (function (C: any, A: string, L: string) {
            let p = function (a: any, ar: any) { a.q.push(ar); };
            let d = C.document;
            C.Cal = C.Cal || function () {
                let cal = C.Cal;
                let ar = arguments;
                if (!cal.loaded) {
                    cal.ns = {};
                    cal.q = cal.q || [];
                    const s = d.createElement("script");
                    s.src = A;
                    s.async = true;
                    d.head.appendChild(s);
                    cal.loaded = true;
                }
                if (ar[0] === L) {
                    const api: any = function () { p(api, arguments); };
                    const namespace = ar[1];
                    api.q = api.q || [];
                    if (typeof namespace === "string") {
                        cal.ns[namespace] = cal.ns[namespace] || api;
                        p(cal.ns[namespace], ar);
                        p(cal, ["initNamespace", namespace]);
                    } else p(cal, ar);
                    return;
                }
                p(cal, ar);
            };
        })(window, "https://app.cal.com/embed/embed.js", "init");

        const initCal = () => {
            if (window.Cal) {
                window.Cal("init", "stillwater-intro-chat", { origin: "https://app.cal.com" });
                window.Cal.ns["stillwater-intro-chat"]("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
            }
        };

        // Small delay to ensure script structure is ready
        const timer = setTimeout(initCal, 0);
        return () => clearTimeout(timer);
    }, []);
};
