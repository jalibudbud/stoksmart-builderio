import { fetchOneEntry } from "@builder.io/sdk-react-nextjs";
import { RenderBuilderContent } from "@/components/builder";

const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY!;

export default async function Page() {
  const content = await fetchOneEntry({
    model: "page",
    apiKey,
    userAttributes: { urlPath: "/" },
  });

  if (!content) {
    return (
      <main className="home-main">
        <h1 className="home-title">Welcome to Builder.io</h1>
        <p className="home-description">
          Create a page in Builder.io with URL &quot;/&quot; to see your content here.
        </p>
      </main>
    );
  }

  return <RenderBuilderContent content={content} model="page" apiKey={apiKey} />;
}
