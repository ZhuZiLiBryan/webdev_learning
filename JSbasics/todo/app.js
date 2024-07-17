const todoList = [];

let input = "";
while(input !== "quit") {
    input = prompt("Enter a command: ");
    if (input === "new") {
        new_task = prompt("New item: ");
        todoList.push(new_task);
    } else if (input === "list") {
        console.log("***")
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i + 1}. ${todoList[i]}`);
        }
        console.log("***")
    } else if (input === "delete") {
        toDelete = parseInt(prompt("Which item to delete: "));

        while (!toDelete) {
            toDelete = parseInt(prompt("Which item to delete: "));
        }

        todoList = todoList.splice(toDelete + 1, 1);
    }
}