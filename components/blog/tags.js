import styles from "./tags.module.css";

export default function Tags({ tags }) {
  return (
    <div>
      {tags.map((hashtag, index) => (
        <a href={hashtag} className={styles.blogPostTag} key={index}>
          {hashtag}
        </a>
      ))}
    </div>
  );
}
