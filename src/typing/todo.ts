export type TTodo = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
};

export type TTodoMode = 'view' | 'edit';

export type TDefaultTodo = {
  todoList: TTodo[] | [];
};
