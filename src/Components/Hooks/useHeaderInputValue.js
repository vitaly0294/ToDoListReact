import { useState } from "react";

export function useHeaderInputValue() {
  const [valueInput, setValueInput] = useState('');

  return { valueInput, setValueInput };
}