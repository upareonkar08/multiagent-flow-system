import { useState, useEffect } from 'react';

const BASE_VISITS_KEY = 'orchestra_visitor_count_reset_v2';
const SESSION_VISITED_KEY = 'orchestra_session_visited_v2';

export function useVisitorCounter() {
  const [visitorCount, setVisitorCount] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let count = 0;
    const stored = localStorage.getItem(BASE_VISITS_KEY);
    if (stored) {
      count = parseInt(stored, 10);
    }

    const hasVisitedThisSession = sessionStorage.getItem(SESSION_VISITED_KEY);
    if (!hasVisitedThisSession) {
      count += 1;
      localStorage.setItem(BASE_VISITS_KEY, count.toString());
      sessionStorage.setItem(SESSION_VISITED_KEY, 'true');
    }

    setVisitorCount(count || 1);
    setIsLoading(false);

    // Sync with fresh clean global counter endpoint reset at 0
    const syncGlobalCounter = async () => {
      try {
        const res = await fetch('https://api.counterapi.dev/v1/orchestra-ai-multiagent-reset-v2/visits/up');
        if (res.ok) {
          const data = await res.json();
          if (data && typeof data.count === 'number') {
            setVisitorCount(data.count);
            localStorage.setItem(BASE_VISITS_KEY, data.count.toString());
          }
        }
      } catch (e) {
        // Fallback silently to local count
      }
    };

    syncGlobalCounter();
  }, []);

  return { visitorCount, isLoading };
}
