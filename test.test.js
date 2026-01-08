import test from "node:test";
import assert from "node:assert";
import { AirportSystem } from "./classes/AirportSystem.js";
import { StudentPassenger } from "./classes/StudentPassenger.js";
import { RegularPassenger } from "./classes/RegularPassenger.js";
test.describe("tests airportsystem", () => {
  test("Not enough money", () => {
    const a = new AirportSystem("nn");
    const s = new StudentPassenger("a", 1, 0, "fu");
    const r = new RegularPassenger("cvc", 1, 0, "dfdfds", false);
    assert.strictEqual(s.buyTicket(a), false);
    assert.strictEqual(r.buyTicket(a), false);
  });
  test.describe("tests airportsystem", () => {
    test("enough money", () => {
      const a = new AirportSystem("nn");
      const s = new StudentPassenger("a", 1, 1000, "fu");
      const r = new RegularPassenger("cvc", 1, 1000, "dfdfds", false);
      assert.strictEqual(s.buyTicket(a), true);
      assert.strictEqual(r.buyTicket(a), true);
    });
  });
});
