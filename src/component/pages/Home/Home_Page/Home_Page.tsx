import * as React from "react";

import { useSelector } from "react-redux";
import {
  PagesSelector,
  PagesState,
} from "../../../../store/slices/PagesSlices";
import PageFirst from "./Pages/PageFirst";

type Home_PageProps = {
  //
};

const Home_Page: React.FC<any> = () => {
  const PagesNow: PagesState = useSelector(PagesSelector);

  return (
    <>
      {PagesNow.Pages_Show === 1 ? (
        <PageFirst />
      ) : PagesNow.Pages_Show === 2 ? (
        "Home_Page2"
      ) : PagesNow.Pages_Show === 3 ? (
        "Home_Page3"
      ) : (
        "Home_Page4"
      )}
    </>
  );
};

export default Home_Page;
