import { describe, expect, it } from "@jest/globals";
import getMonth from "./js11";

describe("test getMonth function", () => {
    it("must operate correctly with number from 1 to 12", () => {
        expect(getMonth(3)).toBe('март')
    });
    it("must operate correctly with number invalid (more then 12)", () => {
        expect(getMonth(13)).toBe("number must be from 1 to 12")
    });
    it("must operate correctly with number invalid (argumet = string)", () => {
        expect(getMonth("something")).toBe("n must be a number")
    });
});