const Engineer = require("../library/Engineer");

test("Can set Github via constructor", () => {
    const testGit = "Github";
    const e = new Engineer("Tony", 1, "test@test.com", testGit, "Engineer");
    expect(e.github).toBe(testGit);
});

test("test method getRole()", () => {
    const testRole = "Engineer";
    const e = new Engineer("Tony", 1, "test@test.com", "Github", "Engineer");
    expect(e.getRole()).toBe(testRole);
});

test("test method getGithub()", () => {
    const testGit = "Github";
    const e = new Engineer("Tony", 1, "test@test.com", testGit, "Engineer");
    expect(e.getGithub()).toBe(testGit);
});