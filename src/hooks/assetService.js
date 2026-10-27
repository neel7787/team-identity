import {useEffect, useState} from 'react';

export function useSymbols (url = '/symbols.json') {
  const [data, setData] = useState (null);
  const [loading, setLoading] = useState (true);
  const [error, setError] = useState (null);

  useEffect (
    () => {
      const controller = new AbortController ();

      async function load () {
        try {
          const res = await fetch (url, {signal: controller.signal});
          if (!res.ok) throw new Error (`Http ${res.status}`);
          setData (await res.json ());
        } catch (error) {
          if (error.name !== 'AbortError') setError (error);
        } finally {
          if (!controller.signal.aborted) setLoading (false);
        }
      }

      load ();
      return () => controller.abort ();
    },
    [url]
  );

  return {data, loading, error};
}
