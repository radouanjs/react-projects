import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown'

function Markdown() {
    const [markdown, setMarkdown] = useState("# Markdown preview");


	return (
		<div className="markdown">
			<section className="text">
			    <textarea name="text" rows="4" cols="50" value={markdown} 
			              onChange={(e)=>setMarkdown(e.target.value)}></textarea>
			</section>
			<section className="markdown-preview">
			    <ReactMarkdown>{markdown}</ReactMarkdown>
			</section>
		</div>
	)
}

export default Markdown