import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUpdateRoleMutation, useUserListQuery } from "@/redux/api/userApi";
import { User, ShieldCheck } from "lucide-react";
import { catchError } from "@/utils/catchError";
import toast from "react-hot-toast";


export default function UserList() {
  // const [userRoles, setUserRoles] = useState(users.map((user) => user.role));
  const [updateRole, { isLoading: isUpdatingRole }] = useUpdateRoleMutation();
  const { data: users, isLoading } = useUserListQuery(undefined);
 
  if (isLoading) {
    return <div>Loading..</div>;
  }

  const getRoleColor = (role: string) => {
    switch (role.toLowerCase()) {
      case "admin":
        return "bg-blue-100 text-blue-800";
      case "customer":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleRoleChange = async (newRole: string, userId: string) => {
    try {
      await updateRole({ role: newRole, userId }).unwrap();
      toast.success(`user role update to ${newRole} successfully` , {position:'bottom-right'})
    } catch (error) {
      catchError(error as Error);
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-gray-100">
          <TableHead className="font-bold">ID</TableHead>
          <TableHead className="font-bold">Name</TableHead>
          <TableHead className="font-bold">Email</TableHead>
          <TableHead className="font-bold">Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users?.map((user) => (
          <TableRow
            key={user._id}
            className="hover:bg-gray-50 transition-colors"
          >
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>

            <TableCell>
              <Select
                defaultValue={user.role}
                onValueChange={(value) =>
                  handleRoleChange(value, user._id as string)
                }
              >
                <SelectTrigger
                  className={`w-[180px]`}
                  disabled={isUpdatingRole}
                >
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    className={`${user.role === "user" && "bg-blue-100"}`}
                    value="user"
                  >
                    <div className="flex">
                      <User className="mr-1 w-5 h-5 text-primary" /> Customer
                    </div>
                  </SelectItem>
                  <SelectItem
                    value="admin"
                    className={`${user.role === "admin" && "bg-blue-100"}`}
                  >
                    <div className="flex">
                      <ShieldCheck className="mr-1 w-5 h-5 text-primary" />{" "}
                      Admin
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
