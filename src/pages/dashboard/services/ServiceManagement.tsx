import ServiceManageForm from "@/components/form/ServiceManageForm";

export default function ServiceManagement() {
  return (
    <section className="bg-white py-4 dark:bg-primary dark:text-white">
      <h1 className="my-2 text-primary text-2xl font-bold container px-8">Addin New Services</h1>
      <div className="container px-4 mx-auto">
        <ServiceManageForm/>
      </div>
    </section>
  );
}
