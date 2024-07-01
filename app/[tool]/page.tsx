import React, { Suspense } from "react";
import { tools } from "@/lib/tools";
import { Metadata } from "next";
import { Title } from "@/components/svg";
import Loading from "@/components/loading";

export function generateMetadata({
  params,
}: {
  params: { tool: string };
}): Metadata {
  const tool = tools.find((obj) => obj.route === params.tool);
  if (!tool) {
    return {
      title: "你来到了无人区",
    };
  }
  return {
    title: `${tool.name}`,
  };
}

function Page({ params }: { params: { tool: string } }) {
  const tool = tools.find((obj) => obj.route === params.tool);
  const ToolComponent = React.lazy(
    () => import(`@/components/${tool ? params.tool : "empty"}`),
  );
  return (
    <main className="card-md flex flex-col gap-4 px-5 py-4">
      {tool && (
        <h2 className="font-medium">
          {<Title className="relative bottom-0.5 mr-1 inline-block h-5 w-5" />}
          {tool.name}
        </h2>
      )}
      <Suspense fallback={<Loading />}>
        <ToolComponent />
      </Suspense>
    </main>
  );
}

export default Page;
