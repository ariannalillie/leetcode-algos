import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const getApiData = async () => {
  const res = await axios.get(URL);
  const todo = res.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  console.log(`The id is: ${id}
  the title is: ${title}
  task completed: ${completed}
  `);
};

getApiData();

const plusThree = (n: number) => {
  return n + 3;
};

console.log(plusThree(3));
