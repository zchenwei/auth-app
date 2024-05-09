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
      required: true,
    },
    address: {
      mutable: true,
      required: true,
    },
    birthdate: {
      mutable: true,
      required: true,
    },
    gender: {
      mutable: true,
      required: true,
    },
    givenName: {
      mutable: true,
      required: true,
    },
    familyName: {
      mutable: true,
      required: true,
    },
    locale: {
      mutable: true,
      required: true,
    },
    middleName: {
      mutable: true,
      required: true,
    },
    fullname: {
      mutable: true,
      required: true,
    },
    nickname: {
      mutable: true,
      required: true,
    },
    phoneNumber: {
      mutable: true,
      required: true,
    },
    profilePicture: {
      mutable: true,
      required: true,
    },
    profilePage: {
      mutable: true,
      required: true,
    },
    website: {
      mutable: true,
      required: true,
    },
    timezone: {
      mutable: true,
      required: true,
    },
    lastUpdateTime: {
      mutable: true,
      required: true,
    },
  },
});
