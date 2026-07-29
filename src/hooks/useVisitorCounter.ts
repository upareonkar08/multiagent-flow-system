import { useState, useEffect } from 'react';

const BASE_VISITS_KEY = 'orchestra_visitor_count';
const SESSION_VISITED_KEY = 'orchestra_session_visited';

export function useVisitorCounter() {
  const [visitorCount, setVisitorCount] = useState<number>(1482);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let count = 1482;
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

    setVisitorCount(count);
    setIsLoading(false);

    // Try fetching external API for global counter sync if available
    const syncGlobalCounter = async () => {
      try {
        const res = await fetch('https://api.counterapi.dev/v1/orchestra-ai-upareonkar08/visits/up');
        if (res.ok) {
          const data = await res.json();
          if (data && typeof data.count === 'number' && data.count > 0) {
            const remoteCount = 1482 + data.count;
            setVisitorCount(remoteCount);
            localStorage.setItem(BASE_VISITS_KEY, remoteCount.toString());
          }
        }
      } catch (e) {
        // Fallback silently to stored count
      }
    };

    syncGlobalCounter();
  }, []);

  return { visitorCount, isLoading };
}
