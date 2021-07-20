const Employee = require("../library/Employee");
test("Can instantiate Employee instance", () => {
  const newEmp = new Employee();
  expect(typeof(newEmp)).toBe("object");
});
test("Can set name via constructor arguments", () => {
  const name = "Kris";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});
test("Can set id via constructor argument", () => {
  const testValue = 50;
  const e = new Employee("Kris", testValue);
  expect(e.id).toBe(testValue);
});
test("test properties email",() => {
    const testEmail = "test@gmail.com";
    const pizza = new Employee("Kris", 1, testEmail);
    expect(pizza.email).toBe(testEmail);
})
test("test method getName",() => {
    const testName = "Kris";
    const e = new Employee(testName);
    expect(e.getName()).toBe(testName);
})
test("test method getID",() => {
    const testID = 2;
    const e = new Employee("Kris", testID);
    expect(e.getId()).toBe(testID);
})
test("test method getEmail",() => {
    const testEmail = "test@test.com";
    const e = new Employee("Kris", 3, testEmail);
    expect(e.getEmail()).toBe(testEmail);
})
test("test method getRole",() => {
  const testRole = "Employee";
  const e = new Employee("Kris", 4, "test@test.com", "Employee");
  expect(e.getRole()).toBe(testRole);
})
