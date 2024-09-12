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
import UpdateProfileForm from "@/components/form/UpdateProfileForm";

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
          <UpdateProfileForm/>
        </CardContent>
      </Card>
    );
  };

