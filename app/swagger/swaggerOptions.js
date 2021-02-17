const swaggerOptions = {
    swaggerDefinition: {
      info:{
        title:"Palindrome API",
        description:"Query Palindrome API information",
        contact:{
          name: "Byron Chang"
        },
        version:'1.0.0',
        servers: [process.env.ROOT+process.env.PORTCLIENT]
      }        
    },
    apis : ["./app/routes/*.js"]
}

module.exports = swaggerOptions;