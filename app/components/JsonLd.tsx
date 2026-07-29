export default function JsonLd({
  data,
  id,
}: {
  data: Record<string, any> | Array<Record<string, any>>;
  id?: string;
}) {
  if (!data) return null;

  return (
    <script
      id={id}
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

