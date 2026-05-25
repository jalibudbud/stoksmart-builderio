"use client";
import { Content, type BuilderContent } from "@builder.io/sdk-react-nextjs";
import { customComponents } from "@/builder-registry";

interface BuilderPageProps {
  content?: BuilderContent | null;
  model: string;
  apiKey: string;
}

export function RenderBuilderContent({ content, model, apiKey }: BuilderPageProps) {
  return (
    <Content
      content={content || undefined}
      apiKey={apiKey}
      model={model}
      customComponents={customComponents}
    />
  );
}
