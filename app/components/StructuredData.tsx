// app/components/StructuredData.tsx
import React from "react";

interface StructuredDataProps {
  /** JSON-LD schema object */
  schema: Record<string, any>;
}

/**
 * Renders a JSON‑LD script tag safely.
 * The schema is stringified and escaped to avoid </script> injection.
 */
export const StructuredData: React.FC<StructuredDataProps> = ({ schema }) => {
  const json = JSON.stringify(schema).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
};

export default StructuredData;
