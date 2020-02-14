document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault();

  const input = document.querySelector("#message-input");
  const encrypted = btoa(input.value);
  //will convert input to base64 string

  document.querySelector("#link-input").value = encrypted;
  //will take encryted value and place it in the link-input
});
