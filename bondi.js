let lists = document.querySelectorAll(".links ul li a");
console.log(lists);
lists.forEach(function (ele) {
  ele.onclick = function (ele) {
    lists.forEach(function (ele) {
      ele.classList.remove("active");
      ele.classList.remove("bg-danger");
      ele.classList.remove("rounded-pill");
      ele.classList.remove("text-warning");
    });
    this.classList.add("active");
    this.classList.add("bg-danger");
    this.classList.add("rounded-pill");
    this.classList.add("text-warning");
  };
});
