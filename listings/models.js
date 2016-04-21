var Schemas = {};

//// INIT COLLECTIONS
Datastructs     = new Mongo.Collection("datastructs");
Stages          = new Mongo.Collection("stages");
Packages        = new Mongo.Collection("packages");
Pipelines       = new Mongo.Collection("pipelines");
//Users           = new Mongo.Collection("users");
//Meteor.users = Users;

// DATASTRUCTS
Schemas.Datastruct = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 100,
        optional: false
    }
});

// STAGES
Schemas.Stage = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 100,
        optional: false
    }
});

// PACKAGES (ALGORITHMS)
Schemas.Package = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 100
    },
    stage: {
        type: Schemas.Stage,
        label: "Stage",
        optional: false
    },
    author: {
        type: String,
        label: "Author",
        max: 200,
        optional: false
    },
    inputs: {
        type: [Schemas.Datastruct],
        label: "Inputs",
        optional: false
    },
    outputs: {
        type: [Schemas.Datastruct],
        label: "Outputs",
        optional: false
    },
    code: {
        type: String,
        label: "Code",
        optional: false
    },
    created: {
        type: Date,
        label: "Creation date",
        optional: true
    },
    description: {
        type: String,
        label: "Description",
        optional: true,
        max: 1000
    }
    //algorithmicRuntime: {
    //    type: String,
    //    label: "Algorithmic runtime",
    //    optional: false
    //},
});

// PIPELINES
Schemas.Pipeline = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 100
    },
    packages: {
        type: [Schemas.Package],
        label: "Packages",
        optional: false
        // how can we ensure x amount of packages?
        // or should we mention each stage separately (hardcoded => whaaa)
    }
});

//// USER COUNTRY
//Schemas.UserCountry = new SimpleSchema({
//    name: {
//        type: String
//    },
//    code: {
//        type: String,
//        regEx: /^[A-Z]{2}$/
//    }
//});
//
//
//// USER PROFILE
//Schemas.UserProfile = new SimpleSchema({
//    firstName: {
//        type: String,
//        regEx: /^[a-zA-Z-]{2,25}$/,
//        optional: true
//    },
//    lastName: {
//        type: String,
//        regEx: /^[a-zA-Z]{2,25}$/,
//        optional: true
//    },
//    birthday: {
//        type: Date,
//        optional: true
//    },
//    gender: {
//        type: String,
//        allowedValues: ['Male', 'Female'],
//        optional: true
//    },
//    organization : {
//        type: String,
//        regEx: /^[a-z0-9A-z .]{3,30}$/,
//        optional: true
//    },
//    website: {
//        type: String,
//        regEx: SimpleSchema.RegEx.Url,
//        optional: true
//    },
//    bio: {
//        type: String,
//        optional: true
//    },
//    country: {
//        type: Schemas.UserCountry,
//        optional: true
//    }
//});
//
//
//// USERS
//Schemas.User = new SimpleSchema({
//    username: {
//        type: String,
//        regEx: /^[a-z0-9A-Z_]{3,15}$/
//    },
//    emails: {
//        type: [Object],
//        // this must be optional if you also use other login services like facebook,
//        // but if you use only accounts-password, then it can be required
//        optional: true
//    },
//    "emails.$.address": {
//        type: String,
//        regEx: SimpleSchema.RegEx.Email
//    },
//    "emails.$.verified": {
//        type: Boolean
//    },
//    createdAt: {
//        type: Date
//    },
//    profile: {
//        type: Schemas.UserProfile,
//        optional: true
//    },
//    services: {
//        type: Object,
//        optional: true,
//        blackbox: true
//    },
//    // Add `roles` to your schema if you use the meteor-roles package.
//    // Option 1: Object type
//    // If you specify that type as Object, you must also specify the
//    // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
//    // Example:
//    // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
//    // You can't mix and match adding with and without a group since
//    // you will fail validation in some cases.
//    roles: {
//        type: Object,
//        optional: true,
//        blackbox: true
//    },
//    // Option 2: [String] type
//    // If you are sure you will never need to use role groups, then
//    // you can specify [String] as the type
//    roles: {
//        type: [String],
//        optional: true
//    }
//});

Meteor.startup(function() {
    //console.log(Meteor.users);
    //Meteor.users.attachSchema(Schemas.User);

    Datastructs.attachSchema(Schemas.Datastruct, {replace: true});
    Stages.attachSchema(Schemas.Stage, {replace: true});
    Packages.attachSchema(Schemas.Package, {replace: true});
    Pipelines.attachSchema(Schemas.Pipeline, {replace: true});
});