import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div
      className={clsx(
        'flex items-center gap-3 py-4 px-3 h-12 rounded bg-gray-800 gray-100 w-full focus-within:ring-2 ring-cyan-300'
      )}
    >
      {children}
    </div>
  );
}

TextInputRoot.displayName = 'TextInput.Root';

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon({ children }: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}

TextInputIcon.displayName = 'TextInput.Icon';

export function TextInputInput({ ...rest }: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 placeholder:text-gray-400 text-xs outline-none"
      {...rest}
    />
  );
}

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
