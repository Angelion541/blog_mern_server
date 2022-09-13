import { body } from 'express-validator';

export const registerValidation = [
  body('email', 'Wrong email format').isEmail(),
  body('password', 'Password must have min 5 characters').isLength({ min: 5 }),
  body('fullName', 'Enter full name').isLength({ min: 3 }),
  body('avatarUrl', 'Wrong avatar link').optional().isURL(),
];

export const loginValidation = [
  body('email', 'Wrong format email').isEmail(),
  body('password', 'Password must have min 5 characters').isLength({ min: 5 }),
];

export const postCreateValidation = [
  body('title', 'Enter title of post').isLength({ min: 3 }).isString(),
  body('text', 'Enter text of post').isLength({ min: 5 }).isString(),
  body('tags', 'Wrong tags format (specify array)').optional().isArray(),
  body('imageUrl', 'Wrong image link').optional().isString(),
];
