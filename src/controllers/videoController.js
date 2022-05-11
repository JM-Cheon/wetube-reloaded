import Video from "../models/Video";

// global
export const home = (req, res) => {
  Video.find({}, (error, videos) => {
    if (error) console.log(error);
    console.log(videos);
  });
  return res.render("home", { pageTitle: "Home", videos: [] });
};

// videos
export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", { pageTitle: `Watching ${video.title}` });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: `Editing ${video.title}` });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  return res.redirect(`/videos/${id}`);
};
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = (req, res) => {
  const { title } = req.body;
  return res.redirect("/");
};
