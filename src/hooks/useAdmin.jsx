/* import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user,loading } = useAuth();
    // console.log(user.email)
    const [axiosSecure] = useAxiosSecure();
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        // enabled: !!user, 
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`users/admin/${user?.email}`)
            console.log('admin', res)
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
}
export default useAdmin; */