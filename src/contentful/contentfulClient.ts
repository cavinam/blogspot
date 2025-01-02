import { createClient } from "contentful";

const contentfulClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "wtkfz5cdodl7",
  accessToken:
    process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ||
    "H7wup6bt8wYpEccIbZGdXqsVQVSyAUWKpnWMzRQCaIc",
});

export default contentfulClient;
