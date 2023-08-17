import { Subtitle } from "../components/componentsLibrary";
import { PageWrapper } from "../components/styles/PageWrapper";

export default function IndexRoute() {
  return (
    <PageWrapper>
      <Subtitle text={"Welcome to React Router Mastery"} />
      <br />
      <h4 className="text-secondary">Select one from the options above</h4>
    </PageWrapper>
  );
}
