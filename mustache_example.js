var mustache = require("mustache");

result = mustache.render("Hello {{first_name}} {{last_name}}", 
  {
    "first_name": 'muktesh',
    "last_name": 'deshpande'
  }
)

console.log(result)
