import Avatar from "../avatar";
import DateFormatter from "../date-formatter";
import CoverImage from "../cover-image";
import Link from "next/link";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div>
        <h2 className="my-6 text-6xl md:text-6xl font-bold tracking-tighter leading-tight">
          Ultimo post...
        </h2>
      </div>
      <div className="md:grid md:grid-cols-3 md:gap-x-16 lg:gap-x-8 mb-20">
        <div>
          <CoverImage
            title={title}
            src={coverImage}
            slug={slug}
            height={620}
            width={1240}
          />
        </div>
        <div className="col-span-2">
          <div>
            <h3 className="text-4xl lg:text-6xl leading-tight">
              <Link as={`/posts/${slug}`} href="/posts/[slug]">
                <a className="hover:underline">{title}</a>
              </Link>
            </h3>
            <div className="text-lg">
              <DateFormatter dateString={date} />
            </div>
          </div>
          <div>
            <p className="text-lg leading-relaxed ">{excerpt}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
