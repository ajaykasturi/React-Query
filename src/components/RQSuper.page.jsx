import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const RQSuperHerosPage = () => {
  const results = useQuery({
    queryKey: ["superheros"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:4000/superheroess");
      return response.data;
    },
  });
  if (results.isLoading) return <div>Loading....</div>;
  if (results.isError)
    return <div>Error....{JSON.stringify(results.error.message)}</div>;
  return (
    <>
      <h2>RQ Super Heros Page</h2>
      {results.data?.map((user) => {
        return (
          <div key={user.id}>
            <p>Id: {user.id}</p>
            <p>Name: {user.name}</p>
          </div>
        );
      })}
    </>
  );
};
