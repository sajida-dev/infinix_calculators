import Script from "next/script";

export default function JsonLd({
  data,
  id,
}: {
  data: Record<string, any> | Array<Record<string, any>>;
  id?: string;
}) {
  if (!data) return null;

  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}


