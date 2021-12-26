module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2fe74d065452922781e658af0d8956a1'),
  },
});
