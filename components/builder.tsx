"use client";
import { ComponentProps } from "react";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { BuilderContent } from "@builder.io/sdk";
import DefaultErrorPage from "next/error";
import "../builder-registry";

type BuilderPageProps = ComponentProps<typeof BuilderComponent>;

interface BuilderPageProperties
  extends Omit<BuilderPageProps, "model"> {
  model: string;
}

export function RenderBuilderContent(props: BuilderPageProperties) {
  const isPreviewing = useIsPreviewing();
  if (props.content || isPreviewing) {
    return <BuilderComponent {...props} model={props.model} />;
  }
  return <DefaultErrorPage statusCode={404} />;
}
