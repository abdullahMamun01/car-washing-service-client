
type TServiceNameProps = {
    serviceName: string,
    price: number
}
export default function SelectServiceName({serviceName , price}:TServiceNameProps) {


  return (
    <div className="relative w-4/6 inline-block md:max-w-[280px] my-4">
      <h1 className="my-4">Service Name</h1>
      <div className="relative rounded-lg p-1 shadow-lg bg-blue-500 text-white">
        {/* Static Circle Indicator */}
        <span className="absolute text-right right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300"></span>

        {/* Service Details */}
        <div className="flex h-full flex-col items-start justify-center p-3.5">
          <span className="font-medium text-xl">{serviceName}</span>
          <span className="mt-2 font-medium">${price}</span>
        </div>
      </div>
    </div>
  );
}
