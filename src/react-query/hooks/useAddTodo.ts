import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODO } from "../constants";
import todoService, { Todo } from "../services/todoService";

interface AddTodoContext {
  previousTodo: Todo[];
}

function useAddTodo(onAdd: () => void) {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: todoService.post,
    onMutate: (newTodo) => {
      const previousTodo = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODO) || [];
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODO, (todos = []) => [newTodo, ...todos]);

      onAdd()
      return { previousTodo };
    },
    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODO, todos => todos?.map(todo => todo.id === newTodo.id ? savedTodo : todo))
    },
    onError: (error, newTodo, context) => {
      if (!context) return;

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODO, context.previousTodo);
    }

  })
}

export default useAddTodo;
