const app = Vue.createApp({
    data(){
        return{
            title:'',
            tasks:[
                {title:'Wash Plates', completed:false},
                {title:'Go to the gym', completed:true}
            ]
        }
    },
    methods:{
        addTask(){
            if(this.title != ''){
                const newTask = {
                    title:this.title, completed:false
                }

                this.tasks.push(newTask)
                this.title = ''
            }else{
                alert('PLEASE!!! Enter a task')
            }
        },
        completeTask(index){
            this.tasks.forEach(item => {
                if(this.tasks.indexOf(item) == index){
                    item.completed = !item.completed
                }
            });
        },
        removeTask(index){
            // const allTasks = [...this.tasks]
            // allTasks.splice(0,1)
            // this.tasks = allTasks

            this.tasks .splice(0,1)
        }
    }
})

app.mount('#app')