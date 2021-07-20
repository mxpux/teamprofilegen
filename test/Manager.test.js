const Manager = require("../library/Manager");
const Employee = require("../library/Employee");

test("Can set office number via constructor argument", () => {
    const testOffNum = 50;
    const e = new Manager("George", 1, "test@test.com", testOffNum, "Manager");
    expect(e.officeNumber).toBe(testOffNum);
});

test("test method getRole()", () => {
    const testRole = "Manager";
    const e = new Manager("George", 15, "test@test.com", 50, "Manager");
    expect(e.getRole()).toBe(testRole);
});

test("test method getOffice()", () => {
    const testOffNum = 50;
    const e = new Manager("George", 15, "test@test.com", testOffNum, "Manager");
    expect(e.getOfficeNumber()).toBe(testOffNum);
});