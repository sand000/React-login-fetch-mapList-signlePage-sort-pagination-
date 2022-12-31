const getData = ({page, sortBy}) => {
  console.log(page)
  return fetch(`https://jsonplaceholder.typicode.com/todos?_sort=title&_order=${sortBy}&_page=${page}&_limit=6`)
         .then((res)=>res.json());
}

const getDataById = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
           .then((res)=>res.json())
}

export {getData, getDataById};