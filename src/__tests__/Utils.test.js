import { formatDate, genreFinder, truncateText } from "../utils/Utils";

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

  it("return empty if he have empty", () => {
    expect(genreFinder([])).toEqual([]);
  });
});

describe("format Date", () => {
  it("receive date and return a format day-month-year", () => {
    expect(formatDate("2022-06-15")).toEqual("15/06/2022");
  });

  it("if receive empty return empty", () => {
    expect(formatDate()).toEqual();
  });
});
