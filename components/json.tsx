"use client";
import React, { useRef, useState } from "react";
import JsonView from "react18-json-view";
import "react18-json-view/src/style.css";
import Textarea from "@/components/textarea";
import {
  Braces,
  FoldVertical,
  ListX,
  Package,
  UnfoldVertical,
} from "lucide-react";

function Json() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [collapsed, setCollapsed] = useState(true);
  const [jsonObj, setJsonObj] = useState<any>();
  const [err, setErr] = useState<string>();

  function onChange() {
    err && setErr(undefined);
    if (!textAreaRef.current?.value) {
      jsonObj && setJsonObj(undefined);
      return;
    }
    const jsonStr = textAreaRef.current.value;
    try {
      setJsonObj(JSON.parse(jsonStr));
    } catch (err: any) {
      setErr(err.message ?? err);
    }
  }

  function onCollapsed() {
    setCollapsed(!collapsed);
  }

  function onFormat() {
    if (!textAreaRef.current?.value || !jsonObj) {
      return;
    }

    textAreaRef.current.value = JSON.stringify(jsonObj, null, 2);
    onChange();
  }

  function onCompress() {
    if (!textAreaRef.current?.value || !jsonObj) {
      return;
    }

    textAreaRef.current.value = JSON.stringify(JSON.stringify(jsonObj));
    onChange();
  }

  function onUnEscape() {
    if (!textAreaRef.current?.value) {
      return;
    }
    textAreaRef.current.value = textAreaRef.current.value
      .replace(/\\"/g, '"')
      .replace(/^"|"$/g, "");
    onChange();
  }

  return (
    <>
      <Textarea ref={textAreaRef} onChange={onChange} className="!h-44" />
      <div className="flex flex-wrap items-end gap-2 sm:gap-4">
        <button className="btn-normal" onClick={onFormat}>
          <Braces size={20} />
          格式化
        </button>
        <button className="btn-normal" onClick={onCompress}>
          <Package size={20} />
          压缩并转义
        </button>
        <button className="btn-normal" onClick={onUnEscape}>
          <ListX size={20} />
          去除转义
        </button>
        <button className="btn btn-square" onClick={onCollapsed}>
          {collapsed ? (
            <UnfoldVertical strokeWidth={1.8} />
          ) : (
            <FoldVertical strokeWidth={1.8} />
          )}
        </button>
      </div>
      {(jsonObj || err) && (
        <JsonView
          collapsed={collapsed && 1}
          displaySize="collapsed"
          src={err ?? jsonObj}
          theme={err ? "vscode" : "atom"}
          className="flex-1 overflow-auto rounded-md bg-base-200/80 p-4"
        />
      )}
    </>
  );
}

export default Json;
