import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function RadiationData({ onKwhChange }){

//fetch from api and before from mongoDB:
const { data } = useSWR("/api/ghi", fetcher);
if (!data) {
  return <div>Loading...</div>;
}
//array method to accumulate the array
const sum = data.reduce(
  (accumulator, curValue) => accumulator + curValue.ghi,
  0
);
const kWh = ((sum / 365 / 24)*1.7).toFixed(1); //rounds to one decimal

//condition checks if onKwhChange prop is defined before calling it (to avoid errors).
if (onKwhChange) {
  onKwhChange(kWh);
}

    return (
        <p>{kWh} kWh</p>
    )
}