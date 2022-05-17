const URL = "https://6283bdb838279cef71dbbcec.mockapi.io/api/v1/users";
 const fetchTodos = () =>
  axios.get(URL).then((resp) => {
    console.log(resp);

    return resp.data;
  });
const id = {
  name: "peter",
  age: "33",
  birsday: 17.05 
}
const deleteTodo = (id) => axios.delete(`${URL}/${id}`);

//  const updateTodo = (id, data) => axios.put(`${URL}/${id}`, data);

 const createTodo = (id) =>
  axios.post(URL, id).then(({ data }) => data);

// createTodo(id)
  deleteTodo(1)