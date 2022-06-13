function calcBmi() {
  console.log("success");
  let weight = document.querySelector("#weight").value;
  let height = document.querySelector("#height").value;
  let answer = weight /(height ** 2);
  console.log(answer);
  document.querySelector("#answer").innerHTML = answer;
}
