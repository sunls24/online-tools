interface ToolItem {
  name: string;
  image: string;
  route: string;
}

export const tools: readonly ToolItem[] = [
  {
    name: "Base64 编解码",
    image: "img/base64-encoder-decoder.svg",
    route: "base64",
  },
  {
    name: "URL 编解码",
    image: "img/url-encoder-decoder.svg",
    route: "url",
  },
];
