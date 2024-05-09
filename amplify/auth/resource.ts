import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  userAttributes: {
    preferredUsername: {
      mutable: true,
      required: false,
    },
    address: {
      mutable: true,
      required: false,
    },
    birthdate: {
      mutable: true,
      required: false,
    },
    gender: {
      mutable: true,
      required: false,
    },
    givenName: {
      mutable: true,
      required: false,
    },
    familyName: {
      mutable: true,
      required: false,
    },
    locale: {
      mutable: true,
      required: false,
    },
    middleName: {
      mutable: true,
      required: false,
    },
    nickname: {
      mutable: true,
      required: false,
    },
    phoneNumber: {
      mutable: true,
      required: false,
    },
    profilePicture: {
      mutable: true,
      required: false,
    },
    profilePage: {
      mutable: true,
      required: false,
    },
    website: {
      mutable: true,
      required: false,
    },
  },
});
