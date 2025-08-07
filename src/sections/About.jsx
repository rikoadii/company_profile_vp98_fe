import AboutCompany from "../components/AboutCompany";
import Introduction from "../components/Introduction";

export default function About() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-row gap-8">
          <div className="flex-1">
            <AboutCompany />
          </div>
          <div className="flex-1">
            <Introduction />
          </div>
        </div>
      </div>
    </div>
  );
}
