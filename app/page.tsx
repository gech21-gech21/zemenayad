import Search from "./search/page";
import Homee from "./home/seniorExpert/page";
import About from "./about/page";
export default function Home() {
  return (
    <div className="container mx-auto">
      <p className="container mx-auto mt-5">
        Zemenay ad Provides fresh and updated Ethiojobs vacancies. we list fresh
        graduate jobs in Ethiopia, Job vacancy in Ethiopia and more. Visit our
        site now!
      </p>
      <Homee />
      <Search />
      <About />
    </div>
  );
}
