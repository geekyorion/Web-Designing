var flag = true;

function toggleClass(ele) {
    ele.classList.toggle("animateArrow");
    if (flag) {
        ele.setAttribute("href", "#bottom");
    } else {
        ele.setAttribute("href", "#top");
    }
    flag = !flag;
}
