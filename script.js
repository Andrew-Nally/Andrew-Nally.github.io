const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "ada813b86924007b55fa3feacfc6ae80-us4",
  server: "us4"
});

const event = {
  name: "JS Developers Meetup"
};

const footerContactInfo = {
  company: "Mailchimp",
  address1: "675 Ponce de Leon Ave NE",
  address2: "Suite 5000",
  city: "Atlanta",
  state: "GA",
  zip: "30308",
  country: "US"
};

const campaignDefaults = {
  from_name: "Gettin' Together",
  from_email: "gettintogether@example.com",
  subject: "JS Developers Meetup",
  language: "EN_US"
};

async function run() {
  const response = await mailchimp.lists.createList({
    name: event.name,
    contact: footerContactInfo,
    permission_reminder: "permission_reminder",
    email_type_option: true,
    campaign_defaults: campaignDefaults
  });

  console.log(
    `Successfully created an audience. The audience id is ${response.id}.`
  );
}

run();
const listId = "YOUR_LIST_ID";
const subscribingUser = {
  firstName: "Prudence",
  lastName: "McVankab",
  email: "prudence.mcvankab@example.com"
};

async function run() {
  const response = await mailchimp.lists.addListMember(listId, {
    email_address: subscribingUser.email,
    status: "subscribed",
    merge_fields: {
      FNAME: subscribingUser.firstName,
      LNAME: subscribingUser.lastName
    }
  });

  console.log(
    `Successfully added contact as an audience member. The contact's id is ${
      response.id
    }.`
  );
}

run();
const md5 = require("md5");

const listId = "YOUR_LIST_ID";
const email = "prudence.mcvankab@example.com";
const subscriberHash = md5(email.toLowerCase());

async function run() {
  try {
    const response = await mailchimp.lists.getListMember(
      listId,
      subscriberHash
    );

    console.log(`This user's subscription status is ${response.status}.`);
  } catch (e) {
    if (e.status === 404) {
      console.error(`This email is not subscribed to this list`, e);
    }
  }
}
run();
const listId = "YOUR_LIST_ID";
const email = "prudence.mcvankab@example.com";
const subscriberHash = md5(email.toLowerCase());

async function run() {
  const response = await mailchimp.lists.updateListMember(
    listId,
    subscriberHash,
    {
      status: "unsubscribed"
    }
  );

  console.log(`This user is now ${response.status}.`);
}

run();