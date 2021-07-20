const Intern = require("../library/Intern");

test("Can set school via constructor", () => {
    const testSch = "testInt";
    const e = new Intern("Kris", 1, "test@test.com", testSch, "Intern");
    expect(e.school).toBe(testSch);
});

test("test method getRole()", () => {
    const testRole = "Intern";
    const e = new Intern("Kris", 1, "test@test.com", "Cal Poly", "Intern");
    expect(e.getRole()).toBe(testRole);
});

test("test method getSchool()", () => {
    const testValue = "testInt";
    const e = new Intern("Kris", 1, "test@test.com", testValue, "Intern");
    expect(e.getSchool()).toBe(testValue);
});

