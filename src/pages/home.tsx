import { signin, getProductList } from "@/api";
import React, { useEffect } from "react";

const testApi = async () => {
  console.log("hello");
  const data = {
    username: "User",
    password: "1234",
  };
  const callback = () => {};
  const loginRes = await signin(data, callback);
  console.log(loginRes);
  const res = await getProductList({
    page: 1,
    perPage: 10,
    search: "",
    category: "",
  });
  console.log(res);
};

const Home = () => {
  useEffect(() => {
    testApi();
  }, []);

  return <div>Home Page</div>;
};

export default Home;
