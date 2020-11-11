import React, {useState} from 'react';

import Author from '../components/Author/Author';
import Scoring from '../components/Scoring/Scoring';

function News({header, intro, author}) {
    const [score] = useState(5);
  
  
    return(
      <div className="News">
    <h2>{header}</h2>
    <p>{intro}</p>
    <Author author= {author}/>
    <Scoring score= {score}/>
    </div>
    );
  }

  export default News;