var colors = ["#1abc9c", "#2ecc71", "#9b59b6","#34495e","#f1c40f","#e67e22","#e74c3c"];

function foo (e) {
	var node = prompt("Enter node name: ", "Node");
    if (node != null) {
    	var curr_node=document.getElementById(e.id);
    	var li_node=document.createElement("LI");
    	li_node.setAttribute("onclick", "foo(this)");
    	li_node.style.marginLeft= curr_node.parentNode.offsetLeft+20+"px";
    	var bg_color=colors[Math.floor(Math.random() * 6)+1];
    	li_node.style.background=bg_color;
    	li_node.setAttribute("id",Math.random().toString(36).substring(7));
    	var a_node=document.createElement("a");
    	a_node.setAttribute("href", "#");
    	a_node.innerHTML = node;
        li_node.appendChild(a_node);

        curr_node.appendChild(li_node);  
    }

     event.stopPropagation();
}