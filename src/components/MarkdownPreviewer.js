// font
$markdown: 'Source Code Pro', monospace;
$title: 'Eczar', serif;
$codedby: 'Lobster Two', cursive;

// color
$bodyBackground: #E8DAEF;
$borders: #89466F;

// element
body {
  background-color: $bodyBackground;
  width: 98%;
}
hr {
  padding-top: 0px;
  margin-top: 0px;
  border-color: $borders;
  margin-bottom: 10px;
}
textarea {
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 400px;
  min-height: 400px;
  max-height: 400px;
  margin-bottom: 10px;
}

// class
.heading-text-one {
  font-family: $title;
}
.heading-text-two {
  margin-top: 0px;
  font-family: $codedby;
}
.markdown-text {
  font-family: $markdown;
}
.container-class {
  background-color: white;
  border: 2px solid $borders;
  height: 500px;
}
.rounded-corners {
  border-radius: 10px;
}
