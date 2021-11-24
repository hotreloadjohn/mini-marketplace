import { check, validationResult } from "express-validator";

export const validateRegister = [
  check("email", "Invalid email").isEmail(),
  check("password", "Password must be at least 6 chars long")
    .isLength({
      min: 6,
    })
    .custom((value, { req }) => {
      if (value !== req.body.confPassword) {
        // trow error if passwords do not match
        throw new Error("Passwords don't match");
      } else {
        return value;
      }
    }),
  // body("confPassword").matches("password").withMessage("Passwords must match."),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });

    next();
  },
];
