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
