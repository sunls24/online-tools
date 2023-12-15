"use client";
import React from "react";
import Encode from "@/app/components/encode";

function Url() {
  return <Encode encode={encodeUrl} decode={decodeUrl} />;
}

function encodeUrl(str: string): string {
  return encodeURI(str);
}

function decodeUrl(str: string): string {
  return decodeURI(str);
}

export default Url;
