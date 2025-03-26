type Data = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};

const url = "https://jsonplaceholder.typicode.com/todos";

const fetchTodos = async () => {
  await new Promise((resolve)=>setInterval(resolve, 1000))
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const AboutPage = async () => {
  const data: Data[] = await fetchTodos();
  console.log(data);
  return (
    <div>
      AboutPage
      <ul>
        {data.map((item, index) => {
          return <li key={index}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};
export default AboutPage;
