const controller = require("../controllers/palindrome.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/", controller.allAccess);
  

  /**
 * @swagger
 * /iecho:
 *  get:
 *    description: Get Palindrome validation result,
 *    parameters :      
 *    - name: "text"
 *      in: "query"
 *      description: "Word to be validated"
 *      required: true
 *      type: "array"
 *      items:
 *        type: "string"
 *        enum:
 *        - ""
 *        - "abba"
 *        - "civic"
 *        - "NOPAL"
 *        - "kayak"
 *        - "level"
 *        - "racecar"
 *        default: ""
 *      collectionFormat: "multi"
 *    responses:
 *      200:
 *        description: "Successful operation"       
 *      400:
 *        description: "Error: Bad Request (Invalid status value)"     
 */
  app.get("/iecho", controller.validateWord);
};
