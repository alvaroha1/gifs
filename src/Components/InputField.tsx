import React from "react";
import { Input } from "../Styles/Input";

interface InputFieldProps {
  placeholder: string;
  handleInput: React.ChangeEventHandler<HTMLInputElement>;
  dataTestId?: string;
  onKeyDown?: () => void;
}

export default function InputField({
  placeholder,
  handleInput,
  dataTestId,
  onKeyDown,
}: InputFieldProps) {
  const handleKeyboardEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      if (onKeyDown) onKeyDown();
    }
  };

  return (
    <span>
      <Input
        onKeyDown={(e) => handleKeyboardEvent(e)}
        data-testid={dataTestId}
        type="text"
        placeholder={placeholder}
        onChange={handleInput}
      />
    </span>
  );
}
