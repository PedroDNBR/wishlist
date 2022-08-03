import { useEffect } from "react";

export function useFormErrors(errors, setError, enabled = true) {

  function handleErrors() {
    Object.keys(errors).map((key) => {
      setError(key, { type: 'custom', message: errors[key] });
    });
  }

  useEffect(() => {
    if (!errors || !enabled) return;
    handleErrors();
  }, [errors, enabled]);

  return { handleErrors };
}