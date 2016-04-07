

Template.greeting.events = {
  'submit #loginForm'(e) {
    const target = e.target;
    const name = target.login.value;

    e.preventDefault();

    target.login.value = '';

    Session.set('login', name);
  }
};