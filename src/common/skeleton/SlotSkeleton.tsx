import { Skeleton } from "@/components/ui/skeleton";

export default function SlotSkeleton() {
  return (
    <div className="w-full  mx-auto p-4">
      <div className="rounded-lg overflow-hidden">
        <table className="w-full">
          <tbody className="bg-white divide-y divide-gray-200">
            {[...Array(5)].map((_, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <Skeleton className="h-4 w-32" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Skeleton className="h-4 w-24" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Skeleton className="h-4 w-16" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Skeleton className="h-4 w-16" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Skeleton className="h-4 w-32" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Skeleton className="h-6 w-20 rounded-full" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Skeleton className="h-8 w-24 rounded" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
