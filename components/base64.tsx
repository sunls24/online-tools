"use client";
import React from "react";
import Encode from "@/components/encode";

function Base64() {
  return <Encode encode={btoa} decode={atob} />;
}

function atob(str: string): string {
  return Buffer.from(str, "base64").toString();
}

function btoa(str: string): string {
  return Buffer.from(str).toString("base64");
}

export default Base64;
