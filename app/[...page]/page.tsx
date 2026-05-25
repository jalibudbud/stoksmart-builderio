import { fetchOneEntry } from "@builder.io/sdk-react-nextjs";
import { RenderBuilderContent } from "@/components/builder";

const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY!;

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Page(props: PageProps) {
  const urlPath = "/" + (props.params?.page?.join("/") || "");

  const content = await fetchOneEntry({
    model: "page",
    apiKey,
    userAttributes: { urlPath },
  });

  return <RenderBuilderContent content={content} model="page" apiKey={apiKey} />;
}
