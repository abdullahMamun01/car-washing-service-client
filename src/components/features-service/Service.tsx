import ServiceCard from "./ServiceCard";
import CarWahsIcon from '@/assets/icons/car-wash-svgrepo-com.svg'

const featuredServices = [
    {
        title: "Premium Car Wash",
        id: 1,
        //   icon: <FaShower />,
        description: "A comprehensive wash that includes exterior, interior, and waxing to give your car a showroom finish."
    },
    {
        title: "Express Exterior Wash",
        id: 2,
        //   icon: <FaCarSide />,
        description: "Quick and efficient exterior wash to keep your car looking clean on the outside, perfect for busy schedules."
    },
    {
        title: "Deluxe Interior Detailing",
        id: 3,
        //   icon: <MdOutlineCleaningServices />,
        description: "Deep cleaning of the interior including seats, dashboard, and floor mats for a fresh and spotless interior."
    },
    {
        title: "Full-Service Hand Wash",
        id: 4,
        //   icon: <GiHandWash />,
        description: "A thorough hand wash of your vehicle's exterior, ensuring a personal touch and attention to detail."
    },
    {
        title: "Engine Bay Cleaning",
        id: 5,
        //   icon: <FaOilCan />,
        description: "Specialized cleaning of the engine bay to remove dirt, grime, and oil, enhancing engine performance."
    },
    {
        title: "Ceramic Coating Protection",
        id: 6,
        //   icon: <GiAutoRepair />,
        description: "High-quality ceramic coating to protect your car's paint from scratches, UV rays, and environmental contaminants."
    }
];


const Service = () => {
    return (
        <section className="pb-12 pt-0 dark:bg-dark lg:pb-[90px] " >
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                            <span className="mb-2 block text-lg font-semibold text-blue-500">
                                Our Services
                            </span>
                            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-primary dark:text-white sm:text-4xl md:text-[40px]">
                                What We Offer
                            </h2>
                            <p className="text-base text-body-color dark:text-dark-6">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-mx-4 flex flex-wrap" >


                    {
                        featuredServices.map(service => (

                            <ServiceCard
                                key={service.id}
                                title={service.title}
                                details={service.description}
                                icon={
                                    CarWahsIcon
                                }
                            />

                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;


