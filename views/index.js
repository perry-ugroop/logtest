const html = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>My Web</title>
    <style>
      body {
        font-family: sans-serif;
        font-size: 12pt;
      }
      
      #msg {
        width: 760px;
      }
      
      #notice {
        color: #1524b4;
      }
    </style>
  </head>
  <body>
    <form id="main-form" method="post" action="/postit">
      <div>
        <label for="msg">Message:</label> <input type="text" name="msg" id="msg" />
      </div>
      <div>
        <label for="type">Log type:</label> 
        <select name="type" id="type">
          <option value="info">Info</option>
          <option value="warn">Warn</option>
          <option value="debug">Debug</option>
          <option value="trace">Trace</option>
          <option value="error">Error</option>
          <option value="fatal">Fatal</option>
        </select>
      </div>
      <div>
        <input type="submit" name="send" value="Send" />
      </div>
      <p>
        Messages of types 'error' and 'fatal' will be logged to 'logs/error.log' and the console.
      </p>
      <p>Messages of other types will be logged only to the console.</p>
      <div id="notice">{notice}</div>
    </form>
  </body>
</html>`;


export default html;

