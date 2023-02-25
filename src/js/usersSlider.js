export default function slider(users,usersArr) {
  let userCard = "";

  users.forEach((user) => {
    userCard = `
        <div>
            <img src=${user.picture.large} alt=${user.name.first} class="img-fluid rounded-circle">
        </div>
        <div class="text-center h-auto">
            <h1 class="py-3 text-center">${user.name.title} ${user.name.first} ${user.name.last}</h1>
            <h2 class="py-2 text-center">@${user.login.username}</h2>
            <a href="#" class="py-3 text-decoration-none fs-5">${user.email}</a>
        </div>
        `;
    usersArr.push(userCard);
  });
}
