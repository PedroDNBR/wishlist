import { useEffect } from "react";
import { FieldValues, UseFormSetError } from "react-hook-form";

export interface UseFormErrorsData {
  errors: Record<string, string> | null | undefined;
  enabled?: boolean;
  setError: UseFormSetError<FieldValues>;
}

export function useFormErrors({errors, setError, enabled = true} : UseFormErrorsData) {

  function handleErrors(): void {
    if(!errors) return;
    Object.keys(errors).map((key: string) => {
      setError(key, { type: 'custom', message: errors[key] });
    });
  }

  useEffect(() => {
    if (!errors || !enabled) return;
    handleErrors();
  }, [errors, enabled]);

  return { handleErrors };
}