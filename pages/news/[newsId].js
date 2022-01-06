import { useRouter } from "next/router";
import { Fragment } from "react";

//our-domain.com/news/something-important

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  return (
    <Fragment>
      <h1>The Detail Page</h1>
      <p>{newsId}</p>
    </Fragment>
  );
}

export default DetailPage;
