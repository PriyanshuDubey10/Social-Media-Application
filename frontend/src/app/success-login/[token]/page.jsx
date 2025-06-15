'use client';
import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";

const SuccessLogin = () => {
  const router = useRouter();
  const params = useParams();
  const token = params.token;
  console.log(token)

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      router.push("/"); 
    }
  }, [token, router]);

  return (
    <div className="flex h-screen items-center justify-center">
      Processing login...
    </div>
  );
};

export default SuccessLogin;
