import { marked } from "marked";

const escapeHtml = (text) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

marked.use({
  renderer: {
    html: ({ text }) => escapeHtml(text),
  },
  walkTokens(token) {
    if (
      (token.type === "link" || token.type === "image") &&
      /^\s*(javascript|data|vbscript):/i.test(token.href)
    ) {
      token.href = "#";
    }
  },
});

const files = import.meta.glob("/notes/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

const parse = (path, raw) => {
  const slug = path.split("/").pop().replace(/\.md$/, "");
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  const meta = {};
  match?.[1].split(/\r?\n/).forEach((line) => {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  });
  const body = match ? raw.slice(match[0].length) : raw;
  return {
    slug,
    title: meta.title || slug,
    date: meta.date || "",
    time: Date.parse(meta.date) || 0,
    html: marked.parse(body),
  };
};

export const notes = Object.entries(files)
  .map(([path, raw]) => parse(path, raw))
  .sort((a, b) => b.time - a.time);
