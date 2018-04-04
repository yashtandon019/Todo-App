new Vue({

  el: "#todo",
 
  data: {
    newTask: "",
    taskList: [],
    activeEdit: null
  },

  
  computed: {
    areAllChecked: function() {
      return this.taskList.every(function(task) {
        return task.checked;
      }) && this.taskList.length > 0;
    }
  },

  
  methods: {
    addTask: function() {
      var task = this.newTask.trim();
      if (task) {
         this.taskList.push({
          text: task,
          checked: false,
        });
       
        this.newTask = "";
      }
    },
    removeTask: function(task) {
      var index = this.taskList.indexOf(task);
      this.taskList.splice(index, 1);
    },
    editTask: function(task) {
      this.activeEdit = task
    },
    doneEdit(task) {
      if (!this.activeEdit) {
        return
      }
      this.activeEdit = null
      task.text = task.text.trim()
    },
    clearList: function() {
      this.taskList = [];
    },
    checkAll: function() {
      var targetValue = this.areAllChecked ? false : true;
      for (var i = 0, j = this.taskList.length; i < j; i++) {
        this.taskList[i].checked = targetValue;
      }
    }
  }

});