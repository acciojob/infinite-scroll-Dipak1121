//your code here!
let list = document.getElementById("infi-list");
list.addEventListener("scroll", onScroll);
function onScroll(){
	if((list.scrollHeight - list.clientHeight - list.scrollTop) <= 10){
		addItems();
		addItems();
	}
}
function addItems(){
	for ( let i = 11; i <= 19; i++ ){
		let item = document.createElement("li");
		item.innerText = `${i}`;
		list.appendChild(item);
	}
}
