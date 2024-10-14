import { useMutation } from "@tanstack/react-query";
import { setMessage, setUser } from "./authSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useRouter } from "next/navigation";

const login = async (
  email: string,
  password: string
): Promise<{ token: string }> => {
  const response = await fetch("http://localhost:7283/api/Auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const data = await response.json();
  console.log("Login success", data);
  return data;
};

const register = async (
    email: string,
    password: string
  ): Promise<{ message: string; userId: string }> => {
    const response = await fetch("http://localhost:7283/api/Auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
  
    if (!response.ok) {
      throw new Error("Registration failed");
    }
  
    const data = await response.json();
    console.log("Registration success", data);
    return data;
  };
  

const useLogin = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  return useMutation({
    mutationFn: async (credentials: { email: string; password: string }) => {
      const response = login(credentials.email, credentials.password);
      return response;
    },
    onSuccess: (response) => {
      if (response.token) {
        dispatch(setUser({token:response.token })); 
      }
      router.push("/shop");
    },

    onError: () => {
      console.log("Login failed" )
      dispatch(setMessage("Login failed. Please try again."));
    }
  });
};

const useRegister =()=>{
    const dispatch = useAppDispatch();
    const router = useRouter();
    return useMutation({
        mutationFn: async (credentials: { email: string; password: string }) => {
          const response = await register(credentials.email, credentials.password);
          return response;
        },
        onSuccess: (response) => {
            if (response.userId && response.message) {
              dispatch(setMessage(response.message));  
              router.push("/login"); 
            }
          },
        onError: () => {
          console.log("Registration failed");
          dispatch(setMessage("Registration failed. Please try again."));
        },
      });
}

export { useLogin,useRegister };
 