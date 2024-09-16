import Breadcrumb3 from "@/components/Breadcrumbs/Breadcrumb";
import SearchAndFIlter from "@/components/serach/SearchAndFIlter";

import ServiceComarison from "@/components/services/ServiceComarison";
import ServiceList from "@/components/services/ServiceList";



export default function ServicePage() {

  return (
    <div className="px-5 md:px-20 py-5">
      <Breadcrumb3 />

      <div>
        <h2 className="mb-8 text-4xl lg:text-5xl text-sky-600 text-center font-bold font-heading">
          Our Serivice Available!
        </h2>
      </div>
      <div className="my-4">
        <ServiceComarison />
      </div>
      <div className="mb-8">
        <SearchAndFIlter />
      </div>

    <ServiceList/>
    </div>
  );
}
