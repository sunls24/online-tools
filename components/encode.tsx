"use client";
import React, { useRef, useState } from "react";
import { ArrowDown, ArrowSwitch, ArrowUp } from "@/components/svg";
import Textarea from "@/components/textarea";
import { Clipboard, ClipboardCheck, ClipboardX } from "lucide-react";

function Encode(props: {
  encode: (str: string) => string;
  decode: (str: string) => string;
}) {
  const upRef = useRef<HTMLTextAreaElement>(null);
  const downRef = useRef<HTMLTextAreaElement>(null);
  const toggleRef = useRef<HTMLInputElement>(null);
  const [isEncode, setIsEncode] = useState(true);
  const [copyStatus, setCopyStatus] = useState<boolean | null>(null);

  function encodeClick() {
    if (!upRef.current?.value) {
      return;
    }
    downRef.current!.value = props.encode(upRef.current.value);
    setIsEncode(true);
    setCopyStatus(null);
  }

  function decodeClick() {
    if (!downRef.current?.value) {
      return;
    }
    upRef.current!.value = props.decode(downRef.current.value);
    setIsEncode(false);
    setCopyStatus(null);
  }

  function switchClick() {
    if (!upRef.current || !downRef.current) {
      return;
    }
    const upText = upRef.current.value;
    upRef.current.value = downRef.current.value;
    downRef.current.value = upText;
  }

  function copyClick() {
    const content = isEncode ? downRef.current!.value : upRef.current!.value;
    if (!content) {
      return;
    }
    console.debug("clipboard:", content);
    navigator.clipboard
      .writeText(content)
      .then(() => setCopyStatus(true))
      .catch((e) => {
        setCopyStatus(false);
        console.error(e);
      });
  }

  function textAreaChange(up: boolean) {
    if (toggleRef.current!.checked) {
      up ? encodeClick() : decodeClick();
    }
  }

  function copyStatusIcon() {
    switch (copyStatus) {
      case null:
        return <Clipboard size={18} />;
      case true:
        return <ClipboardCheck size={18} className="text-success" />;
      case false:
        return <ClipboardX size={18} className="text-error" />;
    }
  }

  return (
    <>
      <Textarea ref={upRef} onChange={() => textAreaChange(true)} />
      <div className="flex items-center gap-2 sm:gap-4">
        <button className="btn-normal" onClick={encodeClick}>
          <ArrowDown />
          编码
        </button>
        <button className="btn-normal" onClick={decodeClick}>
          <ArrowUp />
          解码
        </button>
        <button
          className="btn btn-square h-12 w-10 sm:w-12"
          onClick={switchClick}
        >
          <ArrowSwitch className="h-[22px] w-[22px] rotate-90" />
        </button>
        <label className="label cursor-pointer pt-7">
          <span className="label-text pr-1.5 font-medium">实时</span>
          <input ref={toggleRef} type="checkbox" className="toggle toggle-sm" />
        </label>
      </div>
      <Textarea ref={downRef} onChange={() => textAreaChange(false)} />
      <div>
        <button className="btn btn-ghost btn-sm gap-1 px-1" onClick={copyClick}>
          {copyStatusIcon()}拷贝结果
        </button>
      </div>
    </>
  );
}

export default Encode;
