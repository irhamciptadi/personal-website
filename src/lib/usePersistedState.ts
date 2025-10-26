"use client";
import { useEffect, useState } from "react";

export default function usePersistedState<T>(key: string, initial: T) {
  const [state, setState] = useState<T>(() => {
    if (typeof window === "undefined") return initial;
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [key, state]);

  return [state, setState] as const;
}
