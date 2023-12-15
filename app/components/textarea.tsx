import React from "react";
import clsx from "clsx";

function Textarea(props: {
  ref2: React.RefObject<HTMLTextAreaElement>;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}) {
  return (
    <textarea
      className={clsx(
        "textarea h-52 resize-none bg-base-200/80 leading-normal",
        props.className,
      )}
      ref={props.ref2}
      onChange={props.onChange}
    />
  );
}

export default Textarea;
