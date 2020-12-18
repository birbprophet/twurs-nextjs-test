import { LoremIpsum } from "lorem-ipsum";
import slugify from "slugify";

const lorem = new LoremIpsum();
const fakeData = Array.from(Array(5))
  .map((v) => lorem.generateWords(2))
  .map((title) => {
    return {
      title,
      slug: slugify(title),
      subtitle: lorem.generateSentences(2),
      items: Array.from(Array(5))
        .map((v) => lorem.generateWords(5))
        .map((title) => {
          return {
            title,
            slug: slugify(title),
            subtitle: lorem.generateSentences(2),
            content: lorem.generateParagraphs(5),
          };
        }),
    };
  });

export default async function fakeapi() {
  return new Promise((resolve, reject) => [
    setTimeout(() => resolve(fakeData), 1000),
  ]);
}

export const getArticle = (sectionSlug, articleSlug) => {
  const filteredSection = fakeData.filter((v) => v.slug === sectionSlug)[0];
  const sectionItems = (filteredSection || {}).items;
  const filteredArticle = (sectionItems || []).filter(
    (v) => v.slug === articleSlug
  )[0];

  return new Promise((resolve, reject) => [
    setTimeout(() => resolve(filteredArticle || null), 1000),
  ]);
};
