 //Login area EventListener
 const loginBtn = document.getElementById("login__btn");
 loginBtn.addEventListener("click", function () {
   const loginArea = document.getElementById("login__area");
   loginArea.style.display = "none";
   const transactionArea = document.getElementById("transaction__area");
   transactionArea.style.display = "block";
 });

 //diposite blance EventListener
 const dipositeBtn = document.getElementById("diposite__btn");
 dipositeBtn.addEventListener("click", function () {
   const dipositeInput = parseFloat(
     document.getElementById("diposite__input").value
   );
   const dipositeAmount = parseFloat(
     document.getElementById("diposite__amount").innerText
   );
   const currentDiposite = dipositeInput + dipositeAmount;
   document.getElementById("diposite__amount").innerText = currentDiposite;
   document.getElementById("diposite__input").value = "";

   const totaBlance = parseFloat(
     document.getElementById("total__blance").innerText
   );
   const currentBlance = totaBlance + dipositeInput;
   document.getElementById("total__blance").innerText = currentBlance;
 });
 //withdrow blance EventListener
 const withdrowBtn = document.getElementById("withdrow__btn");
 withdrowBtn.addEventListener("click", function () {
   console.log(44);
   const withdrowInput = parseFloat(
     document.getElementById("withdrow__input").value
   );
   const withdrowAmount = parseFloat(
     document.getElementById("withdrow__amount").innerText
   );
   const curentWithdrow = withdrowInput + withdrowAmount;
   document.getElementById("withdrow__amount").innerText = curentWithdrow;
   const totaBlance = parseFloat(
     document.getElementById("total__blance").innerText
   );
   const currentBlance = totaBlance - withdrowInput;
   document.getElementById("total__blance").innerText = currentBlance;

   document.getElementById("withdrow__input").value = "";
 });