import LoginApi from "./login.api";

describe("login API works correctly", () => {
  it("logs correctly", async () => {
    const mockedUser = await LoginApi("wizeline", "Rocks!");
    expect(mockedUser).toEqual({
      id: "123",
      name: "Wizeline",
      avatarUrl:
        "https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png",
    });
  });
});
