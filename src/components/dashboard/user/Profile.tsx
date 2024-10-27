import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import UpdateProfileForm from "@/components/form/UpdateProfileForm";
import DashboadBreadcrumb from "@/components/Breadcrumbs/DashboadBreadcrumb";

import CoverOne from "@/assets/cover-01.png";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { Edit2, Locate, Mail, Phone } from "lucide-react";
import imageUrlParser from "@/lib/imageUrlParser";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function Profile() {
  const user = useAppSelector(selectCurrentUser);

  return (
    <>
      <DashboadBreadcrumb pageName="Profile" />
      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="relative z-20 h-35 md:h-65">
          <img
            src={CoverOne}
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
          />

          <div className="absolute bottom-1 right-1 z-10 xsm:bottom-4 xsm:right-4 ">
        
           <Dialog>
              <DialogTrigger asChild>
                <Button className="px-4 bg-primary">
                  <Edit2 className="mr-4 w-3" /> Edit
                </Button>
              </DialogTrigger>
              <DialogContent className="  md:min-w-[900px] z-[999]">

                  <CardHeader>
                    <CardTitle>Your Profile</CardTitle>
                    <CardDescription>
                      Manage your account details here.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <UpdateProfileForm />
                  </CardContent>

              </DialogContent>
            </Dialog>
           </div>
          </div>
        </div>

        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
            <div className="relative drop-shadow-2 w-full h-full flex items-center justify-center bg-white rounded-full">
              {user?.image && (
                <img
                  className="w-full h-full object-contain mx-auto"
                  src={imageUrlParser(user?.image)}
                  alt="profile"
                />
              )}
            </div>
          </div>
          <div className="mt-4">
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
              {user?.name}
            </h3>
            <h1 className="text-center flex justify-center items-center my-4">
              <Phone className="mr-4 text-md" />{" "}
              <span className="">+880-{user?.phone}</span>
            </h1>
            <h1 className="text-center flex justify-center items-center my-4">
              <Locate className="mr-4 text-md" />{" "}
              <span className="">{user?.address}</span>
            </h1>

            <h1 className="text-center flex justify-center items-center my-4">
              <Mail className="mr-4 text-md" />{" "}
              <span className="">{user?.email}</span>
            </h1>
          </div>
        </div>

    </>
  );
}
