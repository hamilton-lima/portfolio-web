var fs = require("fs");
const download = require("image-downloader");
const sharp = require("sharp");

var personJson = "src/assets/person.json";
var projectsJson = "src/assets/projects.json";

var avatarTargetfileUrl = "assets/avatar.png";
var avatarTargetfile = "src/assets/avatar.png";
var avatarTempfile = "temp/avatar.temp";

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

        return sharp(filename)
          .resize(300)
          .png()
          .toFile(avatarTargetfile)
          .then(data => {
            console.log('File converted to ', avatarTargetfile);
            person.avatar = avatarTargetfileUrl;
            fs.writeFileSync(personJson, JSON.stringify(person));
            console.log(personJson, 'Updated with the new avatar url', avatarTargetfileUrl);
          })
          .catch(err => {
            console.error("Error converting avatar image", JSON.stringify(err));
          });
      })
      .catch(err => {
        console.error(err);
      });
  } else {
      console.log('Avatar image url is already local', person.avatar);
  }
}
