exports.allAccess = (req, res) => {
  //res.status(200).send("PALINDROME API");
  res.status(200).send({
    "text": "no text",
    "palindrome" : false
  })
};

exports.validateWord = (req, res, next) => {  
  const jsonF = (expr) => JSON.parse(JSON.stringify(expr))
  const errMsg={error: "no text"}

  //reverse letters function
  const reverse=(str)=>{
    return str.split("").reverse().join("").toString()
  }

  //is Palindrome validator function
  const isPalindrome=str=>{    
    let palindromeStr=reverse(str)
    let validation = (str === palindromeStr) ? true : false
    return validation
  }
  
  //response format
  const response = (str, val) => {
    return jsonF({
      "text": str,
      "palindrome" : val
    })
  }

  //base palindrome validation implementation
  try {    
    let word = req.query.text;
    (word !== undefined && word !== "") 
    ?       
      isPalindrome(word)?
        res.status(200).send(response(reverse(word), true)) 
      :
        res.status(200).send(response(reverse(word), false))  
    : res.status(400).send(errMsg)    
    next()
  } catch (error) {    
    res.status(400).send(errMsg)
  }
};
