export function getAuthForm() {
  return `
  <form id="auth-form" class="mui-form">
      <div class="mui-textfield mui-textfield--float-label">
        <input type="email" id="email" required>
        <label for="email">Email</label>
      </div>
      <div class="mui-textfield mui-textfield--float-label">
        <input type="password" id="password" required>
        <label for="password">Пароль</label>
      </div>
      <button type="submit"class="mui-btn mui-btn--raised mui-btn--primary" >Войти</button>

  </form>
  `;
}

export function authWithEmailAndPassword(email, password) {
  const apiKey = "AIzaSyCBDBgtLcp8UNdQFf3zF1Y_jt6N0Vc30j4";
  return fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[AIzaSyCBDBgtLcp8UNdQFf3zF1Y_jt6N0Vc30j4]`,
    {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
}
