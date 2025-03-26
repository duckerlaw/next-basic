import { fetchCamp } from "@/utils/actions";

const CampList = async () => {
  const camps = await fetchCamp();
  console.log(camps);
  return (
    <div>
        {
            camps.map((item, index)=>{
                return <div key={index}>{item.title}</div>
            })
        }
    </div>
  )  
};
export default CampList;
