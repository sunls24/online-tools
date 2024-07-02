import React, { forwardRef } from "react";
import clsx from "clsx";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props: TextareaProps, ref) => (
    <textarea
      ref={ref}
      onChange={props.onChange}
      className={clsx(
        "textarea h-52 resize-none bg-base-200/80 leading-normal",
        props.className,
      )}
    />
  ),
);

Textarea.displayName = "Textarea";
export default Textarea;
