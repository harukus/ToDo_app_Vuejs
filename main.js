Vue.createApp({
  data() {
    return {
      todos: [],
      newTodo: null,
    };
  },
  mounted() {
    if (localStorage.getItem('todos')) {
      try {
        this.todos = JSON.parse(localStorage.getItem('todos'));
      } catch (e) {
        localStorage.removeItem('todos');
      }
    }
  },
  methods: {
    addTodo() {
      if (!this.newTodo) {
        return;
      }
      this.todos.push(this.newTodo);
      this.newTodo = '';
      this.saveTodos();
    },
    saveTodos() {
      const parsed = JSON.stringify(this.todos);
      localStorage.setItem('todos', parsed);
    },
    removeTodo(id) {
      this.todos.splice(id, 1);
      this.saveTodos();
    },
  },
}).mount('#app');
