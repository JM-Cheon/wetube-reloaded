const fakeUser = {
  username: "JM",
  loggedIn: true,
};

// global
export const home = (req, res) =>
  res.render("home", { pageTitle: "Home", fakeUser });
export const search = (req, res) => res.send("Search Video");

// videos
export const upload = (req, res) => res.send("Upload Video");
export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
export const remove = (req, res) => {
  console.log(req.params);
  res.send("Remove Video");
};
