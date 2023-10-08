import clsx from 'clsx';
import React, { forwardRef } from 'react';

import styles from './TextArea.module.css';

import { Hint } from './Hint';
import { Label } from './Label';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
  hint?: string;
  label?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function Textarea(props, ref) {
    const { className, label, hasError, hint, ...rest } = props;

    const textareaClasses = clsx(
      styles.textarea,
      {
        [styles['textarea--no-error']]:
          !hasError,
        [styles['textarea--has-error']]:
          hasError,
      },
      className,
    );

    return (
      <div className={styles.container}>
        {label && <Label htmlFor={rest.id}>{label}</Label>}
        <textarea ref={ref} className={textareaClasses} {...rest} />
        {hint && <Hint hasError={hasError}>{hint}</Hint>}
      </div>
    );
  },
);

export default TextArea;
