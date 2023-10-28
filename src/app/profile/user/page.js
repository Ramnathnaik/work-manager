import Image from "next/image";

export default function UserProfile() {
  return (
    <div className="flex justify-center flex-col items-center">
      <Image src={"/home.svg"} width={350} height={250} alt="login-img" />
      <p className="mt-4 font-semibold text-2xl">
        Log all your Tasks at once place
      </p>
    </div>
  );
}
