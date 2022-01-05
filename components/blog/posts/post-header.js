import Avatar from "../avatar";
import DateFormatter from "../date-formatter";
import CoverImage from "../cover-image";
import PostTitle from "./post-title";
import Tags from "@blog/tags";
export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <div>
        <PostTitle>{title}</PostTitle>
      </div>
      <div>
        <Tags tags={["#beginner", "#javascript", "#programming", "#webdev"]} />
      </div>
      <div>
        <div>
          <DateFormatter dateString={date} />
        </div>
        <div>
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div>{author.name}</div>
      </div>
    </>
  );
}
