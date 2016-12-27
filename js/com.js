function animate(obj,target,step){
    if(obj.timer){
        clearInterval(obj.timer);
    }
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        var steps=step;
        if(leader>target){
            steps=-step;
        }
        var far=Math.abs(target-leader);
        if (far >Math.abs(steps)) {
            leader = leader + steps;
            obj.style.left = leader + 'px';
        } else {
            clearInterval(obj.timer);
            obj.style.left=target+"px";
        }
    }, 10)
}
