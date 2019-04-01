import { useState, useEffect } from "react";

export const useFetchImage = (url, likeCount, mehCount) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(j => j.json())
      .then(data => {
        console.log(JSON.stringify(data))
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, [likeCount, mehCount]);
  return { data, loading };
};

export const useDarkMode = () => {
  const [enabled, setEnabled] = useState(false);
  useEffect(
    () => {
      enabled
        ? document.body.classList.add("dark-mode")
        : document.body.classList.remove("dark-mode");
    },
    [enabled] // Only re-runs when 'enabled' changes
  );
  return [enabled, setEnabled]; // Return state and setter
};
