import { useEffect, useRef, useState } from "react";

type ReturnType<Type> = [Type, (arg0: Type) => void];

const useLocalStorageState = <Type>(
  key: string,
  defaultValue: Type
): ReturnType<Type> => {
  const [state, setState] = useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      return JSON.parse(valueInLocalStorage) as Type;
    }
    return defaultValue;
  });

  const prevKeyRef = useRef(key);

  useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorageState;
