var fs = require("fs");
const download = require("image-downloader");
const sharp = require("sharp");
const uuidv4 = require("uuid/v4");

var personJson = "src/assets/person.json";
var projectsJson = "src/assets/projects.json";

var avatarTargetfileUrl = "assets/avatar.png";
var avatarTargetfile = "src/assets/avatar.png";
var avatarTempfile = "temp/avatar.temp";
var faviconFile = "src/assets/favicon.png";

var person = JSON.parse(fs.readFileSync(personJson, "utf8"));
downloadPerson(person);

var promises = [];
var projects = JSON.parse(fs.readFileSync(projectsJson, "utf8"));
projects.forEach(project => {
  promises.push(
    downloadProject(project).then(name => {
      project.image = name;
    })
  );
});

Promise.all(promises).then(result => {
  fs.writeFileSync(projectsJson, JSON.stringify(projects));
});

function downloadProject(project) {
  return new Promise(function(resolve, reject) {
    if (project.image.startsWith("http")) {
      var tempName = uuidv4();

      options = {
        url: project.image,
        dest: "temp/" + tempName + ".temp"
      };

      return download
        .image(options)
        .then(({ filename, image }) => {
          console.log("File saved to", filename);
          convertProject2PNG(filename, tempName).then(data => {
            resolve("assets/" + tempName + ".png");
          });
        })
        .catch(err => {
          console.error(err);
          reject(err);
        });
    } else {
      console.log("Project image url is already local", project.image);
      resolve(project.image);
    }
  });
}

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

function convertAvatar2PNG(filename) {
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

function saveAvatar2Favicon(filename) {
  sharp(filename)
    .resize(64)
    .png()
    .toFile(faviconFile)
    .then(data => {
      console.log(faviconFile, "Created from avatar");
    })
    .catch(err => {
      console.error("Error creating", faviconFile, JSON.stringify(err));
    });
}

function convertProject2PNG(filename, tempName) {
  var target = "src/assets/" + tempName + ".png";

  return sharp(filename)
    .resize(500)
    .png()
    .toFile(target)
    .then(data => {
      console.log("File converted to", target);
    })
    .catch(err => {
      console.error("Error converting project image", JSON.stringify(err));
    });
}
