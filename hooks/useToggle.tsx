import { useState } from "react";

export const useToggle: (
  defaultValue: boolean
) => [boolean, (value?: boolean) => void] = (defaultValue: boolean) => {
  const [state, setState] = useState<boolean>(defaultValue);

  function toggleState(value?: boolean) {
    setState((currentValue) =>
      typeof value === "boolean" ? value : !currentValue
    );
  }

  return [state, toggleState];
};

export default useToggle;
