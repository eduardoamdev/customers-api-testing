const router = require("../routes/customers");

jest.mock("../controllers/customersControllers", () => {
  return {
    customersController: () => {},
    customerController: () => {},
    createController: () => {},
    updateController: () => {},
    deleteController: () => {},
  };
});

jest.mock("express", () => {
  return {
    Router: () => {
      return {
        get: () => {
          return "get";
        },
        post: () => {
          return "post";
        },
        put: () => {
          return "put";
        },
        delete: () => {
          return "delete";
        },
      };
    },
  };
});

describe("Customers router test", () => {
  test("Get", () => {
    const response = router.get();

    expect(response).toEqual("get");
  });

  test("Post", () => {
    const response = router.post();

    expect(response).toEqual("post");
  });

  test("Put", () => {
    const response = router.put();

    expect(response).toEqual("put");
  });

  test("Delete", () => {
    const response = router.delete();

    expect(response).toEqual("delete");
  });
});
