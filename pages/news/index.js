import { Fragment } from "react";
import Link from "next/link";
//our-domain.com/news

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/next-js-is-a-great-framework">
            Next-js is a great framework.
          </Link>
        </li>
        <li>React is best.</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
