// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV: "mongodb+srv://admin:abc$123@reactreserve-hfzoc.mongodb.net/test?retryWrites=true&w=majority",
    JWT_SECRET: "helloworld$$$",
    CLOUDINARY_URL: "http://api.cloudinary.com/v1_1/cloudnine-hospitals/image/upload",
    STRIPE_SECRET_KEY: "<insert-stripe-secret-key>"
  }
};
