import fs from "fs";
import { join, extname } from "path";
import matter from "gray-matter";
import defaultConfig from "../default.config";

const postsDirectory = join(process.cwd(), "_posts");

//Unicamente va a levantar los archivos .md
export function getPostSlugs() {
  const postDirectoryFiles = fs.readdirSync(postsDirectory);
  return postDirectoryFiles.filter((file) => extname(file) == ".md");
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};
  console.log(defaultConfig);

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    debugger;
    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    } else if (typeof defaultConfig[field] !== "undefined") {
      items[field] = defaultConfig[field];
    }

    console.log("Default config", defaultConfig);
  });

  return items;
}

export function getAllPosts(fields = []) {
  debugger;
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
