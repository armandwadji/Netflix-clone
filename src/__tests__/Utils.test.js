import { genreFinder, truncateText } from "../utils/Utils";

describe("Limit paragraph", () => {
  it("reduce a paragraphe lines", () => {
    expect(truncateText("123456", 5)).toEqual("12345...");
  });

  it("return pas de description if without paragraphe", () => {
    expect(truncateText("", 5)).toEqual("pas de description");
  });
});

describe("genre finder", () => {
  it("return à list with genre correspondant id", () => {
    expect(genreFinder([28, 12])).toEqual(["Action", "Aventure"]);
  });
});
