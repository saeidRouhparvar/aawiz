import { FC } from "react";
import Button from "../ui/Button";
import { UserType } from "@/app/utils/types";

export interface UserCardProps {
    user: UserType;
}

const UserCard: FC<UserCardProps> = ({ user }) => {
    return (
        <div className="
        flex flex-col gap-2
      bg-neutV-50 border border-neutV-200 
       rounded-2xl p-6 shadow-sm 
      hover:shadow-lg transition-all duration-300
    ">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-neutV-950">
                    {user.name}
                </h2>

                <span className="text-sm px-3 py-1 rounded-full bg-limeV-100 text-limeV-700 dark:bg-limeV-800 dark:text-limeV-300">
                    #{user.id}
                </span>
            </div>

            <div className="space-y-2 text-neutV-800 font-semibold">
                <p><span>Username:</span> {user.username}</p>
                <p><span>Email:</span> {user.email}</p>
                <p><span>Phone:</span> {user.phone}</p>
                <p><span>City:</span> {user.address.city}</p>
                <p><span>Company:</span> {user.company.name}</p>
            </div>

            <div className="flex justify-between">
                <div className=""></div>
                <div className="">
                    <Button>View Profile</Button>
                </div>

            </div>
        </div>
    );
};

export default UserCard;
