import React from 'react';
import { marked } from 'marked'; // Only import marked once
import './MarkdownPreviewer.css';

const markdown = `# h1
## h2
[This is a link!](https://www.google.com/)

This is some inline code \`<div></div>\`

This is a code block 
\`\`\`
function temp(arg1, arg2) {
          
}
\`\`\`
This is an ordered list
1. List item 1
2. List item 2
3. List item 3
4. List item 4
5. List item 5
        
This is an unordered list
- List item 1
- List item 2
- List item 3
  - List item 3a
- List item 4
- List item 5
  - List item 5a
  - List item 5b

We can also embed images ![an image](https://source.unsplash.com/T-0EW-SEbsE)
We can also write **bold** and _italic_ text or both _**like this**_
>We can also create block quotes!`;

// Configure 'marked' to allow carriage returns as <br />
marked.setOptions({
  breaks: true,
});

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  
  updateMarkup = (event) => {
    this.setState({
      value: event.target.value
    });
  }
  
  componentDidMount() {
    this.setState({
      value: markdown
    });
  }
    
  render() {
    return (
      <div className="container">
        <div className="editor-box">
          <h2 className="heading">Editor</h2>
          <textarea 
            id="editor" 
            value={this.state.value} 
            type="text" 
            onChange={this.updateMarkup.bind(this)} 
          />
        </div>
        <div className="previewer-box">
          <h2 className="heading">Previewer</h2>
          <div 
            dangerouslySetInnerHTML={{
              __html: marked.parse(this.state.value)
            }}
            id="preview">
          </div>
        </div>
      </div>
    );
  }
}

export default MarkdownPreviewer;
