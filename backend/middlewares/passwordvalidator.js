const passwordvalidator = (req, res, next) => {
  if (req.method !== "GET") {
    let { password } = req.body;

    let length = password.length;

    let isnumber = false;

    for (let i = 0; i < length; i++) {
      if (
        password[i] == 0 ||
        password[i] == 1 ||
        password[i] == 2 ||
        password[i] == 3 ||
        password[i] == 4 ||
        password[i] == 5 ||
        password[i] == 6 ||
        password[i] == 7 ||
        password[i] == 8 ||
        password[i] == 9
      ) {
        isnumber = true;
        break;
      }
    }

    let specialcharacter = false;

    if (
      password.includes("@") ||
      password.includes("#") ||
      password.includes("$") ||
      password.includes("%") ||
      password.includes("&") ||
      password.includes("*")
    ) {
      specialcharacter = true;
    }

    if (isnumber && length > 8 && specialcharacter) {
      next();
    } else {
      res.send("Invalid Credentials");
    }
  } else {
    next();
  }
};

module.exports = passwordvalidator;
