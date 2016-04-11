

Template.greeting.events = {
  'submit #loginForm': login
};

function login(e) {
  const target = e.target;
  const name = target.login.value;

  e.preventDefault();

  target.login.value = '';

  Session.setPersistent('login', name);
}