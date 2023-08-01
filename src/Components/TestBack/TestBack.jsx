import axios from "axios";
import React from "react";

const TestBack = () => {
  const API = "https://alex-pacemaker.ru/quiz";

  React.useEffect(() => {
    (async () => {
      await axios.get(API).then((res) => {
        console.log(res.data);
      });
    })();
  }, []);

  return <div>{}</div>;
};

export default TestBack;
