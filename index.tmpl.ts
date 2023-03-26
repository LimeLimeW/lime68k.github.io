import type { PageData } from "lume/core.ts";

export const layout = "layout.njk";

export default function ({ search }: PageData) {
  const posts = search.pages("type=post");

  return `
    <h2>Posts</h2>
    <ul>
      ${posts
        .map(
          (post) => `<li><a style='color:white;' href="${post.data.url}">${post.data.title}</a>
          
          ${post.data.tags
            .map(
              (tag) => `<chip>#${tag}</chip>`
            ).join(" ")}
          </li>`
        )
        .join("")}
    </ul>
  `;
}
