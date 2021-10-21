import './App.css';
import CommentPost from './Components/CommentPost';

function App() {
  const data = {
    "_id": "001",
      "author": "albert",
      "body": "Whats the status?",
      "timestamp": "Sun Aug 02 2020 18:08:45 GMT+0530",
      "points": "2",
      "replies": [
        {
          "_id": "003",
          "author": "haren",
          "body": "Wrote the test suites, waiting for approval?",
          "timestamp": "Sun Aug 02 2020 18:12:45 GMT+0530",
          "points": "3",
          "replies": [
            {
              "_id": "004",
              "author": "albert",
              "body": "Thanks for the update!",
              "timestamp": "Sun Aug 02 2020 18:15:45 GMT+0530",
              "points": "8"
            }
          ]
        }
    ]};

  return (
    <div className="App">
      <CommentPost posts={data}/>
    </div>
  );
}

export default App;
