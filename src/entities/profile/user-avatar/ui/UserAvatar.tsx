import Image from "next/image";
import { getServerSession } from "next-auth";

export const UserAvatar = async () => {
  const session = await getServerSession();

  return (
    <Image
      src={session?.user?.image || ""}
      alt="user-avatar"
      width={39}
      height={39}
      className="rounded-md ring-1 ring-input"
    />
  );
};
