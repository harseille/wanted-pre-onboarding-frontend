export type TTodo = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
};

export type TDefaultTodo = {
  todoList: TTodo[] | [];
};
