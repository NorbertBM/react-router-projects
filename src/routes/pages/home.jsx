import React, { useState, useEffect } from "react";
import { Title } from "../../components/componentsLibrary";
import { PageWrapper } from "../../components/styles/PageWrapper";

import { useLoaderData } from "react-router-dom";
import { spinnerLoader } from "../loaders";
export default function Home() {
  let data = useLoaderData();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    data.data && setIsLoading(false);
  }, [data]);

  return (
    <PageWrapper>
      <div className="container">
        {!isLoading && spinnerLoader()}
        <Title text={"Welcome to our home page"} />
        isLoading
        {!isLoading && <h4>Loader data : {data.data}</h4>}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          consequatur quos facilis ullam quisquam molestias veritatis omnis
          voluptas, incidunt eum numquam accusantium saepe autem excepturi
          distinctio provident id ducimus asperiores nesciunt adipisci commodi
          eligendi minima quam ut! Corporis numquam quo expedita ullam doloribus
          earum quaerat inventore, nulla velit sit dolorem tempore odio amet,
          consequatur aliquam labore rerum libero tenetur quisquam culpa facere
          ab. Quia quo natus provident facere, veritatis quibusdam, tempora
          nihil molestiae ratione, officiis laboriosam fugiat aliquam harum
          voluptate. Vel, numquam ut quis laborum exercitationem nesciunt
          veritatis quaerat! Officia suscipit ab tempora? Odio maiores officiis
          ipsam amet consectetur facere!
        </p>
      </div>
    </PageWrapper>
  );
}
