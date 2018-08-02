var fs = require("fs");
const download = require("image-downloader");
const sharp = require("sharp");

var personJson = "src/assets/person.json";
var projectsJson = "src/assets/projects.json";

var avatarTargetfileUrl = "assets/avatar.png";
var avatarTargetfile = "src/assets/avatar.png";
var avatarTempfile = "temp/avatar.temp";
var faviconFile = "src/assets/favicon.png";

var person = JSON.parse(fs.readFileSync(personJson, "utf8"));
downloadPerson(person);



function downloadPerson(person) {
  if (person.avatar.startsWith("http")) {
    options = {
      url: person.avatar,
      dest: avatarTempfile
    };

    return download
      .image(options)
      .then(({ filename, image }) => {
        console.log("File saved to", filename);
        convertAvatar2PNG(filename);
        saveAvatar2Favicon(filename);
      })
      .catch(err => {
        console.error(err);
      });
  } else {
    console.log("Avatar image url is already local", person.avatar);
  }
}

function saveAvatar2Favicon(filename){
  sharp(filename)
  .resize(64)
  .png()
  .toFile(faviconFile)
  .then(data => {
    console.log(faviconFile, "Created from avatar");
  })
  .catch(err => {
    console.error(
      "Error creating",
      faviconFile,
      JSON.stringify(err)
    );
  });
}

function convertAvatar2PNG(filename){
  sharp(filename)
  .resize(300)
  .png()
  .toFile(avatarTargetfile)
  .then(data => {
    console.log("File converted to ", avatarTargetfile);
    person.avatar = avatarTargetfileUrl;
    fs.writeFileSync(personJson, JSON.stringify(person));
    console.log(
      personJson,
      "Updated with the new avatar url",
      avatarTargetfileUrl
    );
  })
  .catch(err => {
    console.error("Error converting avatar image", JSON.stringify(err));
  });
}
