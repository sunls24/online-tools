"use client";
import React from "react";
import Encode from "@/components/encode";

function Url() {
  return <Encode encode={encodeUrl} decode={decodeUrl} />;
}

function encodeUrl(str: string): string {
  return encodeURIComponent(str);
}

function decodeUrl(str: string): string {
  return decodeURIComponent(str);
}

export default Url;
