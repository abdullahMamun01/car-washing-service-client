import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChangeEvent, useState } from "react";
import { Upload } from "lucide-react";

interface User {
  name: string;
  email: string;
  phone: string;
  avatar: string;
}

export default function Profile() {
  const [userData, setUserData] = useState<User>({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 8900",
    avatar: "/placeholder.svg?height=100&width=100",
  });
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatarFile(file);
      setUserData((prevState) => ({
        ...prevState,
        avatar: URL.createObjectURL(file),
      }));
    }
  }
    return (
      <Card>
        <CardHeader>
          <CardTitle>Your Profile</CardTitle>
          <CardDescription>Manage your account details here.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="w-20 h-20">
                <AvatarImage src={userData.avatar} alt={userData.name} />
                <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <Label htmlFor="avatar" className="cursor-pointer">
                  <div className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-700">
                    <Upload className="w-4 h-4" />
                    <span>Upload new picture</span>
                  </div>
                </Label>
                <Input
                  id="avatar"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleAvatarChange}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={userData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={userData.phone}
                onChange={handleInputChange}
              />
            </div>
            <Button type="submit">Update Profile</Button>
          </form>
        </CardContent>
      </Card>
    );
  };

