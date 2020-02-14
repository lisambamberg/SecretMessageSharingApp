const { hash } = window.location;
console.log(atob(hash.replace("#", "")));
//If there is a hash already in URL, will unencode message and place into DOM

document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault();

  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");
  //For toggling visibility of forms

  const input = document.querySelector("#message-input");
  const encrypted = btoa(input.value);
  //will convert input to base64 string

  const linkInput = document.querySelector("#link-input");
  linkInput.value = `${window.location}#${encrypted}`;
  //will take encryted value and place it in the link-input

  linkInput.select();
  //will select entire length of link for user
});
