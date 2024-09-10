import Pagination from "@/common/Pagination";
import SlotList from "./SlotList";
import SlotCreationForm from "@/components/form/SlotCreationForm";


export default function SlotManagement() {

  return (
    <div className="container mx-auto p-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Slot Management</h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Create New Slot
        </h2>
        <SlotCreationForm />
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Slot List</h2>
        <SlotList />
      </div>

      <Pagination />
    </div>
  );
}
