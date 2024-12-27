import contentfulClient from "@/contentful/contentfulClient";
import {
  TypeBlogPostSkeleton,
  IContenfulasset,
} from "@/contentful/types/blogPost.types";
import Image from "next/image";
import Link from "next/link";
import RichText from "@/components/global/RichText";

const getBlogPostContentful = async () => {
  try {
    const data = await contentfulClient.getEntries<TypeBlogPostSkeleton>();
    console.log(data.items[0].fields.image);

    return data;
  } catch (err) {
    console.log(err);
  }
};

export default async function Home() {
  const posts = await getBlogPostContentful();
  return (
    <div>
      <div className="card gap-5 mx-auto px-4 " id="article">
        {posts &&
          posts.items?.map((blog, idx) => (
            <div key={idx} className="my-10">
              <Link href={`article/${blog.fields.slug}`}>
                <div className="relative h-80 w-[200] overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                  <Image
                    src={`https:${
                      (blog.fields.image as IContenfulasset)?.fields.file.url
                    }`}
                    alt="gambar"
                    fill
                  />
                </div>
                <div className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 object-cover">
                  <h1>
                    <RichText document={blog.fields.description} />
                  </h1>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
