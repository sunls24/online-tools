"use client";
import React, { useRef, useState } from "react";
import { Timer } from "lucide-react";
import { crontab, crontabAI } from "@/app/server";
import { readStreamableValue } from "ai/rsc";

function Crontab() {
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [list, setList] = useState<string[]>([]);
  const [err, setErr] = useState("");

  async function onClick() {
    if (!inputRef.current?.value) {
      return;
    }
    try {
      const ret = await crontab(inputRef.current.value);
      if (ret.error) {
        throw ret.error;
      }
      err && setErr("");
      setList(ret);
    } catch (err: any) {
      list.length && setList([]);
      setErr(err.message ?? err);
    }
  }

  async function onClickAI() {
    if (!inputRef.current?.value) {
      return;
    }
    err && setErr("");
    list.length && setList([]);
    setIsLoading(true);
    try {
      const { data, error } = await crontabAI(inputRef.current.value);
      if (error) {
        setErr(error);
        return;
      }
      let ret = "";
      for await (const delta of readStreamableValue(data!)) {
        ret += delta;
        inputRef.current.value = ret;
      }
      await onClick();
    } catch (err: any) {
      setErr(err.message ?? err);
    } finally {
      setIsLoading(false);
    }
  }

  async function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Enter" || e.nativeEvent.isComposing) {
      return;
    }
    e.preventDefault();
    if (isLoading) {
      return;
    }
    await onClick();
  }

  return (
    <>
      <div className="flex w-full gap-2 sm:gap-4">
        <label className="input input-bordered flex grow items-center gap-2 px-3">
          <Timer className="opacity-70" />
          <input
            ref={inputRef}
            className="grow"
            placeholder={`Crontab 或 "每两小时执行一次"`}
            onKeyDown={onKeyDown}
            disabled={isLoading}
          />
        </label>
        {isLoading ? (
          <span className="loading loading-infinity loading-lg mx-3" />
        ) : (
          <button className="btn-normal" onClick={onClickAI}>
            问问 AI
          </button>
        )}
      </div>
      <button className="btn-normal" onClick={onClick} disabled={isLoading}>
        查看执行时间
      </button>
      {list.length !== 0 && (
        <div className="flex flex-col gap-2 rounded-md bg-base-200 p-3 font-medium">
          <span>接下来 7 次的执行时间：</span>
          {list.map((v, i) => (
            <div className="rounded-md bg-base-300 p-2" key={i}>
              {i + 1} - {v}
            </div>
          ))}
        </div>
      )}
      {err && (
        <div className="rounded-md bg-warning/50 p-3 text-warning-content">
          {err}
        </div>
      )}
      <pre className="shrink-0 overflow-x-auto rounded-md bg-base-200 p-3">
        {`*  *  *  *  *
|  |  |  |  |
|  |  |  |  +----- day of week (0 - 7) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
|  |  |  +-------- month (1 - 12) OR jan,feb,mar,apr ...
|  |  +----------- day of month (1 - 31)
|  +-------------- hour (0 - 23)
+----------------- minute (0 - 59)`}
      </pre>
    </>
  );
}

export default Crontab;
