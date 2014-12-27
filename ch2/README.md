# 2-1 TCP server

The chat server works on localhost:8000.(May be updated as the code changes.)

Windows after Vista has not been installed the Telnet Client by default.

In node, there's no difference on EOL between with and without semi-colon.

# 2-2 A Twitter Server

The express module has been changed and I updated the code.

The express module should be installed in the same directory as code, so I add the express path to the .gitignore file.

## [2-15.js](2-15.js)

In 2-15.js, the `bodyParser` middleware has been deprecated and we should use `body-parser` instead.

The default value of `body-parser` has been changed and we should explicitly set extended for `bodyParser.urlencoded()` while use `body-parser` as `bodyParser`.

## [2-18.ejs](2-18.ejs) EJS Template

There're differences between `<%-` and `<%=`.

## 2-19~24

The article doesn't explain how the files arrange. As a result, I don't know what to do to pass the parameter to the program. There're several errors. I will leave it and remain to be seen what I should do.
